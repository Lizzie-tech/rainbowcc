import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import WhatsOn from "./pages/WhatsOn/index";
import VenuHire from "./pages/TheVenue/index";
import AboutUs from "./pages/AbooutUs/index";
import Socials from "./pages/Activities/Socials";
import Percussion from "./pages/Activities/MusicClasses";
import StrengthClass from "./pages/Activities/Strength";
import Zumba from "./pages/Activities/Zumba";
import CircuitClass from "./pages/Activities/CircuitClass";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						element={<Home />}
						path="/"
					/>
					<Route
						element={<WhatsOn />}
						path="/whatson"
					/>
					<Route
						element={<VenuHire />}
						path="/thevenue"
					/>
					<Route
						element={<AboutUs />}
						path="/aboutus"
					/>
					<Route
						element={<Socials />}
						path="/socials"
					/>
					<Route
						element={<Percussion />}
						path="/percussion"
					/>
					<Route
						element={<StrengthClass />}
						path="/strengthclass"
					/>
					<Route
						element={<Zumba />}
						path="/zumba"
					/>
					<Route
						element={<CircuitClass />}
						path="/circuitclass"
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
