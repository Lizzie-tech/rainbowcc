import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { CssBaseline, Container } from "@mui/material";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<CssBaseline />
		<NavBar />
		<Container sx={{ height: "100%", width: "100%" }}>
			<App />
		</Container>
		<Footer />
	</StrictMode>
);
