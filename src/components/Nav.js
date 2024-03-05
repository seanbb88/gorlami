import React from "react";

const navLinks = [
	{ navLinkId: "About", scrollToId: "aboutContainer" },
	{ navLinkId: "Projects", scrollToId: "projectsContainer" },
	{ navLinkId: "Terms & Conditions", scrollToId: "conditionsContainer" },
];

const NavLink = ({ navLinkId, scrollToId, tabNumber }) => {
	const handleClick = () => {
		document.getElementById(scrollToId).scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<span
			className="p-2 pr-3 pl-0 cursor-pointer"
			id={navLinkId}
			onClick={handleClick}
		>
			<span className="text-coolGray-300">{tabNumber})&nbsp;</span>
			<span className="hover:font-bold">{navLinkId}</span>
		</span>
	);
};

export const Nav = () => {
	return (
		<nav className="self-center">
			{navLinks.map(({ navLinkId, scrollToId }, index) => {
				const tabNumber = (index + 1).toString();
				return (
					<NavLink
						key={navLinkId}
						navLinkId={navLinkId}
						scrollToId={scrollToId}
						tabNumber={tabNumber}
					/>
				);
			})}
		</nav>
	);
};

export default Nav;
