"use server";
import { Project } from "@prisma/client";

const url = process.env.NEXT_PUBLIC_BASE_URL;
export async function fetchProject() {
	try {
		const response = await fetch(`${url}/api/v1/projects`, {
			cache: "no-store",
		});
		const results = await response.json();
		return results.data as Project[];
	} catch (error) {
		return [];
	}
}
