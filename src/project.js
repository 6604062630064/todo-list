export default class Project {
	constructor(name) {
		this.name = name;
		this.list = [];
	}

	addTodo(Todo) {
		this.list.push(Todo);
	}

	getAllTodos() {
		return this.list;
	}
}
