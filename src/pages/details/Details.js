import { Component } from "react";
import Input from "../../components/input/Input";
import styles from "./Details.module.css";

class Details extends Component {
	render() {
		return (
			<div className={styles.details}>
				<div className={styles["page-title"]}>
					<h1 className="h1">Details</h1>
				</div>
				<div className={styles["details-body"]}>
					<form>
						<Input isMultipleLines={false} />
						<Input isMultipleLines={true} />
						<div className={styles["container-btns"]}></div>
					</form>
				</div>
			</div>
		);
	}
}
export default Details;
