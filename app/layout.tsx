import type React from "react";
import { AppSidebar } from "@/components/side-bar";
import Footer from "@/components/footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/top-nav";
import MobileNavigation from "@/components/mobile-bottom-nav";
import { ThemeProvider } from "@/components/theme-provider";

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
			<body className={`${inter.className} bg-[#161616] text-white`}>
				<SidebarProvider defaultOpen={true}>
					<div className="flex min-h-screen">
						<AppSidebar />
						<div className="flex-1 flex flex-col">
							<TopNav />
							<main className="flex-grow">
								<ThemeProvider
									attribute="class"
									defaultTheme="system"
									enableSystem
									disableTransitionOnChange
								>
									{children}
								</ThemeProvider>
							</main>
							<Footer />
							<MobileNavigation />
						</div>
					</div>
				</SidebarProvider>
			</body>
		</html>
	);
}
