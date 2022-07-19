import classNames from "classnames";
import { Component } from "react";
import styles from "./Input.module.css";

class Input extends Component {
	render() {
		if (this.props.isMultipleLines) {
			return this.renderTextArea();
		}
		return this.renderInput();
	}
	renderInput = () => (
		<div className={styles.titleContainer}>
			<label className="" htmlFor={this.props.name}>
				Title:
			</label>
			<input
				onChange={this.props.onChange}
				defaultValue={this.props.content}
				name={this.props.name}
				className={classNames(styles.title)}
				placeholder="Enter title..."
			/>
		</div>
	);
	renderTextArea = () => {
		return (
			<div className={styles.contentContainer}>
				<label className="" htmlFor={this.props.name}>
					Content:
				</label>
				<textarea
					onChange={this.props.onChange}
					name={this.props.name}
					defaultValue={this.props.content}
					className={classNames(styles.content)}
					placeholder="Add your todo here..."
				/>
			</div>
		);
	};
}

export default Input;
