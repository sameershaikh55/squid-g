import { useEffect, useState } from "react";

// IMPORT CSS
import "./styles/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// IMPORT BOOTSTRAP
import "bootstrap";

// IMPORT REACT ROUTER
import { Route, Switch } from "react-router-dom";

// IMPORT PAGES
import Home from "./pages/Website/Home";
import Winner from "./pages/Website/Winner";
import Login from "./pages/Panel/Login";
import Access from "./pages/Panel/Access";
import Loader from "./components/Loader";

function App() {
	const [loader, setLoader] = useState(true);

	// LOADER
	useEffect(() => {
		document.body.style.overflow = "hidden";

		window.addEventListener("load", (event) => {
			document.body.style.overflowY = "auto";
			setLoader(false);
		});
	}, []);

	if (loader) {
		return (
			<div className="loading_page">
				<div className="inner_loading">
					<div className="loader w-100  text-center">
						<Loader />
					</div>
				</div>
			</div>
		);
	}

	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/winner" component={Winner} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/dashboard" component={Access} />
			</Switch>
		</>
	);
}

export default App;
