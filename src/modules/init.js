import display from './display';
import Project from './Projects';
import Todos from './Todos';
import addIcon from '../assets/add.svg';
import logoIcon from '../assets/logo.png';

function addProject(projects) {
  const projectForm = document.getElementById('project-form');
  const projectInput = document.querySelector('.project-name');
  let project = new Project(
    projectInput.value,
    projectInput.value.replace(/ /g, '') + Date.now()
  );
  projects.push(project);
  projectForm.reset();
  return project;
}

function deleteProject(e, projects) {
  projects = [...projects].filter(
    (proj) => proj._id !== e.target.parentNode.id
  );
  return projects;
}

function createTodo(currentProject) {
  if (!currentProject) return alert('Cannot add to Empty Project.');
  const title = document.getElementById('title');
  const details = document.getElementById('details');
  const due = document.getElementById('due');
  const priority = document.getElementById('priority');
  const todo = new Todos(title.value, details.value, due.value, priority.value);
  currentProject.addTodo(todo);
  return;
}

const init = (projects, currentProject) => {
  const openBtn = document.querySelector('.open-btn');
  const todoModal = document.getElementById('todo-modal');
  const todoForm = document.getElementById('todo-form');
  const cancelBtn = document.querySelector('.cancel');
  const projectForm = document.getElementById('project-form');
  const projectsUL = document.querySelector('.projects');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');
  const todoContainer = document.querySelector('.todos');
  const heading = document.querySelector('.heading');
  const addButton = document.querySelector('.addButton');
  const logo = new Image();
  const add = new Image();
  logo.src = logoIcon;
  logo.alt = 'todo logo';
  add.src = addIcon;
  add.alt = 'add icon';
  heading.prepend(logo);
  addButton.appendChild(add);
  logo.classList.add('logo');
  openBtn.addEventListener('click', () => todoModal.showModal());
  cancelBtn.addEventListener('click', () => todoModal.close());

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
  });

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
  });

  projectsUL.addEventListener('click', (e) => {
    if (e.target.nodeName === 'SPAN') {
      currentProject =
        projects[projects.findIndex((x) => x._id === e.target.parentNode.id)];
      return display.renderAndSave(projects, currentProject);
    } else if (e.target.nodeName === 'BUTTON') {
      projects = deleteProject(e, projects);
      currentProject = projects[0];
      return display.renderAndSave(projects, currentProject);
    }
    return;
  });

  todoContainer.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
      currentProject = currentProject.deleteTodo(e.target.parentNode.id);
      display.renderAndSave(projects, currentProject);
    } else if (e.target.nodeName === 'INPUT') {
      currentProject = currentProject.changeTodoStatus(e.target.parentNode.id);
      display.renderAndSave(projects, currentProject);
    }
  });

  display.renderAndSave(projects, currentProject);
};

export default init;
