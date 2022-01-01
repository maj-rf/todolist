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
    id: uniqid(),
    todolist: [
      {
        title: 'Groceries',
        desc: 'Buy tomato, buy orange, buy milk',
        duedate: new Date(),
        complete: false,
      },
      {
        title: 'Read Books',
        desc: 'Noli Me Tangere + El Filibusterismo',
        duedate: new Date(),
        complete: false,
      },
    ],
  },
  {
    name: 'Another List',
    id: uniqid(),
    todolist: [
      {
        title: 'Walk Chichi',
        desc: 'Go walk my dog and meet other people',
        duedate: new Date(),
        complete: false,
      },
    ],
  },
];

let currentID = projects[0].id;

const clearChildElements = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const renderProjects = (projects) => {
  const projectsEl = document.querySelector('.project-container');
  clearChildElements(projectsEl);
  console.log(projects);
  projects.forEach((project) => {
    const pEl = document.createElement('p');
    pEl.setAttribute('id', project.id);
    pEl.textContent = `${project.name}`;
    projectsEl.append(pEl);
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

const renderTodos = (currentID) => {
  let current = projects.find((project) => project.id === currentID);
  console.log(`you are in ${current.name}`); // current project Checker
  const todoContainer = document.querySelector('.todo-container');
  const selectedProject = projects.find((project) => project.id === currentID);
  clearChildElements(todoContainer);
  if (selectedProject.todolist === undefined) return; //ignores blank new todolist

  selectedProject.todolist.forEach((todo) => {
    const item = document.createElement('div');
    const name = document.createElement('div');
    const desc = document.createElement('div');
    const duedate = document.createElement('div');
    const complete = document.createElement('div');
    name.textContent = `Title: ${todo.title}`;
    desc.textContent = `Description: ${todo.desc}`;
    duedate.textContent = `Due: ${todo.duedate}`;
    complete.textContent = `Done?: ${todo.complete}`;
    item.append(name, desc, duedate, complete);
    todoContainer.append(item);
  });
};

form.addEventListener('submit', addProject);
document
  .querySelector('.project-container')
  .addEventListener('click', (e) =>
    e.target.nodeName === 'P' ? renderTodos(e.target.id) : ''
  );

renderProjects(projects); // initial render
renderTodos(currentID);
