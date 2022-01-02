import { Project, Todos } from './modules/constructor';
import uniqid from 'uniqid';
import './styles/style.css';

const form = document.querySelector('.project-form');
let today = new Date().toISOString().split('T')[0];
document
  .getElementsByClassName('todo-duedate-input')[0]
  .setAttribute('min', today); //set min date to current date.

// ### Default Projects with respective Todolist
const currentProjects = [
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

let currentID = currentProjects[0].id;

// ### Render && Clear Stuff

const clearChildElements = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const renderProjects = (projects) => {
  const projectsEl = document.querySelector('.project-container');
  clearChildElements(projectsEl);
  //console.log(projects);
  projects.forEach((project) => {
    const projCard = document.createElement('div');
    const pEl = document.createElement('p');
    const deleteIcon = document.createElement('i');
    projCard.classList.add('project-card');
    pEl.setAttribute('id', project.id);
    pEl.textContent = `${project.name}`;
    deleteIcon.classList.add('fas', 'fa-minus-circle');
    projCard.append(pEl, deleteIcon);
    projectsEl.append(projCard);
  });
};

const renderTodos = (currentID) => {
  console.log(
    `you are in ${
      currentProjects.find((project) => project.id === currentID).name
    }`
  ); // current project Checker
  const todoContainer = document.querySelector('.todo-container');
  const title = document.createElement('h3');
  const selectedProject = currentProjects.find(
    (project) => project.id === currentID
  );
  clearChildElements(todoContainer);
  title.textContent = selectedProject.name;
  todoContainer.append(title);
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

// ### Add && Remove Stuff
const addProject = (e) => {
  e.preventDefault();
  const projectName = document.querySelector('.pname-input').value;
  if (projectName == null || projectName === '') return;
  const newProject = new Project(projectName, uniqid());
  currentProjects.push(newProject);
  renderProjects(currentProjects);
  renderTodos(newProject.id);
  form.reset();
};

const deleteProject = (e) => {
  e.preventDefault();
  const todoContainer = document.querySelector('.todo-container');
  let index = currentProjects.findIndex(
    (proj) => proj.id === e.target.previousElementSibling.id
  );
  currentProjects.splice(index, 1);
  renderProjects(currentProjects);
  if (currentProjects[0] === undefined)
    return clearChildElements(todoContainer);
  renderTodos(currentProjects[0].id);
};
// ### Events
form.addEventListener('submit', addProject);
document.querySelector('.project-container').addEventListener('click', (e) => {
  if (e.target.nodeName === 'P') renderTodos(e.target.id);
  if (e.target.nodeName === 'I') deleteProject(e);
});

// ### Initial Render
renderProjects(currentProjects);
renderTodos(currentID);
