import {Project, Todos} from './constructor';

const todoList = [{title: "Buy", desc: "Apple Juice", dueDate: "12/24/2020"}]; //default Todo in Default TodoList
const projList = [{projName : "Default Project", todoList}]; //default Proj in ProjArray
const form = document.getElementById("todo-form");
const projForm = document.getElementById("project-form");

const addTodo = (e) =>{
    e.preventDefault();
    const title = document.getElementById("todo-title").value; //get values
    const desc = document.getElementById("todo-desc").value;
    const date = document.getElementById("todo-date").value;

    if (title.length === 0 || desc.length === 0 || date.length === 0) {
        alert("Please, fill all the fields");
        return;
    }
    const newTodo = new Todos(title, desc, date); //create new Books using the constructor
    todoList.push(newTodo);
    form.reset(); //reset text fields
}

const addProject = (e) =>{
    e.preventDefault();
    const name = document.getElementById("project-name").value;
    if (name.length === 0){
        alert("Project name is empty, please do not submit blanks!");
        return;
    }
    const newProj = new Project(name); //create new Books using the constructor
    projList.push(newProj);
    projForm.reset(); //reset text fields
}

form.addEventListener("submit", addTodo);
projForm.addEventListener("submit", addProject);

export {projList, todoList};