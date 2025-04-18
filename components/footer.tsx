"use client";

import { ArrowRight, Dot } from "lucide-react";
import Link from "next/link";
import Digitalclock from "./digitalclock";
import { useSidebar } from "@/components/ui/sidebar";

export default function Footer() {
	const { state } = useSidebar();
	const isCollapsed = state === "collapsed";

	return (
		<footer
			className={`bg-[#1C1C1C]  transition-all duration-300 ${
				isCollapsed ? "md:pl-[.8rem]" : "md:pl-[2.5rem]"
			}`}
		>
			<div className="max-w-7xl mx-auto px-10 py-8 md:px-6 md:py-12">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 text-[#858585] border-b-[1px] border-zinc-800">
					{[
						{
							title: "Index",
							links: ["Explore", "Projects", "Services", "About"],
						},
						{ title: "Products", links: ["Linux", "Bilify", "AI", "Websites"] },
						{ title: "Resources", links: ["Feed", "Thoughts", "Stack"] },
						{
							title: "Connect",
							links: ["Contact", "Twitter", "LinkedIn", "Instagram", "YouTube"],
						},
					].map((section, index) => (
						<div key={index} className="flex flex-col items-start">
							<h2 className="text-white mb-2">{section.title}</h2>
							{section.links.map((link, linkIndex) => (
								<Link
									key={linkIndex}
									href=""
									className="hover:text-white transition-colors"
								>
									{link}
								</Link>
							))}
						</div>
					))}
				</div>

				<div className="py-8 flex flex-col md:flex-row items-start justify-between text-[#858585] border-b-[1px] border-zinc-800">
					<div className="mb-4 md:mb-0">
						<div className="flex items-center text-white mb-2">
							Currently Working
							<div className="text-green-500 text-4xl transform transition duration-1000 ease-in-out animate-pulse">
								<Dot className="w-10 h-10" />
							</div>
						</div>
						<Link
							href=""
							className="flex items-center justify-start gap-2 text-[#858585] hover:text-white transition-colors"
						>
							Reach out <ArrowRight className="w-4 h-4" />
						</Link>
					</div>
					<Digitalclock />
				</div>

				<div className="flex flex-wrap items-center justify-start gap-4 md:gap-8 pt-8">
					{["Buy this template", "Get Started", "Documentation", "Support"].map(
						(text, index) => (
							<Link
								key={index}
								href=""
								className="flex items-center justify-start gap-2 text-[#858585] hover:text-white transition-colors"
							>
								{text} {index === 0 && <ArrowRight className="w-4 h-4" />}
							</Link>
						)
					)}
				</div>
			</div>
		</footer>
	);
}
