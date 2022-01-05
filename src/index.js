import { Project, Todos } from './modules/constructor';
import uniqid from 'uniqid';
import './styles/style.css';

const form = document.querySelector('.project-form');
const projContainer = document.querySelector('.project-container');
const todoForm = document.querySelector('.todo-form');
const todoContainer = document.querySelector('.todo-container');
const burgerEl = document.querySelector('.burger');
const navEl = document.querySelector('nav');
let today = new Date().toISOString().split('T')[0];
document
  .getElementsByClassName('todo-duedate-input')[0]
  .setAttribute('min', today); //set min date to current date.

document.getElementsByClassName('todo-duedate-input')[0].valueAsDate =
  new Date(); // set default date to today.

// ### Default Projects with respective Todolist
const currentProjects = [
  {
    name: 'Default Project',
    id: uniqid(),
    todolist: [
      {
        title: 'My Todo',
        desc: 'This is a finished todo noted by the toggle button and strikethrough',
        duedate: new Date().toISOString().split('T')[0],
        id: 'grocery',
        status: true,
      },
      {
        title: 'Read Books',
        desc: 'Noli Me Tangere + El Filibusterismo',
        duedate: new Date().toISOString().split('T')[0],
        id: 'library',
        status: false,
      },
    ],
  },
  {
    name: 'Another Default Project',
    id: uniqid(),
    todolist: [
      {
        title: 'Walk Chichi',
        desc: 'Go walk my dog and meet other people',
        duedate: new Date().toISOString().split('T')[0],
        id: 'walkdog',
        status: false,
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
  console.log(projects);
  projects.forEach((project) => {
    const projCard = document.createElement('div');
    const pEl = document.createElement('p');
    const deleteIcon = document.createElement('i');
    projCard.classList.add('project-card');
    pEl.setAttribute('id', project.id);
    pEl.textContent = `${project.name}`;
    deleteIcon.classList.add('fas', 'fa-trash-alt');
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
    const statusCont = document.createElement('label');
    const statusInput = document.createElement('input');
    const statusSpan = document.createElement('span');
    const deleteIcon = document.createElement('i');
    statusCont.classList.add('switch');
    statusInput.setAttribute('type', 'checkbox');
    statusSpan.classList.add('slider', 'round');
    item.setAttribute('id', todo.id);
    item.classList.add('todo-item');
    name.textContent = todo.title;
    desc.textContent = todo.desc;
    duedate.textContent = todo.duedate;
    if (todo.status) item.classList.add('finish');
    statusInput.checked = todo.status;
    deleteIcon.classList.add('fas', 'fa-trash-alt');
    statusCont.append(statusInput, statusSpan);
    item.append(name, desc, duedate, statusCont, deleteIcon);
    todoContainer.append(item);
  });
};

// ### Add && Remove Stuff
const addProject = (e) => {
  e.preventDefault();
  const projectName = document.querySelector('.pname-input').value;
  if (projectName == null || projectName === '') return;
  const newProject = new Project(projectName, uniqid());
  currentID = newProject.id;
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
  if (currentProjects[0] === undefined) {
    currentID = null;
    return clearChildElements(todoContainer);
  }
  renderTodos(currentProjects[0].id);
  currentID = currentProjects[0].id;
};

const addTodo = (e) => {
  e.preventDefault();
  const todoName = document.querySelector('.todo-name-input').value;
  const todoDesc = document.querySelector('.todo-desc-input').value;
  const todoDate = document.querySelector('.todo-duedate-input').value;
  const newTodo = new Todos(todoName, todoDesc, todoDate, uniqid());
  if (todoName === '' || todoDesc === '' || todoDate === '') return;
  currentProjects.map((obj) =>
    obj.id === currentID
      ? {
          ...obj,
          todolist: [],
          todolist: obj.todolist.push(newTodo),
        }
      : obj
  );
  renderTodos(currentID);
};

const deleteTodo = (e) => {
  e.preventDefault();
  let projIndex = currentProjects.findIndex((proj) => proj.id === currentID);
  let todoIndex = currentProjects[projIndex].todolist.findIndex(
    (todo) => todo.id === e.target.parentNode.id
  );
  currentProjects[projIndex].todolist.splice(todoIndex, 1);
  renderTodos(currentID);
};

// ### Events
form.addEventListener('submit', addProject);
projContainer.addEventListener('click', (e) => {
  if (e.target.nodeName === 'P') {
    renderTodos(e.target.id);
    currentID = e.target.id;
  }
  if (e.target.nodeName === 'I') deleteProject(e);
});
todoForm.addEventListener('submit', addTodo);
todoContainer.addEventListener('click', (e) => {
  if (e.target.nodeName === 'I') deleteTodo(e);
  if (e.target.nodeName === 'INPUT')
    e.target.parentNode.parentNode.classList.toggle('finish');
});
burgerEl.addEventListener('click', (e) => {
  e.preventDefault();
  burgerEl.classList.toggle('click');
  navEl.classList.toggle('show');
});
document.querySelector;
// ### Initial Render
renderProjects(currentProjects);
renderTodos(currentID);
