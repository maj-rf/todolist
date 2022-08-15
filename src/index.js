import './styles/style.css';
import Project from './modules/Projects';
import display from './modules/display';

const openBtn = document.querySelector('.open-btn');
const todoModal = document.getElementById('todo-modal');
const todoForm = document.getElementById('todo-form');
const cancelBtn = document.querySelector('.cancel');
const projectForm = document.getElementById('project-form');
const projectsUL = document.querySelector('.projects');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

let projects = JSON.parse(localStorage.getItem('projects')) || [
  {
    _name: 'Test Project',
    _id: 'testid',
    _todolist: [{ title: 'test todo' }, { title: 'another todo' }],
  },
  {
    _name: 'AnotherProject',
    _id: 'testid2',
    _todolist: [{ title: 'asdasdsa' }, { title: 'another' }],
  },
];

// let currentProject =
//   JSON.parse(localStorage.getItem('currentProject')) || projects[0];
let currentProject = projects[0];

openBtn.addEventListener('click', () => todoModal.showModal());
cancelBtn.addEventListener('click', () => todoModal.close());
todoForm.addEventListener('submit', () => alert('submitted'));
projectForm.addEventListener('submit', (e) => {
  currentProject = addProject(e);
  display.renderAndSave(projects, currentProject);
});
projectsUL.addEventListener('click', (e) => {
  if (e.target.nodeName === 'SPAN') {
    currentProject =
      projects[projects.findIndex((x) => x._id === e.target.parentNode.id)];
    return display.renderAndSave(projects, currentProject);
  } else if (e.target.nodeName === 'BUTTON') {
    projects = deleteProject(e);
    display.renderAndSave(projects, projects[0]);
  }
  return;
});
navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--visible');
});

function addProject(e) {
  e.preventDefault();
  const projectForm = document.getElementById('project-form');
  const projectInput = document.querySelector('.project-name');
  let project = new Project(
    projectInput.value,
    projectInput.value + Date.now()
  );
  project.addTodo({ title: 'Example Todo' });
  projects.push(project);
  //localStorage.setItem('projects', JSON.stringify(projects));
  projectForm.reset();
  return project;
}

function deleteProject(e) {
  projects = [...projects].filter(
    (proj) => proj._id !== e.target.parentNode.id
  );
  //localStorage.setItem('projects', JSON.stringify(projects));
  return projects;
}
// init()
display.renderAndSave(projects, currentProject);
