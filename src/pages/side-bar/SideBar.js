import { Component } from "react";
import { connect } from "react-redux";
import Button from "../../components/button/Button";
import TodoTag from "../../components/todo-tag/TodoTag";
import styles from "./SideBar.module.css";
import { Translation } from "react-i18next";

class SideBar extends Component {
	render() {
		const { tasks, taskSelected, onSelectTask, onCreateTask } = this.props;
		return (
			<div className={styles.sideBar}>
				<div className={styles.pageTitle}>
					<Translation ns="common">
						{
							(t) => <h1 className="h1">{t("header.sidebar")}</h1> // will be looked up from namespace ns1
						}
					</Translation>
					{tasks.map((task, index) => (
						<TodoTag
							key={index}
							task={task}
							taskSelected={taskSelected}
							onSelectTask={onSelectTask}
						/>
					))}
					<div className={styles.createBtn}>
						<Translation ns="common">
							{(t) => (
								<Button onClick={onCreateTask}>{t("button.create")}</Button>
							)}
						</Translation>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	tasks: state.todo.tasks,
});

export default connect(mapStateToProps)(SideBar);
