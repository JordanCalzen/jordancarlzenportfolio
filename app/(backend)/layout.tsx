import SideBar from "@/components/backend/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React, { ReactNode } from "react";

export default async function DashboardLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<SidebarProvider>
			<div
				className='flex w-full min-h-screen overflow-hidden">
        <div className="flex-shrink-0'
			>
				<div className="flex-shrink-0">
					<SideBar />
				</div>

				<main className=" md:flex-grow">{children}</main>
			</div>
		</SidebarProvider>
	);
}
