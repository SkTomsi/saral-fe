import { Outlet } from "react-router";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import { AppSidebar } from "@/components/dashboard/dashboard-sidebar";

export default function DashboardLayout() {
	return (
		<div className="flex w-full">
			<AppSidebar />
			<main className="flex flex-col w-full min-h-screen">
				<DashboardHeader />
				<Outlet />
			</main>
		</div>
	);
}
