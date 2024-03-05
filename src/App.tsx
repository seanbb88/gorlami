import React, { useEffect, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

import { Loader } from "./components/Loader";
import { HeaderTabs } from "./components/HeaderTabs";
import { About } from "./components/About";
import { Projects } from './components/Projects'
import { Introduction } from "./components/Introduction";
import { TermsAndCondidions } from "./components/TermsAndConditions";


function App() {
	//force scroll to top if refresh is hit
	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	};

	const [showLoader, setShowLoader] = useState(true);

	useEffect(() => {
		if (showLoader) {
			const timeId = setTimeout(() => {
				// After 3 seconds set the show value to false
				setShowLoader(false);
			}, 3000);

			return () => {
				clearTimeout(timeId);
			};
		}
	}, [showLoader]);

	return (
		<ErrorBoundary>
			<div data-testid="app-container" className="appContainer">
				{!showLoader && <HeaderTabs />}
				{showLoader ? (
					<div className="page-loader">
						<Loader />
					</div>
				) : (
					<div className="flex flex-col h-full">
						<Introduction />
						<About />
						<Projects />
						<TermsAndCondidions />
					</div>
				)}
			</div>
		</ErrorBoundary>
	);
}

export default App;
