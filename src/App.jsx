import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AppLayout from "./components/ui/AppLayout";
import Home from "./pages/Home";

import About from "./pages/About";
import Services from "./pages/Services";
import ServiceArea from "./pages/ServiceArea";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Estimate from "./pages/Estimate";
import PathNotFound from "./pages/PathNotFound"; 


import Login from "./components/authentication/Login";

// Create cached (where data gets stored)
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000, // The period that the data in the cache will stay valid or fresh
		},
	},
});

function App() {
	return (
		<div>
			{/* Provides data for all the components in the app */}
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Routes>
						<Route element={<AppLayout />}>
							{/* Navigates to the home and also replaces the previous route with home in the history stack */}
							<Route index element={<Navigate replace to="home" />} />
							<Route path="home" element={<Home />} />
							<Route path="about" element={<About />} />
							<Route path="services" element={<Services />} />
							<Route path="ServiceArea" element={<ServiceArea />} />
							<Route path="Gallery" element={<Gallery />} />
							<Route path="contact" element={<Contact />} />
						</Route>
						<Route path="estimate" element={<Estimate />} />
						<Route path="login" element={<Login />} />
						<Route path="*" element={<PathNotFound />} />
					</Routes>
				</BrowserRouter>
				<Toaster
					position="top-center"
					gutter={12}
					containerStyle={{ margin: "8px" }}
					toastOptions={{
						success: {
							duration: 3000,
						},
						error: {
							duration: 5000,
						},
						styles: {
							fontSize: "16px",
							padding: "16px 24px",
							maxWidth: "500px",
							backgroundColor: "var(--color-grey-0)", // Ensure these custom properties are defined in your CSS
							color: "var(--color-grey-0)", // Ensure these custom properties are defined in your CSS
						},
					}}
				/>
			</QueryClientProvider>
		</div>
	);
}

export default App;
