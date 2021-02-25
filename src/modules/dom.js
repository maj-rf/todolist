import {Project} from './constructor';
import {render, saveStorage, showThisProject} from './display';

//module for DOM stuff
const addProject = (e) => {
    e.preventDefault();
    let id = 0;
    for(let count = 0; count <= projectList.length; count++){ //id generator
        id++;
    }
    const projectName = document.querySelector("#pname-input").value;   
    const newProject = new Project(projectName, id);
    projectList.push(newProject);
    render();
    saveStorage();
    projectForm.reset();
}

const LOCAL_STORAGE_PROJECTS_KEY = "todo.projectList";
const LOCAL_STORAGE_TODOLIST_KEY = "todo.todoList";
let projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];
// [{name : "Work", id: 1, todolist: ["Do Excel Stuff"]}, 
// {name : "To Buy", id: 2, todolist: ["Banana", "Protein Shake"]},
//  {name : "To Play", id: 3, todolist: ["Finish Pokemon Sword", "Play Tetris"]}];
const projectForm = document.querySelector("#project-form");
const projectUL = document.querySelector(".project-ul");

projectForm.addEventListener("submit", addProject);
projectUL.addEventListener("click", function(e) {
    showThisProject(e);
});

//console.log(projectList);
export {projectUL, projectList, LOCAL_STORAGE_PROJECTS_KEY, LOCAL_STORAGE_TODOLIST_KEY};