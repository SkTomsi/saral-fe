import { Bell } from "lucide-react"
import { useLocation } from "react-router"
import avatarImg from "../../assets/avatar.jpg"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { HeaderLSemiBold } from "../typography"

const routeNameMap: Record<string, string> = {
  "/": "Home",
  "/insights": "Insights",
  "/gamification": "Gamification",
  "/applications": "Applications",
  "/payments": "Payments",
}

export default function DashboardHeader() {
  const location = useLocation()

  const activeLink = routeNameMap[location.pathname] || "Dashboard"

  return (
    <header className="flex w-full items-center justify-between border-b p-4 px-6 md:px-12">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <HeaderLSemiBold>{activeLink}</HeaderLSemiBold>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Bell />
          <span className="absolute -top-1 -right-1 flex aspect-square h-4 w-4 items-center justify-center rounded-full bg-red-500 p-1 text-xs text-white">
            5
          </span>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full">
          <img
            src={avatarImg}
            alt="avatar"
            className="h-full w-full rounded-full"
          />
        </div>
      </div>
    </header>
  )
}
