import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import App from "./App.tsx";
import { SidebarProvider } from "./components/ui/sidebar.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import { store } from "./features/gamification/store/index.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider defaultTheme="light">
			<Provider store={store}>
				<SidebarProvider>
					<App />
					<Toaster position="top-right" />
				</SidebarProvider>
			</Provider>
		</ThemeProvider>
	</StrictMode>,
);
