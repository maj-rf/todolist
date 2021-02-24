import {Project} from './constructor';
import render from './display';

//module for DOM stuff
const addProject = (e) => {
    e.preventDefault();
    let id = 0;
    for(let count = 0; count <= projectList.length; count++){
        id++;
    }
    const projectName = document.querySelector("#pname-input").value;   
    const newProject = new Project(projectName, id);
    projectList.push(newProject);
    render();
    projectForm.reset();
    return projectList;
}

let projectList = [{name : "Work", id: 1}, {name : "To Buy", id: 2}, {name : "To Play", id: 3}];
const projectForm = document.querySelector("#project-form");
const projectUL = document.querySelector(".project-ul");
projectForm.addEventListener("submit", addProject);
console.log(projectList);
export {projectUL, projectList};