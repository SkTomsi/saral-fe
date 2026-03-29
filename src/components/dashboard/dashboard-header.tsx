import { useLocation } from "react-router";
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
		<div className="flex w-full items-center justify-between p-4 px-12">
			<HeaderLSemiBold>{activeLink}</HeaderLSemiBold>
		</div>
	);
}
