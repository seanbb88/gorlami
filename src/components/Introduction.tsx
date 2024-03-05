import React from "react";
import Delayed from "./Delayed";

import "./Introduction.css";

export const Introduction = () => {
	return (
		<section className="flex w-full h-screen">
			<div className="h-1/2 w-8/12 m-auto">
				<Delayed waitBeforeShow={300}>
					<div className="text-coolGray-200 text-6xl mb-3 fade-in-left">
						Gorlami LLC
					</div>
				</Delayed>
				<Delayed waitBeforeShow={600}>
					<div className="text-coolGray-300 pb-4 text-5xl mb-3 fade-in-left">
						software solutions
					</div>
				</Delayed>
				<IntroAnimation />
			</div>
		</section>
	);
};

const IntroAnimation = () => {
	return (
		<>
			<Delayed waitBeforeShow={1200}>
				<div className="fade-in-left border border-b-tertiary-300 border-t-0 border-x-0"></div>
			</Delayed>
			<Delayed waitBeforeShow={1500}>
				<div className="w-[90%] fade-in-left border border-b-tertiary-300 border-t-0 border-x-0 mt-3"></div>
			</Delayed>
			<Delayed waitBeforeShow={1800}>
				<div className="w-[80%] fade-in-left border border-b-tertiary-300 border-t-0 border-x-0 mt-3"></div>
			</Delayed>
			<Delayed waitBeforeShow={2100}>
				<div className="w-[70%] fade-in-left border border-b-tertiary-300 border-t-0 border-x-0 mt-3"></div>
			</Delayed>
			<Delayed waitBeforeShow={2400}>
				<div className="w-[60%] fade-in-left border border-b-tertiary-300 border-t-0 border-x-0 mt-3"></div>
			</Delayed>
			<Delayed waitBeforeShow={2700}>
				<div className="w-[50%] fade-in-left border border-b-tertiary-300 border-t-0 border-x-0 mt-3"></div>
			</Delayed>
			<Delayed waitBeforeShow={3000}>
				<div className="w-[40%] fade-in-left border border-b-tertiary-300 border-t-0 border-x-0 mt-3"></div>
			</Delayed>
			<Delayed waitBeforeShow={3300}>
				<div className="w-[30%] fade-in-left border border-b-tertiary-300 border-t-0 border-x-0 mt-3"></div>
			</Delayed>
			<Delayed waitBeforeShow={3600}>
				<div className="w-[20%] fade-in-left border border-b-tertiary-300 border-t-0 border-x-0 mt-3"></div>
			</Delayed>
			<Delayed waitBeforeShow={3900}>
				<div className="w-[10%] fade-in-left border border-b-tertiary-300 border-t-0 border-x-0 mt-3"></div>
			</Delayed>
		</>
	);
};

export default Introduction;
