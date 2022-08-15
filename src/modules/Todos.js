export default class Todos {
  constructor(title, details, due) {
    this._title = title;
    this._details = details;
    this._due = due;
    this._id = title + Date.now();
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

  get status() {
    return this._status;
  }

  set status(stat) {
    return (this._status = stat);
  }
}
