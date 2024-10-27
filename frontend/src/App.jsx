
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Index from "./pages/MumView/Index";
import DocView from "./pages/DoctorsView/DocView";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/docView" element={<DocView />} />
			</Routes>
		</Router>
	);
}

export default App;
