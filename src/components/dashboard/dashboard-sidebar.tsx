import {
	Brain,
	Briefcase,
	ClipboardList,
	Home,
	Settings,
	Wallet,
} from "lucide-react";
import type * as React from "react";
import { NavLink } from "react-router";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import { HeaderLSemiBold } from "../typography";

const navItems = [
	{
		title: "Home",
		url: "/",
		icon: Home,
	},
	{
		title: "Insights",
		url: "/insights",
		icon: Brain,
	},
	{
		title: "Gamification",
		url: "/gamification",
		icon: Briefcase,
	},
	{
		title: "Applications",
		url: "/applications",
		icon: ClipboardList,
	},
	{
		title: "Payments",
		url: "/payments",
		icon: Wallet,
	},
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props}>
			<SidebarHeader className="bg-magenta-3">
				<div className="flex items-center gap-4">
					<div className="size-12 rounded-xl bg-magenta-12" />
					<HeaderLSemiBold>SARAL OS</HeaderLSemiBold>
				</div>
			</SidebarHeader>
			<SidebarContent className="bg-magenta-3">
				<SidebarMenu className="gap-1 px-4 mt-6">
					{navItems.map((item) => (
						<SidebarMenuItem key={item.title} className="[&_svg]:size-6 ">
							<SidebarMenuButton
								asChild
								className="bg-magenta-3 hover:bg-magenta-1 text-brand-secondary hover:text-magenta-12 flex items-center rounded-[10px] gap-2 p-3 h-10 transition-all duration-300 ease-out"
							>
								{/* TODO: Add active state */}
								<NavLink to={item.url}>
									<item.icon className="text-xl" />
									<span>{item.title}</span>
								</NavLink>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarContent>
			<SidebarFooter className="bg-magenta-3">
				<SidebarMenu>
					<SidebarMenuItem key={"/settings"} className="[&_svg]:size-6 ">
						<SidebarMenuButton
							asChild
							className="bg-magenta-3 hover:bg-magenta-1 text-brand-secondary hover:text-magenta-12 flex items-center rounded-[10px] gap-2 p-3 h-10 transition-all duration-300 ease-out"
						>
							{/* TODO: Add active state */}
							<NavLink to={"/settings"}>
								<Settings />
								<span>Settings</span>
							</NavLink>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
