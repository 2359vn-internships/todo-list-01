import { Component } from "react";
import styles from "./TodoTag.module.css";

class TodoTag extends Component {
	render() {
		return (
			<div className={styles["todo-tag"]}>
				<h2 className="h2">Working till die</h2>
				<div className={styles["container-contents"]}>
					<h3 className="h3 regular">12 Jun 2022</h3>
					<h4 className="extra-light text-gray-color">Talking to the moon</h4>
				</div>
			</div>
		);
	}
}
export default TodoTag;
