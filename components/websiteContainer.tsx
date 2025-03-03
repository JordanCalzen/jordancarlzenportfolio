import { fetchProject } from "@/actions/fetch-apis";
import React from "react";
import WebsiteCard from "./websitecard";

export default async function WebsiteContainer() {
	const projectArray = (await fetchProject()) || [];
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{projectArray.slice(0, 2).map((project) => (
				<WebsiteCard key={project.id} project={project} />
			))}
		</div>
	);
}
