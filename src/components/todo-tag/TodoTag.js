import { Component } from "react";
import styles from "./TodoTag.module.css";

class TodoTag extends Component {
	render() {
		const { task, taskSelected, onSelectTask } = this.props;
		return (
			<div
				className={`${styles.todoTag} ${
					task.id === taskSelected.id ? styles.todoTagSelected : ""
				}`}
				onClick={() =>
					onSelectTask({
						...task,
					})
				}
			>
				<h2 className="h2">{task.title}</h2>
				<div className={styles.contentsContainer}>
					<h3 className="h3 regular">{task.timestamp}</h3>
					<h4 className="extra-light text-gray-color">{task.content}</h4>
				</div>
			</div>
		);
	}
}
export default TodoTag;
