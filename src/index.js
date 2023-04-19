import { displayProject, updateTable, updateSidebar } from "./display";
import Project from "./project";
import Todo from "./todo";
import Storage from "./storage";

let storage = new Storage();
let todo1 = new Todo(
	"Homework",
	"Math, English, Physics",
	"2022-05-12",
	"High"
);
let todo2 = new Todo("Laundry", "", "2022-05-12", "Low");
let test = new Project("Daily");
test.addTodo(todo1);
test.addTodo(todo2);
storage.addProject(test);

const addProjectButton = document.querySelector(".add-project");
const addEditEventListener = () => {
	const editButtons = document.querySelectorAll(".edit");
	editButtons.forEach((child) => {
		child.addEventListener("click", (e) => {
			const form = document.querySelector(".form-add");
			const form_copy = form.cloneNode(true);
			const main = document.querySelector(".main");
			form_copy.classList.remove("hidden");
			form_copy.classList.remove("form-add");
			form_copy.classList.add("form-edit");
			const div = e.target.parentNode;
			form_copy.id = div.id;

			const children = form_copy.childNodes;
			const projectName = document.querySelector(".main h3");
			const todoName = e.target.parentNode.querySelector(".title").textContent;
			const values = storage
				.getProjectByName(projectName.textContent)
				.getTodoByTitle(todoName);
			children.item(1).value = values.title;
			children.item(3).value = values.description;
			children.item(5).setAttribute("value", values.dueDate);
			for (let i = 0; i < children.item(7).childNodes.length; i++) {
				if (children.item(7).childNodes.item(i).value === values.priority) {
					children.item(7).childNodes.item(i).setAttribute("selected", "");
				}
			}

			form_copy.lastChild.remove();
			form_copy.addEventListener("submit", (e) => {
				e.preventDefault();
				const onlyInputs = e.target.querySelectorAll("input, select");
				let values = [];
				onlyInputs.forEach((input) => {
					values.push(input.value);
				});
				const index = e.target.id;

				let obj = storage
					.getProjectByName(projectName.textContent)
					.getTodoByIndex(index);

				obj.title = values[0];
				obj.description = values[1];
				obj.dueDate = values[2];
				obj.priority = values[3];

				console.log(values);
				e.target.remove();
				updateTable(storage.getProjectByName(projectName.textContent));
				addEditEventListener();
				addDeleteEventListenr();
			});

			const submitButton = document.createElement("button");
			submitButton.textContent = "Submit";
			form_copy.appendChild(submitButton);
			main.replaceChild(form_copy, div);
		});
	});
};

const addProjectEventListener = () => {
	const projectButtons = document.querySelectorAll(".project-name");
	projectButtons.forEach((child) => {
		child.addEventListener("click", (e) => {
			e.preventDefault();
			const name = e.target.textContent;
			updateTable(storage.getProjectByName(name));
			addDeleteEventListenr();
			addEditEventListener();
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
			addEditEventListener();
		});
	});
};

displayProject(test);
updateTable(test);
updateSidebar(storage);
addDeleteEventListenr();
addEditEventListener();
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
	addEditEventListener();
});
