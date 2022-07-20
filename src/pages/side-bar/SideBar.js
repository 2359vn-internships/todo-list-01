import { Component } from "react";
import Button from "../../components/button/Button";
import TodoTag from "../../components/todo-tag/TodoTag";
import styles from "./SideBar.module.css";

class SideBar extends Component {
	render() {
		const { tasks, taskSelected, onSelectTask, onCreateTask } = this.props;
		return (
			<div className={styles.sideBar}>
				<div className={styles.pageTitle}>
					<h1 className="h1">Todo List</h1>
					{tasks.map((task, index) => (
						<TodoTag
							key={index}
							task={task}
							taskSelected={taskSelected}
							onSelectTask={onSelectTask}
						/>
					))}
					<div className={styles.createBtn}>
						<Button onClick={onCreateTask}>Create a task</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default SideBar;
