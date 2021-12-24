import { Project, Todos } from './modules/constructor';
import uniqid from 'uniqid';
import './styles/style.css';

const form = document.querySelector('.project-form');
const projects = [];

const addProject = (e) => {
  e.preventDefault();
  const projectName = document.querySelector('.pname-input').value;
  if (projectName == null || projectName === '') return;
  const newProject = new Project(projectName, uniqid());
  projects.push(newProject);
  form.reset();
};

form.addEventListener('submit', addProject);
