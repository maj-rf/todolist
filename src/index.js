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

let projects = [
  {
    name: 'Test Project',
    id: 'testid',
    todolist: [{ title: 'test todo' }, { title: 'another todo' }],
  },
  {
    name: 'AnotherProject',
    id: 'testid2',
    todolist: [{ title: 'asdasdsa' }, { title: 'another' }],
  },
];

let currentProject = projects[0];

openBtn.addEventListener('click', () => todoModal.showModal());
cancelBtn.addEventListener('click', () => todoModal.close());
todoForm.addEventListener('submit', () => alert('submitted'));
projectForm.addEventListener('submit', (e) => {
  currentProject = addProject(e);
  display.render(projects, currentProject);
});
projectsUL.addEventListener('click', (e) => {
  if (e.target.nodeName === 'SPAN') {
    currentProject =
      projects[projects.findIndex((x) => x.id === e.target.parentNode.id)];
    return display.render(projects, currentProject);
  } else if (e.target.nodeName === 'BUTTON') {
    projects = deleteProject(e);
    display.render(projects, projects[0]);
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
  projectForm.reset();
  return project;
}

function deleteProject(e) {
  return (projects = [...projects].filter(
    (proj) => proj.id !== e.target.parentNode.id
  ));
}
// init()
display.render(projects, currentProject);
