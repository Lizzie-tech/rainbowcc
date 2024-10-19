import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<CssBaseline />
		<NavBar />
		<App />
		<Footer />
	</StrictMode>
);
