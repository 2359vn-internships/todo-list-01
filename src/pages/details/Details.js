import { Component } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import styles from "./Details.module.css";

class Details extends Component {
	render() {
		const { taskSelected, onDelete, onUpdate, onCreate } = this.props;
		const isValid = taskSelected.title && taskSelected.content;
		return (
			<div className={styles.details}>
				<div className={styles.title}>
					<h1 className="h1">Details</h1>
				</div>
				<div className={styles.detailsBody}>
					<form className={styles.form}>
						<Input
							onChange={this._onFieldChange}
							content={taskSelected.title}
							name="title"
							isMultipleLines={false}
						/>
						<Input
							onChange={this._onFieldChange}
							content={taskSelected.content}
							name="content"
							isMultipleLines={true}
						/>
						<div className={styles.btnsContainer}>
							<Button
								onClick={taskSelected.id ? onUpdate : onCreate}
								disabled={isValid ? false : true}
							>
								Save
							</Button>
							<Button
								disabled={taskSelected.id ? false : true}
								onClick={taskSelected.id ? onDelete : null}
								variant="delete"
							>
								Delete
							</Button>
						</div>
					</form>
				</div>
			</div>
		);
	}
	_onFieldChange = (event) => {
		const fieldName = event.target.name;
		const fieldValue = event.target.value;
		this.props.onChange(fieldName, fieldValue);
	};
}
export default Details;
