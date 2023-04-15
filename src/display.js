import Project from "./project";
import Todo from "./todo";

const display = () => {
	const main = document.querySelector(".main");
	const h3 = document.createElement("h3");

	const table = document.createElement("div");
	table.classList.add("table");
	h3.textContent = "Test";

	const addTaskButton = document.createElement("button");
	addTaskButton.textContent = "+ Add a task";

	addTaskButton.addEventListener("click", () => {
		const getForm = document.querySelector("form");
		getForm.classList.remove("hidden");
		addTaskButton.classList.add("hidden");
	});
	main.appendChild(h3);

	// Create a form
	const form = document.createElement("form");
	form.classList.add("hidden");
	const titleLabel = document.createElement("label");
	titleLabel.textContent = "Title";
	titleLabel.setAttribute("for", "title");

	const titleInput = document.createElement("input");
	titleInput.setAttribute("type", "text");
	titleInput.setAttribute("id", "title");
	titleInput.setAttribute("name", "title");
	titleInput.required = true;

	const descriptionLabel = document.createElement("label");
	descriptionLabel.textContent = "Description";
	descriptionLabel.setAttribute("for", "description");

	const descriptionInput = document.createElement("input");
	descriptionInput.setAttribute("type", "text");
	descriptionInput.setAttribute("id", "description");
	descriptionInput.setAttribute("name", "description");

	const dateLabel = document.createElement("label");
	dateLabel.textContent = "Due Date";
	dateLabel.setAttribute("for", "date");

	const dateInput = document.createElement("input");
	dateInput.setAttribute("type", "date");
	dateInput.setAttribute("id", "title");
	dateInput.setAttribute("name", "title");
	dateInput.required = true;

	const selectLabel = document.createElement("label");
	selectLabel.textContent = "Priority";
	selectLabel.setAttribute("for", "priority");

	const select = document.createElement("select");
	select.setAttribute("name", "priority");
	select.setAttribute("id", "priority");
	select.required = true;

	const deOption = document.createElement("option");
	deOption.value = "";

	const highOption = document.createElement("option");
	highOption.value = "high";
	highOption.textContent = "High";

	const mediumOption = document.createElement("option");
	mediumOption.value = "medium";
	mediumOption.textContent = "Medium";

	const lowOption = document.createElement("option");
	lowOption.value = "low";
	lowOption.textContent = "Low";

	const hr = document.createElement("hr");

	const button = document.createElement("button");
	button.classList.add("form-submit");
	button.textContent = "Submit";

	select.append(deOption, highOption, mediumOption, lowOption);
	form.append(
		titleLabel,
		titleInput,
		descriptionLabel,
		descriptionInput,
		dateLabel,
		dateInput,
		selectLabel,
		select,
		hr,
		button
	);

	table.appendChild(form);
	table.appendChild(addTaskButton);

	main.appendChild(table);
};

export default display;
