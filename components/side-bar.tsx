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

const mainNavItems = [
	{ icon: Compass, label: "Explore", shortcut: "1" },
	{ icon: ShoppingBag, label: "Boutique", shortcut: "2" },
	{ icon: Home, label: "Projects", shortcut: "3" },
	{ icon: Briefcase, label: "Services", shortcut: "4" },
	{ icon: User2, label: "About", shortcut: "5" },
];

const resourceItems = [
	{ icon: Newspaper, label: "Feed", shortcut: "6" },
	{ icon: BookOpen, label: "Thoughts", shortcut: "7" },
	{ icon: Layers, label: "Stack", shortcut: "8" },
];

const connectItems = [{ icon: Mail, label: "Contact", shortcut: "C" }];

export function AppSidebar() {
	const { state } = useSidebar();
	const isCollapsed = state === "collapsed";

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
						{mainNavItems.map((item) => (
							<SidebarMenuItem key={item.label}>
								<Tooltip>
									<TooltipTrigger asChild>
										<SidebarMenuButton
											asChild
											className="flex items-center justify-between h-10 w-full rounded-lg px-3 text-zinc-400 
    hover:text-zinc-100 hover:bg-zinc-800 transition-all duration-200 
    "
										>
											<a
												href="#"
												className="flex items-center justify-between w-full group-data-[collapsible=icon]:justify-center"
											>
												<div className="flex items-center gap-3">
													<item.icon className="h-5 w-5" />
													<span className="text-sm group-data-[collapsible=icon]:hidden">
														{item.label}
													</span>
												</div>
												<span className="text-xs text-zinc-600 group-data-[collapsible=icon]:hidden border border-zinc-800 rounded-sm px-1">
													{item.shortcut}
												</span>
											</a>
										</SidebarMenuButton>
									</TooltipTrigger>
									<TooltipContent
										side="right"
										className="bg-zinc-800 text-zinc-100 border-zinc-700"
										hidden={!isCollapsed}
									>
										{item.label}
									</TooltipContent>
								</Tooltip>
							</SidebarMenuItem>
						))}
					</SidebarMenu>

					<div className="mt-6">
						<h4 className="text-xs font-semibold text-zinc-500 px-3 mb-2 group-data-[collapsible=icon]:hidden">
							RESOURCES
						</h4>
						<SidebarMenu>
							{resourceItems.map((item) => (
								<SidebarMenuItem key={item.label}>
									<Tooltip>
										<TooltipTrigger asChild>
											<SidebarMenuButton
												asChild
												className="flex items-center justify-between h-10 w-full rounded-lg px-3 text-zinc-400 
    hover:text-zinc-100 hover:bg-zinc-800 transition-all duration-200 
    "
											>
												<a
													href="#"
													className="flex items-center justify-between w-full group-data-[collapsible=icon]:justify-center"
												>
													<div className="flex items-center gap-3">
														<item.icon className="h-5 w-5" />
														<span className="text-sm group-data-[collapsible=icon]:hidden">
															{item.label}
														</span>
													</div>
													<span className="text-xs text-zinc-600 group-data-[collapsible=icon]:hidden border border-zinc-800 rounded-sm px-1">
														{item.shortcut}
													</span>
												</a>
											</SidebarMenuButton>
										</TooltipTrigger>
										<TooltipContent
											side="right"
											className="bg-zinc-800 text-zinc-100 border-zinc-700"
											hidden={!isCollapsed}
										>
											{item.label}
										</TooltipContent>
									</Tooltip>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</div>

					<div className="mt-6">
						<h4 className="text-xs font-semibold text-zinc-500 px-3 mb-2 group-data-[collapsible=icon]:hidden">
							CONNECT
						</h4>
						<SidebarMenu>
							{connectItems.map((item) => (
								<SidebarMenuItem key={item.label}>
									<Tooltip>
										<TooltipTrigger asChild>
											<SidebarMenuButton
												asChild
												className="flex items-center justify-between h-10 w-full rounded-lg px-3 text-zinc-400 
    hover:text-zinc-100 hover:bg-zinc-800 transition-all duration-200 
    "
											>
												<a
													href="#"
													className="flex items-center justify-between w-full group-data-[collapsible=icon]:justify-center"
												>
													<div className="flex items-center gap-3">
														<item.icon className="h-5 w-5" />
														<span className="text-sm group-data-[collapsible=icon]:hidden">
															{item.label}
														</span>
													</div>
													<span className="text-xs text-zinc-600 group-data-[collapsible=icon]:hidden border border-zinc-800 rounded-sm px-1">
														{item.shortcut}
													</span>
												</a>
											</SidebarMenuButton>
										</TooltipTrigger>
										<TooltipContent
											side="right"
											className="bg-zinc-800 text-zinc-100 border-zinc-700"
											hidden={!isCollapsed}
										>
											{item.label}
										</TooltipContent>
									</Tooltip>
								</SidebarMenuItem>
							))}
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
											<a
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
											</a>
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
