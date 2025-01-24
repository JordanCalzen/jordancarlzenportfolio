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

const LinkButton = ({
	icon,
	text,
	link,
	active = false,
}: {
	icon: React.ReactNode;
	text: string;
	link: string;
	active?: boolean;
}) => (
	<Link
		href={link}
		className={`flex items-center text-xs  gap-4 w-full py-1 px-3 rounded-lg transition-colors ${
			active ? "bg-zinc-800" : "hover:bg-zinc-800"
		}`}
	>
		<button className="flex items-center gap-3 ">
			{icon}
			<span className="text-xs text-zinc-400">{text}</span>
		</button>
	</Link>
);

export default function Sidebar() {
	const { isMinimized, toogleMinimizeBtn } = useMinimal();

	return (
		<div
			className={`fixed top-0 left-0 h-screen bg-[#1C1C1C] border-r border-zinc-800 transition-all duration-300 overflow-y-auto scrollbar-hide ${
				isMinimized ? "w-10" : "w-46"
			}`}
		>
			<div className="sticky top-0 bg-[#1C1C1C] z-10">
				<div className="flex items-center justify-start gap-2 py-2 px-2">
					<div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
						<Image
							src="/placeholder.svg?height=40&width=40"
							alt=""
							width={40}
							height={40}
						/>
					</div>
					{!isMinimized && (
						<div>
							<h1 className="text-[.8rem] font-semibold text-white">
								Jordan Carlzen
							</h1>
							<h1 className="text-[.8rem] text-zinc-400">
								Fullstack Developer
							</h1>
						</div>
					)}
				</div>

				<button
					onClick={toogleMinimizeBtn}
					className="absolute top-12 right-1 border-[1px] border-zinc-800 w-6 h-6 rounded-full flex items-center justify-center transform transition duration-1000 ease-in-out animate-pulse"
				>
					<ChevronLeft
						className={`w-4 h-4 text-white transition-transform ${
							isMinimized ? "rotate-180" : ""
						}`}
					/>
				</button>
			</div>

			<nav className="mt-4 px-2 space-y-1">
				<LinkButton
					icon={<Compass className="w-3 h-3 text-zinc-400" />}
					text="Explore"
					link="/home"
				/>
				<LinkButton
					icon={<Headphones className="w-3 h-3 text-zinc-400" />}
					text="Services"
					link="/"
					active
				/>
				<LinkButton
					link="/"
					icon={<FolderKanban className="w-3 h-3 text-zinc-400" />}
					text="Projects"
				/>
				<LinkButton
					link="/"
					icon={<User className="w-3 h-3 text-zinc-400" />}
					text="About"
				/>
			</nav>

			<div className="mt-2 px-2 ">
				<h2 className="text-xs font-semibold text-zinc-500 px-3 mb-2">
					Resources
				</h2>
				<div className="space-y-1">
					<LinkButton
						link="/"
						icon={<Brain className="w-3 h-3 text-zinc-400" />}
						text="Thoughts"
					/>
					<LinkButton
						link="/"
						icon={<Layers className="w-3 h-3 text-zinc-400" />}
						text="Stack"
					/>
				</div>
			</div>

			<div className="mt-2 px-2">
				<h2 className="text-xs font-semibold text-zinc-500 px-3 mb-2">
					Connect
				</h2>
				<div className="space-y-1">
					<LinkButton
						link="/"
						icon={<Phone className="w-3 h-3 text-zinc-400" />}
						text="Contact"
					/>
					<LinkButton
						link="/"
						icon={<Linkedin className="w-3 h-3 text-zinc-400" />}
						text="LinkedIn"
					/>
					<LinkButton
						link="/"
						icon={<Twitter className="w-3 h-3 text-zinc-400" />}
						text="Twitter"
					/>
					<LinkButton
						link="/"
						icon={<Youtube className="w-3 h-3 text-zinc-400" />}
						text="YouTube"
					/>
				</div>
			</div>
		</div>
	);
}
