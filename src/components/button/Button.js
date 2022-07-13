import { Component } from "react";
import styles from "./Button.module.css";

class Button extends Component {
	render() {
		const { children, href, target, variant, ...props } = this.props;

		if (href) {
			return (
				<a
					href={href}
					target={target || "_self"}
					role="button"
					className={`${styles.btn} ${
						"delete" === variant ? styles.deleteBtn : ""
					}`}
					{...props}
				>
					{children}
				</a>
			);
		}

		return (
			<button
				className={`${styles.btn} ${
					"delete" === variant ? styles.deleteBtn : ""
				}`}
				{...props}
			>
				{children}
			</button>
		);
	}
}
export default Button;
