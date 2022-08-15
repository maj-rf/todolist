import './styles/style.css';
import Project from './modules/Projects';
import display from './modules/display';
import {
  addProject,
  deleteProject,
  createTodo,
} from './modules/projectFunctions';

const openBtn = document.querySelector('.open-btn');
const todoModal = document.getElementById('todo-modal');
const todoForm = document.getElementById('todo-form');
const cancelBtn = document.querySelector('.cancel');
const projectForm = document.getElementById('project-form');
const projectsUL = document.querySelector('.projects');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

const storage = JSON.parse(localStorage.getItem('projects')) || [];
let projects = storage.map(
  (proj) => new Project(proj._name, proj._id, proj._todolist)
);

let currentProject = projects[0];

openBtn.addEventListener('click', () => todoModal.showModal());
cancelBtn.addEventListener('click', () => todoModal.close());
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createTodo(currentProject);
  display.renderAndSave(projects, currentProject);
  todoModal.close();
  todoForm.reset();
  return;
});
projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  currentProject = addProject(projects);
  display.renderAndSave(projects, currentProject);
  return;
});
projectsUL.addEventListener('click', (e) => {
  if (e.target.nodeName === 'SPAN') {
    currentProject =
      projects[projects.findIndex((x) => x._id === e.target.parentNode.id)];
    return display.renderAndSave(projects, currentProject);
  } else if (e.target.nodeName === 'BUTTON') {
    projects = deleteProject(e, projects);
    display.renderAndSave(projects, projects[0]);
  }
  return;
});
navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--visible');
});

// init()
display.renderAndSave(projects, currentProject);
