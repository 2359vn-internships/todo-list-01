import classNames from "classnames";
import { Component } from "react";
import { deleteApi, getApi, postApi, updateApi } from "./api";
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
		const reqBody = {
			...this.state.taskSelected,
			id: milisecNow % 10000,
			timestamp: milisecNow,
		};
		postApi(reqBody).then((data) => this.setState({ tasks: data }));
	};
	updateTask = () => {
		updateApi(this.state.taskSelected, this.state.taskSelected.id).then(
			(data) => this.setState({ tasks: data })
		);
	};
	getTasks = () => {
		getApi().then((data) => {
			this.setState({ tasks: data });
		});
	};
	deleteTask = () => {
		deleteApi(this.state.taskSelected.id);
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
	};
	render() {
		const taskSelected = this.state.taskSelected;
		const tasks = this.state.tasks;
		return (
			<div className={classNames("homepage")}>
				<div className={classNames("container-side-bar")}>
					<SideBar
						tasks={tasks}
						taskSelected={taskSelected}
						onSelectTask={this.handleSelectTask}
						onCreateTask={this.onCreateTask}
					/>
				</div>
				<div className={classNames("container-details")}>
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
