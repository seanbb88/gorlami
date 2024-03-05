import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
	const { getByTestId } = render(<App />);
	const appElement = getByTestId("app-container");
	expect(appElement).toBeInTheDocument();
});
