import { BrowserRouter, Route, Routes } from "react-router";
import DashboardLayout from "./layout/dashboard-layout.tsx";
import GamificationPage from "./pages/gamification-page.tsx";

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<DashboardLayout />}>
					{/* <Route index element={<HomePage />} /> */}
					<Route path="insights" element={<div>Insights Page</div>} />
					<Route path="gamification" element={<GamificationPage />} />
					<Route path="applications" element={<div>Applications Page</div>} />
					<Route path="payments" element={<div>Payments Page</div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
