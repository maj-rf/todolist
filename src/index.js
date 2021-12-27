import { Project, Todos } from './modules/constructor';
import uniqid from 'uniqid';
import './styles/style.css';

const form = document.querySelector('.project-form');
let today = new Date().toISOString().split('T')[0];
document
  .getElementsByClassName('todo-duedate-input')[0]
  .setAttribute('min', today); //set min date to current date.

const projects = [
  {
    name: 'Default List',
    id: 'asdf12345',
    todolist: ['buy bread', 'read book'],
  },
];

const clearChildElements = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const renderProjects = (projects) => {
  const projectsEl = document.querySelector('.project-container');
  clearChildElements(projectsEl);
  projects.forEach((project) => {
    const div = document.createElement('div');
    div.textContent = `${project.name}`;
    projectsEl.append(div);
  });
};

const addProject = (e) => {
  e.preventDefault();
  const projectName = document.querySelector('.pname-input').value;
  if (projectName == null || projectName === '') return;
  const newProject = new Project(projectName, uniqid());
  projects.push(newProject);
  renderProjects(projects);
  form.reset();
};

form.addEventListener('submit', addProject);
renderProjects(projects); // initial render
//renderTodolist(currentID)
