export class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  setName(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
    return this.name;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  getTasks() {
    console.log(this.tasks);
    return this.tasks;
  }

  addTask(taskName) {
    this.taskName = taskName;
    this.tasks.unshift(taskName);
  }
}
