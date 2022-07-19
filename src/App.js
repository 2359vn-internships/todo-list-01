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
				id: "",
				title: "",
				content: "",
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
				id: milisecNow % 10000,
				timestamp: milisecNow,
			}),
		};
		fetch(`${process.env.REACT_APP_LOCALHOST_URL}/tasks`, requestOptions)
			.then((res) => res.json())
			.then((data) => this.setState({ tasks: data }));
	};
	updateTask = () => {
		console.log("updated");
		const requestOptions = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...this.state.taskSelected,
			}),
		};
		fetch(
			`${process.env.REACT_APP_LOCALHOST_URL}/tasks/${this.state.taskSelected.id}`,
			requestOptions
		)
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
	deleteTask = () => {
		const requestOptions = {
			method: "DELETE",
		};
		fetch(
			`${process.env.REACT_APP_LOCALHOST_URL}/tasks/${this.state.taskSelected.id}`,
			requestOptions
		);
		this.setState({
			tasks: this.state.tasks.filter(
				(task) => task.id !== this.state.taskSelected.id
			),
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
	onChange(field, value) {
		this.setState({
			taskSelected: {
				...this.state.taskSelected,
				[field]: value,
			},
		});
	}
	onCreateTask = () => {
		this.setState({
			taskSelected: {
				id: "",
				title: "",
				content: "",
				timestamp: "",
			},
		});
		console.log(this.state.taskSelected);
	};
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
						onCreateTask={this.onCreateTask}
					/>
				</div>
				<div className="container-details">
					<Details
						onChange={this.onChange.bind(this)}
						taskSelected={taskSelected}
						onSelectTask={this.handleSelectTask}
						onCreate={this.createTask}
						onUpdate={this.updateTask}
						onDelete={this.deleteTask}
					/>
				</div>
			</div>
		);
	}
}

export default App;
