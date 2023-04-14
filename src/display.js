import Project from "./project";
import Todo from "./todo";

const display = () => {
	const main = document.querySelector(".main");
	const h3 = document.createElement("h3");
	h3.textContent = "Test";

	main.appendChild(h3);
};

export default display;
