export class Task {
  constructor(name, description, dueDate, priority) {
    this._name = name;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get dueDate() {
    return this._dueDate;
  }

  get priority() {
    return this._priority;
  }
}
