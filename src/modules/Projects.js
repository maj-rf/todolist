class Project {
  constructor(name) {
    this._name = name;
    this._id = this.name + Date.now();
    this._todolist = []; //JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODOLIST_KEY)) || []; //array of todos
  }

  addTodo(todo) {
    this._todolist.push(todo);
  }

  deleteTodo(todo) {
    this._todolist.filter((x) => todo.id !== x.id);
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

export default Project;
