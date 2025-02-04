"use client";

import Footer from "@/components/footer";
import MobileNavigation from "@/components/mobile-bottom-nav";
import ImprovedSidebar from "@/components/side-bar";
import TopNav from "@/components/top-nav";
import { useMinimal } from "@/store/minimize";
import type { ReactNode } from "react";

export default function FrontLayout({ children }: { children: ReactNode }) {
	const { isMinimized } = useMinimal();

	return (
		<div className="flex flex-col min-h-screen bg-[#161616] text-white">
			<TopNav />
			<ImprovedSidebar />

			<main
				className={`transition-all duration-300 ${
					isMinimized ? "md:ml-[5rem]" : "md:ml-[16rem]"
				} pt-4 px-4`}
			>
				{children}
			</main>
			<Footer />
			<MobileNavigation />
		</div>
	);
}
