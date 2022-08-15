import Project from './Projects';
import Todos from './Todos';

export function addProject(projects) {
  const projectForm = document.getElementById('project-form');
  const projectInput = document.querySelector('.project-name');
  let project = new Project(
    projectInput.value,
    projectInput.value + Date.now()
  );
  projects.push(project);
  projectForm.reset();
  return project;
}

export function deleteProject(e, projects) {
  let newProjects = [...projects].filter(
    (proj) => proj._id !== e.target.parentNode.id
  );
  return newProjects;
}

export function createTodo(currentProject) {
  if (!currentProject) return alert('Cannot add to Empty Project.');
  const title = document.getElementById('title');
  const details = document.getElementById('details');
  const due = document.getElementById('due');
  const priority = document.getElementById('priority');
  const todo = new Todos(title.value, details.value, due.value, priority.value);
  currentProject.addTodo(todo);
  return;
}
