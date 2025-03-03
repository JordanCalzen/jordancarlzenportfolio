"use client";
import MobileNavigation from "@/components/mobile-bottom-nav";
import TopNav from "@/components/top-nav";
import type { ReactNode } from "react";

export default function FrontLayout({ children }: { children: ReactNode }) {
	return (
		<div className=" min-h-screen bg-[#161616] text-white">
			<TopNav />
			<main>{children}</main>
			<MobileNavigation />
		</div>
	);
}
