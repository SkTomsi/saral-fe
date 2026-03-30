import { Outlet } from "react-router"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import { AppSidebar } from "@/components/dashboard/dashboard-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar />
        <main className="flex min-h-screen w-full flex-col">
          <DashboardHeader />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}
