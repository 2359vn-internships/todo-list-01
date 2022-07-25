import { Component } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import styles from "./Details.module.css";
import { Translation } from "react-i18next";
import i18next from "i18next";

class Details extends Component {
	handleChange(e) {
		i18next.changeLanguage(e.target.value);
	}
	render() {
		const { taskSelected, onDelete, onUpdate, onCreate } = this.props;
		const isValid = taskSelected.title && taskSelected.content;
		return (
			<div className={styles.details}>
				<div className={styles.title}>
					<Translation ns="common">
						{(t) => <h1 className="h1">{t("header.details")}</h1>}
					</Translation>
					<label htmlFor="language-picker-select">Select language</label>
					<select
						name="language-picker-select"
						id="language-picker-select"
						onChange={this.handleChange}
					>
						<option lang="en" value="en" selected>
							English
						</option>
						<option lang="vi" value="vi">
							Tiếng Việt
						</option>
					</select>
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
							<Translation ns="common">
								{(t, { i18n }) => (
									<Button
										onClick={taskSelected.id ? onUpdate : onCreate}
										disabled={isValid ? false : true}
									>
										{t("button.save")}
									</Button>
								)}
							</Translation>
							<Translation ns="common">
								{(t, { i18n }) => (
									<Button
										disabled={taskSelected.id ? false : true}
										onClick={taskSelected.id ? onDelete : null}
										variant="delete"
									>
										{t("button.delete")}
									</Button>
								)}
							</Translation>
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
