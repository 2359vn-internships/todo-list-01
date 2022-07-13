import { Component } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import styles from "./Details.module.css";

class Details extends Component {
	render() {
		return (
			<div className={styles.details}>
				<div className={styles.title}>
					<h1 className="h1">Details</h1>
				</div>
				<div className={styles.detailsBody}>
					<form className={styles.form}>
						<Input isMultipleLines={false} />
						<Input isMultipleLines={true} />
						<div className={styles.btnsContainer}>
							<Button>Save</Button>
							<Button variant="delete">Delete</Button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
export default Details;
