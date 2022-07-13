import { Component } from "react";
import "./App.css";
import Details from "./pages/details/Details";
import SideBar from "./pages/side-bar/SideBar";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tasks: [],
			taskSelected: {
				id: "10",
				title: "Test post",
				content: "Testposthahaha",
				timestamp: "",
			},
		};
	}
	createTask = () => {
		const milisecNow = Date.now();
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...this.state.taskSelected,
				timestamp: milisecNow % 10000,
			}),
		};
		fetch(`${process.env.REACT_APP_LOCALHOST_URL}/tasks`, requestOptions)
			.then((res) => res.json())
			.then((data) => this.setState({ tasks: data }));
	};
	getTasks = () => {
		const URL = `${process.env.REACT_APP_LOCALHOST_URL}/tasks`;
		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				this.setState({ tasks: data });
			});
	};
	handleSelectTask = (task) => {
		this.setState({
			taskSelected: task,
		});
	};
	componentDidMount() {
		this.getTasks();
	}
	setTaskState(event) {
		var field = event.target.name;
		var value = event.target.value;
	}
	render() {
		const taskSelected = this.state.taskSelected;
		const tasks = this.state.tasks;
		return (
			<div className="homepage">
				<div className="container-side-bar">
					<SideBar
						tasks={tasks}
						taskSelected={taskSelected}
						onSelectTask={this.handleSelectTask}
					/>
				</div>
				<div className="container-details">
					<Details
						taskSelected={taskSelected}
						onSelectTask={this.handleSelectTask}
						onSave={this.createTask}
					/>
				</div>
			</div>
		);
	}
}

export default App;
