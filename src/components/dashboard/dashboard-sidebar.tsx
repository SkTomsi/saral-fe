import clsx from "clsx";
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
				<SidebarMenu className="mt-6 gap-1 px-4">
					{navItems.map((item) => (
						<SidebarMenuItem key={item.title} className="[&_svg]:size-6 ">
							<NavLink
								to={item.url}
								className={({ isActive }) =>
									clsx(
										"text-brand-secondary flex h-10 items-center gap-2 rounded-[10px] bg-magenta-3 p-3 transition-all duration-300 ease-out hover:text-magenta-12",
										isActive && "bg-white text-magenta-12",
									)
								}
							>
								<item.icon className="text-xl" />
								<span>{item.title}</span>
							</NavLink>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarContent>
			<SidebarFooter className="bg-magenta-3">
				<SidebarMenu>
					<SidebarMenuItem key={"/settings"} className="[&_svg]:size-6">
						<NavLink
							to={"/settings"}
							className={({ isActive }) =>
								clsx(
									"text-brand-secondary flex h-10 items-center gap-2 rounded-[10px] bg-magenta-3 p-3 transition-all duration-300 ease-out hover:text-magenta-12 hover:bg-white",
									isActive && "bg-white text-magenta-12",
								)
							}
						>
							<Settings className="text-xl" />
							<span>Settings</span>
						</NavLink>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
