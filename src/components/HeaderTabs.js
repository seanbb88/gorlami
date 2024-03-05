import React, { useEffect } from "react";
import NavProvider from "../context/NavContext";
import { Nav } from "./Nav";
import { NameAvatar } from "./NameAvatar";
import "./HeaderTabs.css";

export const HeaderTabs = () => {
	let lastKnownScrollY = 0;
	let currentScrollY = 0;
	let ticking = false;
	let idOfHeader = "header";
	let eleHeader = null;
	const classes = {
		pinned: "header-pin",
		unpinned: "header-unpin",
	};

	useEffect(() => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
		eleHeader = document.getElementById(idOfHeader);
		document.addEventListener("scroll", onScroll, false);
	});


	function onScroll() {
		currentScrollY = window.pageYOffset;
		requestTick();
	}
	function requestTick() {
		if (!ticking) {
			requestAnimationFrame(update);
		}
		ticking = true;
	}
	function update() {
		if (currentScrollY < lastKnownScrollY) {
			pin();
		} else if (currentScrollY > lastKnownScrollY) {
			unpin();
		}
		lastKnownScrollY = currentScrollY;
		ticking = false;
	}
	function pin() {
		if (eleHeader.classList.contains(classes.unpinned)) {
			eleHeader.classList.remove(classes.unpinned);
			eleHeader.classList.add(classes.pinned);
		}
	}
	function unpin() {
		if (
			eleHeader.classList.contains(classes.pinned) ||
			!eleHeader.classList.contains(classes.unpinned)
		) {
			eleHeader.classList.remove(classes.pinned);
			eleHeader.classList.add(classes.unpinned);
		}
	}

	return (
		<header
			id="header"
			className="header flex justify-between w-full  max-[550px]:hidden"
		>
			<NameAvatar className="mt-4 ml-5" />
			<div className="flex">
				<NavProvider>
					<Nav />
				</NavProvider>
			</div>
		</header>
	);
};
