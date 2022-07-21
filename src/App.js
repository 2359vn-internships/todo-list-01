import { Component } from "react";
import { connect } from "react-redux";
import { deleteTask, getAllTasks, postTask, updateTask } from "./api";
import { getTasks } from "./redux/todoSlice";
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
	componentDidMount() {
		this._getAllTasks();
	}
	render() {
		const { taskSelected, tasks } = this.state;
		return (
			<div className="homepage">
				<div className="container-side-bar">
					<SideBar
						tasks={tasks}
						taskSelected={taskSelected}
						onSelectTask={this._handleSelectTask}
						onCreateTask={this._onCreateTask}
					/>
				</div>
				<div className="container-details">
					<Details
						taskSelected={taskSelected}
						onSelectTask={this._handleSelectTask}
						onChange={this._onChange}
						onCreate={this._createTask}
						onUpdate={this._updateTask}
						onDelete={this._deleteTask}
					/>
				</div>
			</div>
		);
	}
	_createTask = () => {
		const { taskSelected } = this.state;
		const milisecNow = Date.now();
		const reqBody = {
			...taskSelected,
			id: milisecNow % 10000,
			timestamp: milisecNow,
		};
		postTask(reqBody).then((data) => console.log(data));
	};
	_updateTask = () => {
		const { taskSelected } = this.state;
		updateTask(taskSelected, taskSelected.id).then((data) =>
			this.props.dispatch(updateTask(data))
		);
	};
	_getAllTasks = () => {
		getAllTasks().then((data) => this.props.dispatch(getTasks(data)));
	};
	_deleteTask = () => {
		const { taskSelected, tasks } = this.state;
		deleteTask(taskSelected.id).then((data) => {
			this.setState({
				tasks: tasks.filter((task) => task.id !== taskSelected.id),
			});
		});
	};
	_handleSelectTask = (task) => {
		this.setState({
			taskSelected: task,
		});
	};
	_onChange = (field, value) => {
		const { taskSelected } = this.state;
		this.setState({
			taskSelected: {
				...taskSelected,
				[field]: value,
			},
		});
	};
	_onCreateTask = () => {
		this.setState({
			taskSelected: {
				id: "",
				title: "",
				content: "",
				timestamp: "",
			},
		});
	};
}
const mapStateToProps = (state) => ({
	tasks: state.todo.tasks,
});

export default connect(mapStateToProps)(App);
