import React from "react";
import "./Button.css";

interface ButtonProps {
	children: React.ReactNode;
	className?: string;
	color: "red" | "white" | "none";
	disabled?: boolean;
	to?: { pathname: string };
	onClick?: () => void;
	openInNewWindow?: boolean;
}

export const Button = ({
	children,
	color,
	className,
	disabled,
	onClick,
	openInNewWindow,
	to,
}: ButtonProps) => {
	var classNames = require("classnames");
	const target = openInNewWindow ? "_blank" : undefined;
	const rel = openInNewWindow ? "noopener noreferrer" : undefined;
	const classes = classNames(
		color,
		className,
		color !== "none" && "border rounded" && "p-1 h-9"
	);
	return (
		<>
			{to ? (
				<div className={classes}>
					<a href={to.pathname} target={target} rel={rel}>
						{children}
					</a>
				</div>
			) : (
				<button disabled={disabled} onClick={onClick} className={classes}>
					{children}
				</button>
			)}
		</>
	);
};

export default Button;
