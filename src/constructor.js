export class Project {
    constructor(name){
        this.projName = name;
        this.todolist = []; //array of todos
    }
}

export class Todos {
    constructor(title, desc, dueDate){
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.isDone = false;
        // this.isRemoved = false; //trash icon
    }
}