import { Component } from "react";
import "./App.css";
import Details from "./pages/details/Details";
import SideBar from "./pages/side-bar/SideBar";

class App extends Component {
	render() {
		return (
			<div className="homepage">
				<div className="container-side-bar">
					<SideBar />
				</div>
				<div className="container-details">
					<Details />
				</div>
			</div>
		);
	}
}

export default App;
