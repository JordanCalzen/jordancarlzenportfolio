"use client";
import Sidebar from "@/components/side-bar";
import { useMinimal } from "@/store/minimize";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
	const { isMinimized } = useMinimal();

	return (
		<div className="flex min-h-screen bg-[#161616] text-white">
			<Sidebar />
			<main
				className={`flex-1 px-8 py-8 transition-all duration-300 ${
					isMinimized ? "ml-10" : "ml-[12rem]"
				}`}
			>
				{children}
			</main>
		</div>
	);
}
