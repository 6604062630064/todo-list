import { displayProject, updateTable, updateSidebar } from "./display";
import Project from "./project";
import Todo from "./todo";
import Storage from "./storage";

let storage = new Storage();
let todo1 = new Todo("Homework", "Math, English, Physics", "next year", "High");
let todo2 = new Todo("Laundry", "", "Today", "Low");
let test = new Project("Daily");
test.addTodo(todo1);
test.addTodo(todo2);
storage.addProject(test);

const addProjectButton = document.querySelector(".add-project");

const addProjectEventListener = () => {
	const projectButtons = document.querySelectorAll(".project-name");
	projectButtons.forEach((child) => {
		child.addEventListener("click", (e) => {
			e.preventDefault();
			const name = e.target.textContent;
			updateTable(storage.getProjectByName(name));
		});
	});
};

const addDeleteEventListenr = () => {
	const deleteButtons = document.querySelectorAll(".remove");
	deleteButtons.forEach((child) => {
		child.addEventListener("click", (e) => {
			e.preventDefault();
			const name = e.target.parentNode.querySelector(".title").textContent;
			const projectName = document.querySelector(".main h3").textContent;
			console.log(name);
			storage.getProjectByName(projectName).removeTodoByName(name);
			updateTable(storage.getProjectByName(projectName));
			addDeleteEventListenr();
		});
	});
};

displayProject(test);
updateTable(test);
updateSidebar(storage);
addDeleteEventListenr();

const form = document.querySelector("form");

addProjectButton.addEventListener("click", (e) => {
	e.preventDefault();
	const name = prompt("Name?", "");
	storage.addProject(new Project(name));
	updateSidebar(storage);
	addProjectEventListener();
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const onlyInputs = document.querySelectorAll("form input, select");
	const header = document.querySelector(".main h3");
	let values = [];
	onlyInputs.forEach((input) => {
		values.push(input.value);
	});
	storage
		.getProjectByName(header.textContent)
		.addTodo(new Todo(values[0], values[1], values[2], values[3]));
	console.log(storage.getProjectByName(header.textContent).list);
	updateTable(storage.getProjectByName(header.textContent));
	form.reset();
	addDeleteEventListenr();
});
