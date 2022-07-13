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
			<label className="" htmlFor="title-input">
				Title:
			</label>
			<input
				// onChange={this.props.onChange}
				value={this.props.content}
				name="title-input"
				className={styles.title}
				placeholder="Enter title..."
			/>
		</div>
	);
	renderTextArea = () => {
		return (
			<div className={styles.contentContainer}>
				<label className="" htmlFor="title-input">
					Content:
				</label>
				<textarea
					// onChange={this.props.onChange}
					value={this.props.content ? this.props.content : null}
					className={styles.content}
					placeholder="Add your todo here..."
				/>
			</div>
		);
	};
}

export default Input;
