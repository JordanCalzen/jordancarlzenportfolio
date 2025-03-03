import type React from "react";
import { AppSidebar } from "@/components/side-bar";
import Footer from "@/components/footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Jordan's Portfolio",
	description: "Showcasing my software design projects",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SidebarProvider defaultOpen={true}>
					<div className="flex min-h-screen bg-[#161616] text-white">
						<AppSidebar />
						<div className="flex-1 flex flex-col">
							<main className="flex-1">{children}</main>
							<Footer />
						</div>
					</div>
				</SidebarProvider>
			</body>
		</html>
	);
}
