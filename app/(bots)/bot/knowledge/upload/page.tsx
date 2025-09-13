"use client";
import { prepare } from "@/actions/prepare";
import PDFFileUpload, { FileProps } from "@/components/PDFFileUploader";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { PDFSource } from "@/lib/pdf-loader";
import { UploadButton } from "@/lib/uploadthing";

import {
	AlertCircle,
	CheckCheck,
	CheckCircle,
	FileText,
	Loader2,
	Upload,
} from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

export default function Page() {
	const [file, setFile] = useState<FileProps | null>(null);
	const [loading, setLoading] = useState(false);
	const [loadingMsg, setLoadingMsg] = useState("");
	const [success, setSuccess] = useState(true);
	async function submit() {
		try {
			setLoading(true);
			setLoadingMsg("Initializing Client and creating index...");

			const pdfSource: PDFSource = {
				type: "url",
				source: file?.url ?? "",
			};
			await prepare(pdfSource);
			setLoading(false);
			toast.success("Knowledge Data Synced Successfully");
			setSuccess(true);
		} catch (error) {
			setLoading(false);
			setLoadingMsg("");
			console.log(error);
		}
	}
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header Section */}
			<div className="bg-white border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-2xl font-bold text-gray-900">
								Knowledge Base Upload
							</h1>
							<p className="mt-1 text-sm text-gray-500">
								Transform your PDF documents into an interactive knowledge base
							</p>
						</div>
						<div className="flex items-center space-x-4">
							<Button
								variant="outline"
								className="flex items-center gap-2 bg-white text-black border-gray-200"
							>
								<FileText className="w-4 h-4" />
								View Docs
							</Button>
							<Button
								variant="outline"
								className="flex items-center gap-2 bg-white text-black border-gray-200"
							>
								<CheckCircle className="w-4 h-4" />
								View Status
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Upload Card */}
					<div className="md:col-span-2">
						<Card className="bg-white border-gray-200 text-black">
							<CardHeader>
								<CardTitle className="">Upload PDF Document</CardTitle>
								<CardDescription className="">
									Upload your PDF document to create an interactive knowledge
									base. We support files up to 10MB.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									{file ? (
										<div className="space-y-4">
											<Alert className="bg-white border-gray-200 text-black">
												<FileText className="h-4 w-4" />
												<AlertTitle>File Selected</AlertTitle>
												<AlertDescription>
													{file.title} ({(file.size / 1024 / 1024).toFixed(2)}{" "}
													MB)
												</AlertDescription>
											</Alert>

											{loading ? (
												<Button disabled className="w-full">
													<Loader2 className="mr-2 h-4 w-4 animate-spin" />
													{loadingMsg}
												</Button>
											) : (
												<Button
													onClick={() => submit()}
													className="w-full"
													variant="default"
												>
													<Upload className="mr-2 h-4 w-4" />
													Upload to Pinecone
												</Button>
											)}
										</div>
									) : (
										<div>
											<PDFFileUpload
												label=""
												file={file}
												setFile={setFile}
												endpoint="pdfUpload"
											/>
										</div>
									)}
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Info Card */}
					<div className="md:col-span-1">
						<Card className="bg-white text-black border-gray-200">
							<CardHeader>
								<CardTitle>Upload Guidelines</CardTitle>
								<CardDescription>
									Follow these guidelines for best results
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="space-y-4">
									<li className="flex items-start gap-3">
										<CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
										<span className="text-sm">
											PDF files up to 10MB are supported
										</span>
									</li>
									<li className="flex items-start gap-3">
										<CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
										<span className="text-sm">
											Text should be clear and searchable
										</span>
									</li>
									<li className="flex items-start gap-3">
										<CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
										<span className="text-sm">
											Documents will be processed automatically
										</span>
									</li>
									<li className="flex items-start gap-3">
										<AlertCircle className="w-5 h-5 text-amber-500 mt-0.5" />
										<span className="text-sm">
											Processing time may vary based on document size
										</span>
									</li>
								</ul>
							</CardContent>
						</Card>

						{/* Status Card */}
						<Card className="mt-4 text-black bg-white border-gray-200">
							<CardHeader>
								<CardTitle>Processing Steps</CardTitle>
								<CardDescription>
									Your document will go through these steps
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
											1
										</div>
										<span className="text-sm">Document Upload</span>
									</div>
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
											2
										</div>
										<span className="text-sm">Text Extraction</span>
									</div>
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
											3
										</div>
										<span className="text-sm">Vector Processing</span>
									</div>
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
											4
										</div>
										<span className="text-sm">Pinecone Integration</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
