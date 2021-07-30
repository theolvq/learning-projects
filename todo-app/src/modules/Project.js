export class Project {
  constructor(name) {
    this._name = name;
    this._tasks = [];
  }
  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set tasks(tasks) {
    this._tasks = tasks;
  }

  get tasks() {
    return this._tasks;
  }

  addTask(taskName) {
    this.taskName = taskName;
    this.tasks.unshift(taskName);
  }
}
