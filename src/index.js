import './styles/style.css';
import Project from './modules/Projects';
import display from './modules/display';

const openBtn = document.querySelector('.open-btn');
const todoModal = document.getElementById('todo-modal');
const todoForm = document.getElementById('todo-form');
const cancelBtn = document.querySelector('.cancel');
const projectForm = document.getElementById('project-form');
const projectsUL = document.querySelector('.projects');
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

openBtn.addEventListener('click', () => todoModal.showModal());
cancelBtn.addEventListener('click', () => todoModal.close());
todoForm.addEventListener('submit', () => alert('submitted'));
projectForm.addEventListener('submit', addProject);
projectsUL.addEventListener('click', (e) => {
  if (e.target.nodeName === 'LI')
    display.renderTodos(
      projects[projects.findIndex((x) => x.id === e.target.id)]
    );
  if (e.target.nodeName === 'BUTTON') deleteProject(e);
  return;
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
  display.clearElements(projectsUL);
  display.render(projects);
  display.renderTodos(project);
  projectForm.reset();
  return;
}

function deleteProject(e) {
  console.log(e.target.parentNode.id);
  display.clearElements(projectsUL);
  projects = [...projects].filter((proj) => proj.id !== e.target.parentNode.id);
  display.render(projects);
  display.renderTodos(projects[0]);
  return;
}

// init()
display.render(projects);
display.renderTodos(projects[0]);
