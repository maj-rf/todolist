export class Todos {
  constructor(title, desc, dueDate, id) {
    this._title = title;
    this._desc = desc;
    this._duedate = dueDate;
    this._todoID = id;
    this._status = false;
  }

  get title() {
    return this._title;
  }

  set title(todoName) {
    return (this._title = todoName);
  }

  get desc() {
    return this._desc;
  }

  set desc(todoDesc) {
    return (this._desc = todoDesc);
  }

  get duedate() {
    return this._duedate;
  }

  set duedate(todoDuedate) {
    return (this._duedate = todoDuedate);
  }

  get id() {
    return this._todoID;
  }

  set id(newID) {
    return (this._todoID = newID);
  }

  get status() {
    return this._status;
  }

  set status(stat) {
    return (this._status = stat);
  }
}
