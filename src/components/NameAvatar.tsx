import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./NameAvatar.css";

export const NameAvatar = ({ className }: { className: string }) => {
	const [easterEggMouseOverCount, setEasterEggMouseOverCount] = useState(0);
	const navigate = useNavigate();
	var classNames = require("classnames");

	const redirectToEasterEgg = () => {
		if (easterEggMouseOverCount > 35) {
			navigate("/rtj");
		} else {
			return;
		}
	};

	return (
		<div
			role="button"
			onClick={() => redirectToEasterEgg()}
			onMouseOver={() =>
				setEasterEggMouseOverCount(easterEggMouseOverCount + 1)
			}
			className={classNames(
				className,
				"avatar w-8 h-8 border border-coolGray-200 rounded-sm",
				easterEggMouseOverCount < 35 && "cursor-default"
			)}
		>
			<div className="avatar-initials text-xl text-center pr-0.5">GL</div>
		</div>
	);
};
