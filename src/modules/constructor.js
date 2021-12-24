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
}

export class Todos {
  constructor(title, desc, dueDate) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.complete = false;
  }
}
