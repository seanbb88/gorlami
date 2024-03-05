import React from "react";
import "./Loader.css";

export const Loader = ({ className }: { className?: string }) => (
	<span className={`${className} loader`}></span>
);
