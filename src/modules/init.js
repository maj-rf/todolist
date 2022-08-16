// import display from './display';
// import Project from './Projects';
// import Todos from './Todos';

// function addProject(projects) {
//   const projectForm = document.getElementById('project-form');
//   const projectInput = document.querySelector('.project-name');
//   let project = new Project(
//     projectInput.value,
//     projectInput.value.replace(/ /g, '') + Date.now()
//   );
//   projects.push(project);
//   projectForm.reset();
//   return project;
// }

// function deleteProject(e, projects) {
//   let newProjects = [...projects].filter(
//     (proj) => proj._id !== e.target.parentNode.id
//   );
//   return newProjects;
// }

// function createTodo(currentProject) {
//   if (!currentProject) return alert('Cannot add to Empty Project.');
//   const title = document.getElementById('title');
//   const details = document.getElementById('details');
//   const due = document.getElementById('due');
//   const priority = document.getElementById('priority');
//   const todo = new Todos(title.value, details.value, due.value, priority.value);
//   currentProject.addTodo(todo);
//   return;
// }

// const init = (projects, currentProject) => {
//   const openBtn = document.querySelector('.open-btn');
//   const todoModal = document.getElementById('todo-modal');
//   const todoForm = document.getElementById('todo-form');
//   const cancelBtn = document.querySelector('.cancel');
//   const projectForm = document.getElementById('project-form');
//   const projectsUL = document.querySelector('.projects');
//   const navToggle = document.querySelector('.nav-toggle');
//   const nav = document.querySelector('nav');
//   const todoUL = document.querySelector('.todos');

//   openBtn.addEventListener('click', () => todoModal.showModal());
//   cancelBtn.addEventListener('click', () => todoModal.close());
//   todoForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     createTodo(currentProject);
//     display.renderAndSave(projects, currentProject);
//     todoModal.close();
//     todoForm.reset();
//     return;
//   });
//   projectForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     projects = addProject(projects);
//     display.renderAndSave(projects, currentProject);
//     return;
//   });
//   projectsUL.addEventListener('click', (e) => {
//     if (e.target.nodeName === 'SPAN') {
//       currentProject =
//         projects[projects.findIndex((x) => x._id === e.target.parentNode.id)];
//       return display.renderAndSave(projects, currentProject);
//     } else if (e.target.nodeName === 'BUTTON') {
//       projects = deleteProject(e, projects);
//       display.renderAndSave(projects, projects[0]);
//     }
//     return;
//   });
//   navToggle.addEventListener('click', () => {
//     nav.classList.toggle('nav--visible');
//   });
//   todoUL.addEventListener('click', (e) => {
//     if (e.target.nodeName === 'BUTTON') {
//       currentProject._todolist = currentProject.deleteTodo(
//         e.target.parentNode.id
//       );
//       console.log(currentProject);
//       display.renderAndSave(projects, currentProject);
//     }
//   });

//   display.renderAndSave(projects, currentProject);
// };

// export default init;

import display from './display';
import Project from './Projects';
import Todos from './Todos';

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
  let newProjects = [...projects].filter(
    (proj) => proj._id !== e.target.parentNode.id
  );
  return newProjects;
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
  const todoUL = document.querySelector('.todos');
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
      return display.renderAndSave(projects, projects[0]);
    }
    return;
  });

  todoUL.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
      console.log(e.target.parentNode.id);
      currentProject = currentProject.deleteTodo(e.target.parentNode.id);
      display.renderAndSave(projects, currentProject);
    }
  });

  display.renderAndSave(projects, currentProject);
};

export default init;
