export default class Storage {
	constructor() {
		this.object = {};
	}

	addProject(Project) {
		this.object[Project.name] = Project;
	}

	getProjectByName(name) {
		return this.object[name];
	}

	getAllProjects() {
		return Object.keys(this.object);
	}
}
