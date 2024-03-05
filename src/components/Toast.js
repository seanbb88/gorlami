import React, { useState, useEffect } from "react";
import classnames from "classnames";

import styles from "./Toast.module.css";

interface ToastProps {
	/** child nodes to be passed in. */
	children: React.ReactNode;
	/** Pass in additional className to the toast. */
	className?: string;
	/** Boolean that auto clears the toast after 3 seconds (default is set to true) */
	clearToast?: boolean;
}

export const Toast = ({
	children,
	className,
	clearToast = true,
}: ToastProps) => {
	const [show, setShow] = useState(true);

	useEffect(() => {
		const timeId = setTimeout(() => {
			// After 3 seconds set the show value to false
			clearToast && setShow(false);
		}, 3000);

		return () => {
			clearTimeout(timeId);
		};
	}, [clearToast]);

	return (
		<div
			className={classnames(
				"border rounded bg-coolGray-800 text-coolGray-100 px-4 py-[9px] h-[46px] whitespace-nowrap",
				show ? styles.ShowToast : styles.HideToast,
				className
			)}
		>
			{children}
		</div>
	);
};

const Danger = ({ children, className, ...rest }: ToastProps) => (
	<Toast
		className={classnames("border-red-300", className, styles.DangerIcon)}
		{...rest}
	>
		{children}
	</Toast>
);

const Success = ({ children, className, ...rest }: ToastProps) => (
	<Toast
		className={classnames("border-green-300", className, styles.SuccessIcon)}
		{...rest}
	>
		{children}
	</Toast>
);

Toast.Danger = Danger;
Toast.Success = Success;

export default Toast;
