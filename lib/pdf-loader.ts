import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { Document } from "@langchain/core/documents";
// import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

import axios from "axios";

export type PDFSource = {
	type: "url" | "local" | "buffer";
	source: string | Buffer;
};

export async function getChunkedDocsFromPDF(
	pdfSource: PDFSource
): Promise<Document[]> {
	let docs: Document[] = [];

	try {
		switch (pdfSource.type) {
			case "url": {
				// Validate URL
				if (typeof pdfSource.source !== "string" || !pdfSource.source) {
					throw new Error("Invalid URL provided");
				}

				// Download PDF from URL
				const response = await axios.get(pdfSource.source, {
					responseType: "arraybuffer",
					// timeout: 30000, // Add timeout
				});

				if (!response.data || response.data.length === 0) {
					throw new Error("Empty response from URL");
				}

				const pdfBlob = new Blob([response.data], { type: "application/pdf" });
				const loader = new WebPDFLoader(pdfBlob);
				docs = await loader.load();
				break;
			}
			case "local": {
				// Validate local path
				if (typeof pdfSource.source !== "string" || !pdfSource.source) {
					throw new Error("Invalid local file path");
				}

				const loader = new PDFLoader(pdfSource.source);
				docs = await loader.load();
				break;
			}
			case "buffer": {
				// Validate buffer
				if (
					!Buffer.isBuffer(pdfSource.source) ||
					pdfSource.source.length === 0
				) {
					throw new Error("Invalid buffer provided");
				}

				const pdfBlob = new Blob([pdfSource.source as BlobPart], {
					type: "application/pdf",
				});
				const loader = new WebPDFLoader(pdfBlob);
				docs = await loader.load();
				break;
			}
			default:
				throw new Error("Unsupported PDF source type");
		}

		// Validate that docs were actually loaded
		if (!docs || !Array.isArray(docs)) {
			throw new Error("Failed to load documents - no array returned");
		}

		if (docs.length === 0) {
			throw new Error("No documents were extracted from the PDF");
		}

		// Validate each document has required properties
		const invalidDocs = docs.filter(
			(doc) => !doc.pageContent || typeof doc.pageContent !== "string"
		);
		if (invalidDocs.length > 0) {
			throw new Error(
				`Found ${invalidDocs.length} invalid documents without pageContent`
			);
		}

		return docs;
	} catch (e) {
		console.error("PDF loading error:", e);

		// Provide more specific error messages
		if (e instanceof Error) {
			if (e.message.includes("ENOENT")) {
				throw new Error("Local file not found: " + pdfSource.source);
			}
			if (e.message.includes("network") || e.message.includes("timeout")) {
				throw new Error("Network error while downloading PDF from URL");
			}
			if (e.message.includes("Unexpected token") || e.message.includes("PDF")) {
				throw new Error("Invalid PDF file format");
			}
		}

		throw new Error(
			"PDF docs chunking failed: " +
				(e instanceof Error ? e.message : String(e))
		);
	}
}
