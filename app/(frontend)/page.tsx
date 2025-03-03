import { fetchProjects } from "@/actions/fetch-apis";
import MainContent from "@/components/main";
import React from "react";

export default async function page() {
	const projectArray = await fetchProjects();
	return (
		<div>
			<MainContent project={projectArray} />
		</div>
	);
}
