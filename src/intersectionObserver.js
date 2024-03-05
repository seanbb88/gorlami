const options = {
	root: document.querySelector(rootElementSelector),
	rootMargin: "0px",
	threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
