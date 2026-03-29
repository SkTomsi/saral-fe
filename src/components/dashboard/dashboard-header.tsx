import { Bell } from "lucide-react";
import { useLocation } from "react-router";
import avatarImg from "../../assets/avatar.jpg";
import { HeaderLSemiBold } from "../typography";

const routeNameMap: Record<string, string> = {
	"/": "Home",
	"/insights": "Insights",
	"/gamification": "Gamification",
	"/applications": "Applications",
	"/payments": "Payments",
};

export default function DashboardHeader() {
	const location = useLocation();

	const activeLink = routeNameMap[location.pathname] || "Dashboard";

	return (
		<div className="flex w-full items-center justify-between p-4 px-12 border-2 border-blue-500">
			<HeaderLSemiBold>{activeLink}</HeaderLSemiBold>
			<div className="flex gap-4 items-center">
				<div className="relative">
					<Bell />
					<span className="bg-red-500 text-xs p-1 h-4 w-4 rounded-full aspect-square absolute flex items-center justify-center -top-1 -right-1 text-white">
						5
					</span>
				</div>
				<div className="h-8 w-8 rounded-full flex items-center justify-center">
					<img
						src={avatarImg}
						alt="avatar"
						className="h-full w-full rounded-full"
					/>
				</div>
			</div>
		</div>
	);
}
