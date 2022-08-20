import listIcon from '../assets/list.svg';

const display = (() => {
  const todoContainer = document.querySelector('.todos');

  const projectsUL = document.querySelector('.projects');

  function clearElements(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  function createMsgElement(type) {
    const p = document.createElement('p');
    p.textContent = `There are no ${type === 'todos' ? 'tasks.' : 'projects.'}`;
    return type === 'todos'
      ? todoContainer.appendChild(p)
      : projectsUL.appendChild(p);
  }

  function createBtn() {
    const btn = document.createElement('button');
    btn.classList.add('deleteBtn');
    return btn;
  }

  function createProjectElement(project) {
    const projectLI = document.createElement('li');
    const span = document.createElement('span');
    const icon = new Image();
    icon.src = listIcon;
    const btn = createBtn();
    projectLI.classList.add('project-li');
    span.classList.add('project-span');
    projectLI.setAttribute('id', project._id);
    span.textContent = project._name;
    projectLI.append(icon, span, btn);
    projectsUL.appendChild(projectLI);
    return;
  }

  function createTodoElement(todo) {
    const todoDetails = document.createElement('details');
    const todoTitle = document.createElement('summary');
    const todoContent = document.createElement('div');
    const todoDue = document.createElement('p');
    const todoStatus = document.createElement('input');
    const btnContainer = document.createElement('div');
    const btn = createBtn();
    btnContainer.classList.add('btn-container');
    btnContainer.append(todoStatus, btn);
    todoStatus.type = 'checkbox';
    todoStatus.name = 'status';
    todoStatus.checked = todo._status;
    todoStatus.checked
      ? todoDetails.classList.add('done')
      : todoDetails.classList.remove('done');
    btn.classList.add('todo-delete');
    todoDetails.classList.add(todo._priority);
    todoContent.textContent = todo._details;
    todoTitle.textContent = todo._title;
    todoDue.textContent = todo._due;
    todoTitle.setAttribute('id', todo._id);
    //todoTitle.append(todoStatus, btn);
    todoTitle.appendChild(btnContainer);
    todoContent.appendChild(todoDue);
    todoDetails.append(todoTitle, todoContent);
    todoContainer.appendChild(todoDetails);
    return;
  }

  function createTodoHeading(project) {
    const h2 = document.createElement('h2');
    h2.textContent = project._name;
    todoContainer.appendChild(h2);
    return;
  }

  function setActiveProject(currentProject) {
    if (!currentProject) return;
    projectsUL.childNodes.forEach((li) => {
      li.classList.remove('active-project');
    });
    const activeProject = document.querySelector(`#${currentProject._id}`);
    activeProject?.classList.add('active-project');
  }

  function renderProjects(projects, currentProject) {
    clearElements(projectsUL);
    if (projects.length <= 0) return createMsgElement('projects');
    for (const project of projects) {
      createProjectElement(project);
    }
    setActiveProject(currentProject);
    return;
  }

  function renderTodos(project) {
    if (!project) return clearElements(todoContainer);
    if (project._todolist.length <= 0) {
      clearElements(todoContainer);
      createTodoHeading(project);
      return createMsgElement('todos');
    }
    clearElements(todoContainer);
    createTodoHeading(project);
    for (const todo of project._todolist) {
      createTodoElement(todo);
    }
    return;
  }

  function renderAndSave(projects, currentProject) {
    localStorage.setItem('projects', JSON.stringify(projects));
    //localStorage.setItem('currentProject', JSON.stringify(currentProject));
    renderProjects(projects, currentProject);
    renderTodos(currentProject);
    return;
  }
  return { renderProjects, clearElements, renderTodos, renderAndSave };
})();

export default display;
