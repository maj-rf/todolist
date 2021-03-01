//module for Classes
export class Project {
    constructor(name, id){
        this.name = name;
        this.id = id;
        this.todolist = []; //JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODOLIST_KEY)) || []; //array of todos
    }
}

export class Todos {
    constructor(title, desc, dueDate){
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.complete = false;
    }
}