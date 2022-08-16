const display = (() => {
  const todosUL = document.querySelector('.todos');

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
      ? todosUL.appendChild(p)
      : projectsUL.appendChild(p);
  }

  function createBtn() {
    const btn = document.createElement('button');
    btn.textContent = 'X';
    btn.classList.add('deleteBtn');
    return btn;
  }

  function createProjectElement(project) {
    const projectLI = document.createElement('li');
    const span = document.createElement('span');
    const btn = createBtn();
    projectLI.classList.add('project-li');
    span.classList.add('project-span');
    projectLI.setAttribute('id', project._id);
    span.textContent = project._name;
    projectLI.append(span, btn);
    projectsUL.appendChild(projectLI);
    return;
  }

  function createTodoElement(todo) {
    const todoLI = document.createElement('li');
    const btn = createBtn();
    btn.classList.add('todo-delete');
    todoLI.textContent = todo._title;
    todoLI.setAttribute('id', todo._id);
    todoLI.appendChild(btn);
    todosUL.appendChild(todoLI);
    return;
  }

  function createTodoHeading(project) {
    const h2 = document.createElement('h2');
    h2.textContent = project._name;
    todosUL.appendChild(h2);
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
    if (!project) return clearElements(todosUL);
    if (project._todolist.length <= 0) {
      clearElements(todosUL);
      createTodoHeading(project);
      return createMsgElement('todos');
    }
    clearElements(todosUL);
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
