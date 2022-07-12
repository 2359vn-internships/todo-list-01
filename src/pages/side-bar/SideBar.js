import { Component } from "react";
import TodoTag from "../../components/todo-tag/TodoTag";
import styles from "./SideBar.module.css";

class SideBar extends Component {
	render() {
		return (
			<div className={styles["side-bar"]}>
				<div className={styles["page-title"]}>
					<h1 className="h1">Todo List</h1>
				</div>
				<div>
					<TodoTag />
					<TodoTag />
					<TodoTag />
					<TodoTag />
					<TodoTag />
				</div>
			</div>
		);
	}
}

export default SideBar;
