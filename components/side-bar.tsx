/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import {
	ChevronLeft,
	Compass,
	Headphones,
	FolderKanban,
	User,
	Brain,
	Layers,
	Phone,
	Linkedin,
	Twitter,
	Youtube,
} from "lucide-react";
import Link from "next/link";
import { useMinimal } from "@/store/minimize";
import { useState, useEffect } from "react";
import { ModeToggle } from "./toggleBtn";

const LinkButton = ({ icon, text, link, isMinimized }: any) => {
	return (
		<Link
			href={link}
			className="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-800 transition-colors duration-200"
		>
			{icon}
			{!isMinimized && <span>{text}</span>}
		</Link>
	);
};

export default function ImprovedSidebar() {
	const { isMinimized, toogleMinimizeBtn } = useMinimal();
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const checkVisibility = () => setIsVisible(window.innerWidth >= 768);
		checkVisibility();
		window.addEventListener("resize", checkVisibility);
		return () => window.removeEventListener("resize", checkVisibility);
	}, []);

	const mainLinks = [
		{
			icon: <Compass className="w-5 h-5 text-zinc-400" />,
			text: "Explore",
			link: "/home",
		},
		{
			icon: <Headphones className="w-5 h-5 text-zinc-400" />,
			text: "Services",
			link: "/",
			active: true,
		},
		{
			icon: <FolderKanban className="w-5 h-5 text-zinc-400" />,
			text: "Projects",
			link: "/",
		},
		{
			icon: <User className="w-5 h-5 text-zinc-400" />,
			text: "About",
			link: "/",
		},
	];

	if (!isVisible) {
		return null; // Don't render the sidebar on screens smaller than 500px
	}

	return (
		<div
			className={`fixed top-0 left-0 h-screen bg-[#1C1C1C] border-r border-zinc-800 transition-all duration-300 overflow-y-auto scrollbar-hide ${
				isMinimized ? "w-[4rem]" : "w-[15rem]"
			}`}
		>
			<div className="sticky top-0 bg-[#1C1C1C] z-10 p-2">
				<div className="flex items-center justify-center gap-2 py-2">
					<div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
						<Image src="/images/websitepic.jpg" alt="" width={40} height={40} />
					</div>
					{!isMinimized && (
						<div>
							<h1 className="text-[1rem] font-semibold text-white">
								Jordan Carlzen
							</h1>
							<h1 className="text-[1rem] text-zinc-400">Fullstack Developer</h1>
						</div>
					)}
				</div>

				<button
					onClick={toogleMinimizeBtn}
					className="absolute top-16 right-1 border-[1px] border-zinc-800 w-6 h-6 rounded-full flex items-center justify-center transform transition duration-1000 ease-in-out animate-pulse"
				>
					<ChevronLeft
						className={`w-4 h-4 text-white transition-transform ${
							isMinimized ? "rotate-180" : ""
						}`}
					/>
				</button>
			</div>

			{!isMinimized && (
				<div className="px-2 py-4">
					<div className="relative">
						<input
							type="text"
							placeholder="Search..."
							className="w-full bg-zinc-800 text-white text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
				</div>
			)}

			<nav className="mt-4 px-2 space-y-2">
				{mainLinks.map((link, index) => (
					<LinkButton
						key={index}
						{...link}
						isMinimized={isMinimized}
						isMobile={false}
					/>
				))}
			</nav>

			{!isMinimized && (
				<>
					<div className="mt-2 px-2">
						<h2 className="text-sm font-semibold text-zinc-500 px-3 mb-2">
							Resources
						</h2>
						<div className="space-y-2">
							<LinkButton
								link="/"
								icon={<Brain className="w-5 h-5 text-zinc-400" />}
								text="Thoughts"
								isMinimized={isMinimized}
								isMobile={false}
							/>
							<LinkButton
								link="/"
								icon={<Layers className="w-5 h-5 text-zinc-400" />}
								text="Stack"
								isMinimized={isMinimized}
								isMobile={false}
							/>
						</div>
					</div>

					<div className="mt-2 px-2">
						<h2 className="text-sm font-semibold text-zinc-500 px-3 mb-2">
							Connect
						</h2>
						<div className="space-y-2">
							<LinkButton
								link="/"
								icon={<Phone className="w-5 h-5 text-zinc-400" />}
								text="Contact"
								isMinimized={isMinimized}
								isMobile={false}
							/>
							<LinkButton
								link="/"
								icon={<Linkedin className="w-5 h-5 text-zinc-400" />}
								text="LinkedIn"
								isMinimized={isMinimized}
								isMobile={false}
							/>
							<LinkButton
								link="/"
								icon={<Twitter className="w-5 h-5 text-zinc-400" />}
								text="Twitter"
								isMinimized={isMinimized}
								isMobile={false}
							/>
							<LinkButton
								link="/"
								icon={<Youtube className="w-5 h-5 text-zinc-400" />}
								text="YouTube"
								isMinimized={isMinimized}
								isMobile={false}
							/>
						</div>
						<div className="space-y-2">
							<ModeToggle />
						</div>
					</div>
				</>
			)}
		</div>
	);
}
