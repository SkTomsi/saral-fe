import { Brain, Briefcase, ClipboardList, Home, Wallet } from "lucide-react";
import type * as React from "react";
import { NavLink } from "react-router";

import {
	Sidebar,
	SidebarContent,
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
			<SidebarContent className="p-4 bg-magenta-3">
				<SidebarHeader>
					<div className="flex items-center gap-4">
						<div className="size-12 rounded-xl bg-magenta-12" />
						<HeaderLSemiBold>SARAL OS</HeaderLSemiBold>
					</div>
				</SidebarHeader>
				<SidebarMenu className="mt-6 gap-2">
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

			<SidebarRail />
		</Sidebar>
	);
}
