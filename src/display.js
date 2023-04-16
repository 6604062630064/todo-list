const updateSidebar = (input) => {
	const div = document.querySelector(".project-list");
	const projectList = input.getAllProjects();
	const projectNames = document.querySelectorAll(".project-name");
	projectNames.forEach((e) => {
		e.remove();
	});
	projectList.forEach((e) => {
		const projectName = document.createElement("button");
		projectName.classList.add("project-name");
		projectName.textContent = e;
		div.insertBefore(projectName, document.querySelector(".add-project"));
	});
};

const updateTable = (reveivedProject) => {
	const header = document.querySelector(".main h3");
	header.textContent = reveivedProject.name;
	const tasks = document.querySelectorAll(".task");
	tasks.forEach((child) => {
		child.remove();
	});
	reveivedProject.getAllTodos().forEach((e) => {
		console.log(1);
		const main = document.querySelector(".main");
		const div = document.createElement("div");
		div.classList.add("task");
		const title = document.createElement("h4");
		title.textContent = e.title;

		const description = document.createElement("p");
		description.textContent = e.description;

		const dueDate = document.createElement("p");
		dueDate.textContent = e.dueDate;

		const priority = document.createElement("h4");
		priority.textContent = e.priority;

		div.append(title, description, dueDate, priority);

		main.insertBefore(div, document.querySelector("form"));
	});
	const form = document.querySelector("form");

	form.classList.add("hidden");

	const addButton = document.querySelector(".table");
	addButton.classList.remove("hidden");
};

const displayProject = (reveivedProject) => {
	const main = document.querySelector(".main");
	main.innerHTML = "";
	const h3 = document.createElement("h3");

	const table = document.createElement("div");
	table.classList.add("table");
	h3.textContent = reveivedProject.name;

	const addTaskButton = document.createElement("button");
	addTaskButton.textContent = "+ Add a task";

	addTaskButton.addEventListener("click", () => {
		const getForm = document.querySelector("form");
		getForm.classList.remove("hidden");
		table.classList.add("hidden");
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
	dateInput.setAttribute("id", "date");
	dateInput.setAttribute("name", "date");
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

	main.appendChild(form);
	table.appendChild(addTaskButton);

	main.appendChild(table);
};
export { displayProject, updateTable, updateSidebar };
