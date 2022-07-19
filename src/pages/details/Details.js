import { Component } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import styles from "./Details.module.css";

class Details extends Component {
	onFieldChange(event) {
		const fieldName = event.target.name;
		const fieldValue = event.target.value;
		this.props.onChange(fieldName, fieldValue);
	}
	render() {
		const { taskSelected, onCreate, onUpdate, onDelete } = this.props;

		return (
			<div className={styles.details}>
				<div className={styles.title}>
					<h1 className="h1">Details</h1>
				</div>
				<div className={styles.detailsBody}>
					<form className={styles.form}>
						<Input
							onChange={this.onFieldChange.bind(this)}
							content={taskSelected.title}
							name="title"
							isMultipleLines={false}
						/>
						<Input
							onChange={this.onFieldChange.bind(this)}
							content={taskSelected.content}
							name="content"
							isMultipleLines={true}
						/>
						<div className={styles.btnsContainer}>
							<Button
								onClick={taskSelected.id ? onUpdate : onCreate}
								disabled={
									taskSelected.title && taskSelected.content ? false : true
								}
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
}
export default Details;
