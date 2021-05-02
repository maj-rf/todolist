import { Project, Todos } from './constructor';
import { saveAndDisplay } from './display';

//module for DOM stuff
const projectForm = document.querySelector('#project-form');
const projectUL = document.querySelector('.project-ul');
const projectNameInput = document.querySelector('#pname-input');
const projectDisplayContainer = document.querySelector(
  '[data-project-display-container]'
); //content container
const projectTitleElement = document.querySelector('[data-project-title]'); //project title
const deleteListButton = document.querySelector('[data-delete-list-button]'); //delete project btn
//const listCountElement = document.querySelector('[data-project-count]');
const todoContainer = document.querySelector('[data-tasks]');
const taskTemplate = document.getElementById('task-template');
const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');
const newTaskDesc = document.querySelector('[data-new-todo-desc]');
const newTaskDate = document.querySelector('[data-new-todo-duedate]');

const LOCAL_STORAGE_PROJECTS_KEY = 'todo.projectList';
const LOCAL_STORAGE_CURRENT_PROJECT_ID_KEY = 'todo.currentProjectID';
let projectList =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];
let currentProjectID = localStorage.getItem(
  LOCAL_STORAGE_CURRENT_PROJECT_ID_KEY
); // currentProject

let today = new Date().toISOString().split('T')[0];
document.getElementsByClassName('new date')[0].setAttribute('min', today); //set selectable dates to Today and Future dates only

const addProject = (e) => {
  e.preventDefault();
  let projid = 0;
  for (let count = 0; count <= projectList.length; count++) {
    //id generator
    projid++;
  }
  const projectName = projectNameInput.value;
  if (projectName == null || projectName === '') return;
  const newProject = new Project(projectName, projid);
  projectList.push(newProject);
  saveAndDisplay();
  projectForm.reset();
};

const addTodo = (e) => {
  e.preventDefault();
  const taskName = newTaskInput.value;
  const taskDesc = newTaskDesc.value;
  const taskDate = newTaskDate.value;
  if (taskName == null || taskName === '') return;
  const task = new Todos(taskName, taskDesc, taskDate);
  newTaskInput.value = null;
  newTaskDesc.value = null;
  newTaskDate.value = null;
  const selectedList = projectList.find(
    (list) => list.id.toString() === currentProjectID
  );
  selectedList.todolist.push(task);
  saveAndDisplay();
};

projectUL.addEventListener('click', function (e) {
  //check current Project
  if (e.target.tagName.toLowerCase() === 'li') {
    currentProjectID = e.target.id;
    saveAndDisplay();
  }
});

projectForm.addEventListener('submit', addProject);
deleteListButton.addEventListener('click', (e) => {
  projectList = projectList.filter(
    (list) => list.id.toString() !== currentProjectID
  );
  currentProjectID = null;
  saveAndDisplay();
});

newTaskForm.addEventListener('submit', addTodo);

export {
  projectUL,
  projectList,
  LOCAL_STORAGE_PROJECTS_KEY,
  LOCAL_STORAGE_CURRENT_PROJECT_ID_KEY,
  currentProjectID,
  projectDisplayContainer,
  projectTitleElement,
  todoContainer,
  taskTemplate,
};
