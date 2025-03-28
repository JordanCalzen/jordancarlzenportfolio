"use client";

import Link from "next/link";
import { Compass, Headphones, FolderKanban, User } from "lucide-react";
import { useState, useEffect } from "react";
import type React from "react"; // Added import for React

const NavLink = ({
	icon,
	text,
	href,
}: {
	icon: React.ReactNode;
	text: string;
	href: string;
}) => (
	<Link href={href} className="flex flex-col items-center justify-center">
		{icon}
		<span className="text-xs mt-1 text-zinc-400">{text}</span>
	</Link>
);

export default function MobileNavigation() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const checkVisibility = () => {
			setIsVisible(window.innerWidth < 765);
		};

		checkVisibility();
		window.addEventListener("resize", checkVisibility);

		return () => window.removeEventListener("resize", checkVisibility);
	}, []);

	if (!isVisible) return null;

	return (
		<nav className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-zinc-800 px-4 py-2">
			<div className="flex justify-around items-center">
				<NavLink
					href="/"
					icon={<Compass className="w-6 h-6 text-zinc-400" />}
					text="Explore"
				/>
				<NavLink
					href="/services"
					icon={<Headphones className="w-6 h-6 text-zinc-400" />}
					text="Services"
				/>
				<NavLink
					href="/projects"
					icon={<FolderKanban className="w-6 h-6 text-zinc-400" />}
					text="Projects"
				/>
				<NavLink
					href="/about"
					icon={<User className="w-6 h-6 text-zinc-400" />}
					text="About"
				/>
			</div>
		</nav>
	);
}
