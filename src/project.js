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

	getIndexByTitle(name) {
		let index = -1;

		this.list.every((v, i) => {
			if (name === v.title) {
				index = i;
				return false;
			}

			return true;
		});

		return index;
	}

	removeTodoByName(name) {
		let index = -1;

		this.list.every((v, i) => {
			if (name === v.title) {
				index = i;
				return false;
			}

			return true;
		});

		this.list.splice(index, 1);
	}
}
