import { BrowserRouter, Route, Routes } from "react-router";
import DashboardLayout from "./layout/dashboard-layout.tsx";
import GamificationPage from "./pages/gamification-page.tsx";

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<DashboardLayout />}>
					<Route index path="/gamification" element={<GamificationPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
