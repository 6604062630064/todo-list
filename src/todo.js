export default class Todo {
	constructor(title, description, dueDate, priority, isFinished = false) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.isFinished = isFinished;
	}
}
