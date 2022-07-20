import { Component } from "react";
import styles from "./Input.module.css";

class Input extends Component {
	render() {
		if (this.props.isMultipleLines) {
			return this._renderTextArea();
		}
		return this._renderInput();
	}
	_renderInput = () => {
		const { name, onChange, content } = this.props;
		return (
			<div className={styles.titleContainer}>
				<label className="" htmlFor={name}>
					Title:
				</label>
				<input
					onChange={onChange}
					defaultValue={content}
					name={name}
					className={styles.title}
					placeholder="Enter title..."
				/>
			</div>
		);
	};
	_renderTextArea = () => {
		const { name, onChange, content } = this.props;
		return (
			<div className={styles.contentContainer}>
				<label className="" htmlFor={name}>
					Content:
				</label>
				<textarea
					onChange={onChange}
					name={name}
					defaultValue={content}
					className={styles.content}
					placeholder="Add your todo here..."
				/>
			</div>
		);
	};
}

export default Input;
