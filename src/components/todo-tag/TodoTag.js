import { Component } from "react";
import styles from "./TodoTag.module.css";

class TodoTag extends Component {
	render() {
		const { task, taskSelected, onSelectTask } = this.props;
		var d = new Date(task.timestamp);
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
				<div className={styles.header}>
					<h2 className={`${styles.text} h2`}>{task.title}</h2>
					<h3 className={`${styles.text} h3 extra-light text-gray-color`}>
						{d.toLocaleString()}
					</h3>
				</div>
				<div>
					<h4 className={`${styles.text} extra-light text-gray-color`}>
						{task.content}
					</h4>
				</div>
			</div>
		);
	}
}
export default TodoTag;
