//module for Classes
export class Project {
  constructor(name, id) {
    this._name = name;
    this._id = id;
    this._todolist = []; //JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODOLIST_KEY)) || []; //array of todos
  }

  get name() {
    return this._name;
  }

  set name(projectName) {
    return (this._name = projectName);
  }

  get id() {
    return this._id;
  }

  set id(newID) {
    return (this._id = newID);
  }

  get todolist() {
    return this._todolist;
  }

  set todolist(obj) {
    return (this._todolist = [...obj]);
  }
}

export class Todos {
  constructor(title, desc, dueDate) {
    this._title = title;
    this._desc = desc;
    this._duedate = dueDate;
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

  get status() {
    return this._status;
  }

  set status(stat) {
    return (this._status = !stat);
  }
}
