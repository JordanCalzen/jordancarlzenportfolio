"use client";
import React from "react";
import { useSidebar } from "./ui/sidebar";

export default function Projects() {
	const { state } = useSidebar();
	const isCollapsed = state === "collapsed";
	return (
		<div
			className={`w-full transition-all duration-300 ${
				isCollapsed ? "md:pl-[2rem]" : "md:pl-[4rem]  "
			}`}
		>
			<div className="w-full  dark md:pr-[2rem] p-8 md:p-0 mx-auto ">
				<h1>hello</h1>
			</div>
		</div>
	);
}
