export default class Todos {
  constructor(title, details, due, priority, id = title + Date.now()) {
    this._title = title;
    this._details = details;
    this._due = due;
    this._id = id;
    this._priority = priority;
    this._status = false;
  }

  get title() {
    return this._title;
  }

  set title(todoName) {
    return (this._title = todoName);
  }

  get details() {
    return this._details;
  }

  set details(todoDesc) {
    return (this._details = todoDesc);
  }

  get due() {
    return this._due;
  }

  set due(todoDuedate) {
    return (this._due = todoDuedate);
  }

  get id() {
    return this._id;
  }

  set id(newID) {
    return this._id;
  }

  get status() {
    return this._status;
  }

  set status(stat) {
    return (this._status = stat);
  }

  get priority() {
    return (this._priority = priority);
  }

  set priority(newPrio) {
    return (this._priority = newPrio);
  }
}
