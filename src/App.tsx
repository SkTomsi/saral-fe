import { BrowserRouter, Route, Routes } from "react-router";
import DashboardLayout from "./components/layout/dashboard-layout.tsx";
import GamificationPage from "./pages/gamification-page.tsx";

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<DashboardLayout />}>
					<Route
						index
						element={
							<div className="p-3">
								Home Page
								<div>Checkout gamification tab to create a reward system</div>
							</div>
						}
					/>
					<Route
						path="insights"
						element={<div className="p-3">Insights Page</div>}
					/>
					<Route path="gamification" element={<GamificationPage />} />
					<Route
						path="applications"
						element={<div className="p-3">Applications Page</div>}
					/>
					<Route
						path="payments"
						element={<div className="p-3">Payments Page</div>}
					/>
					<Route
						path="/settings"
						element={<div className="p-3">Settings Page</div>}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
