"use client";
import {
	Compass,
	ShoppingBag,
	Home,
	Briefcase,
	User2,
	Newspaper,
	BookOpen,
	Layers,
	Mail,
	Search,
} from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
	useSidebar,
} from "@/components/ui/sidebar";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainNavItems = [
	{ icon: Compass, label: "Explore", shortcut: "1", href: "/" },
	{ icon: ShoppingBag, label: "Boutique", shortcut: "2", href: "/dh" },
	{ icon: Home, label: "Projects", shortcut: "3", href: "/projects" },
	{ icon: Briefcase, label: "Services", shortcut: "4", href: "/services" },
	{ icon: User2, label: "About", shortcut: "5", href: "/about" },
];

const resourceItems = [
	{ icon: Newspaper, label: "Feed", shortcut: "6", href: "/feed" },
	{ icon: BookOpen, label: "Thoughts", shortcut: "7", href: "/thoughts" },
	{ icon: Layers, label: "Stack", shortcut: "8", href: "/stack" },
];

const connectItems = [{ icon: Mail, label: "Contact", shortcut: "C" }];

export function AppSidebar() {
	const { state } = useSidebar();
	const isCollapsed = state === "collapsed";

	const pathname = usePathname();

	return (
		<Sidebar
			collapsible="icon"
			className=" dark border-r bg-[#1C1C1C] border-zinc-800"
		>
			<SidebarHeader className="p-4">
				<div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
					<div className="relative w-10 h-10">
						<Image
							src="/images/jordancarlzen1.jpg"
							alt="Profile"
							width={500}
							height={500}
							className="rounded-full object-cover w-full h-full"
						/>
					</div>
					<div className="flex flex-col group-data-[collapsible=icon]:hidden">
						<span className="text-sm font-medium text-zinc-100">
							Jordan Carlzen
						</span>
						<span className="text-xs text-zinc-400">Fullstack Developer</span>
					</div>
				</div>
			</SidebarHeader>
			<SidebarContent className="px-2 custom-scrollbar">
				<TooltipProvider delayDuration={0}>
					<SidebarMenu>
						{mainNavItems.map(({ icon: Icon, label, shortcut, href }) => {
							const isActive = pathname === href;
							return (
								<SidebarMenuItem key={label}>
									<Tooltip>
										<TooltipTrigger asChild>
											<SidebarMenuButton
												asChild
												className={`flex items-center justify-between h-10 w-full  px-3bg-[#1C1C1C] border border-zinc-800 text-white rounded-lg  hover:bg-zinc-800 transition-all duration-200 ${
													isActive ? "bg-zinc-800 text-white" : ""
												}`}
											>
												<Link
													href={href}
													className="flex items-center justify-between w-full group-data-[collapsible=icon]:justify-center"
												>
													<div className="flex items-center gap-3">
														<Icon className="h-5 w-5" />
														<span className="text-sm group-data-[collapsible=icon]:hidden">
															{label}
														</span>
													</div>
													<span className="text-xs text-zinc-600 group-data-[collapsible=icon]:hidden border border-zinc-800 rounded-sm px-1">
														{shortcut}
													</span>
												</Link>
											</SidebarMenuButton>
										</TooltipTrigger>
										<TooltipContent
											side="right"
											className="bg-zinc-800 text-zinc-100 border-zinc-700"
											hidden={!isCollapsed}
										>
											{label}
										</TooltipContent>
									</Tooltip>
								</SidebarMenuItem>
							);
						})}
					</SidebarMenu>

					<div className="mt-6">
						<h4 className="text-xs font-semibold text-zinc-500 px-3 mb-2 group-data-[collapsible=icon]:hidden">
							RESOURCES
						</h4>
						<SidebarMenu>
							{resourceItems.map(({ icon: Icon, label, shortcut, href }) => {
								const isActive = pathname === href;
								return (
									<SidebarMenuItem key={label}>
										<Tooltip>
											<TooltipTrigger asChild>
												<SidebarMenuButton
													asChild
													className={`flex items-center justify-between h-10 w-full  px-3bg-[#1C1C1C] border border-zinc-800 text-white rounded-lg  hover:bg-zinc-800 transition-all duration-200 ${
														isActive ? "bg-zinc-800 text-white" : ""
													}`}
												>
													<Link
														href={href}
														className="flex items-center justify-between w-full group-data-[collapsible=icon]:justify-center"
													>
														<div className="flex items-center gap-3">
															<Icon className="h-5 w-5" />
															<span className="text-sm group-data-[collapsible=icon]:hidden">
																{label}
															</span>
														</div>
														<span className="text-xs text-zinc-600 group-data-[collapsible=icon]:hidden border border-zinc-800 rounded-sm px-1">
															{shortcut}
														</span>
													</Link>
												</SidebarMenuButton>
											</TooltipTrigger>
											<TooltipContent
												side="right"
												className="bg-zinc-800 text-zinc-100 border-zinc-700"
												hidden={!isCollapsed}
											>
												{label}
											</TooltipContent>
										</Tooltip>
									</SidebarMenuItem>
								);
							})}
						</SidebarMenu>
					</div>

					<div className="mt-6">
						<SidebarMenu>
							<SidebarMenuItem>
								<Tooltip>
									<TooltipTrigger asChild>
										<SidebarMenuButton
											asChild
											className="flex items-center justify-between h-10 w-full rounded-lg px-3 text-zinc-400 
    hover:text-zinc-100 hover:bg-zinc-800 transition-all duration-200 
    "
										>
											<Link
												href="#"
												className="flex items-center justify-between w-full group-data-[collapsible=icon]:justify-center"
											>
												<div className="flex items-center gap-3">
													<Search className="h-5 w-5" />
													<span className="text-sm group-data-[collapsible=icon]:hidden">
														Search...
													</span>
												</div>
												<span className="text-xs text-zinc-600 group-data-[collapsible=icon]:hidden border border-zinc-800 rounded-sm px-1">
													S
												</span>
											</Link>
										</SidebarMenuButton>
									</TooltipTrigger>
									<TooltipContent
										side="right"
										className="bg-zinc-800 text-zinc-100 border-zinc-700"
										hidden={!isCollapsed}
									>
										Search
									</TooltipContent>
								</Tooltip>
							</SidebarMenuItem>
						</SidebarMenu>
					</div>
				</TooltipProvider>
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
}
