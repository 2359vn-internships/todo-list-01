import { Component } from "react";
import TodoTag from "../../components/todo-tag/TodoTag";
import styles from "./SideBar.module.css";

class SideBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tasks: [],
		};
	}
	componentDidMount() {
		const URL = "http://localhost:3001/tasks";
		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				let tasks = data.map((task, index) => {
					return (
						<TodoTag
							key={index}
							title={task.title}
							content={task.content}
							timestamp={task.timestamp}
						/>
					);
				});
				this.setState({ tasks: tasks });
			});
	}

	render() {
		return (
			<div className={styles["side-bar"]}>
				<div className={styles["page-title"]}>
					<h1 className="h1">Todo List</h1>
					{this.state.tasks}
				</div>
				<div></div>
			</div>
		);
	}
}

export default SideBar;
