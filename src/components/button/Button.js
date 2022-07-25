import { Component } from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

class Button extends Component {
	render() {
		const { children, href, target, variant, disabled, ...props } = this.props;

		if (href) {
			return (
				<a
					href={href}
					target={target || "_self"}
					role="button"
					disabled={disabled}
					className={classNames(styles.btn, {
						[styles.deleteBtn]: variant === "delete",
						[styles.disabled]: disabled,
					})}
					{...props}
				>
					{children}
				</a>
			);
		}

		return (
			<button
				disabled={disabled}
				className={classNames(styles.btn, {
					[styles.deleteBtn]: variant === "delete",
					[styles.disabled]: disabled,
				})}
				{...props}
			>
				{children}
			</button>
		);
	}
}
export default Button;
