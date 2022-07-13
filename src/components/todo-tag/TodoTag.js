import { Component } from "react";
import styles from "./TodoTag.module.css";

class TodoTag extends Component {
	render() {
		const { title, content, timestamp } = this.props;
		return (
			<div className={styles["todo-tag"]}>
				<h2 className="h2">{title}</h2>
				<div className={styles["container-contents"]}>
					<h3 className="h3 regular">{timestamp}</h3>
					<h4 className="extra-light text-gray-color">{content}</h4>
				</div>
			</div>
		);
	}
}
export default TodoTag;
