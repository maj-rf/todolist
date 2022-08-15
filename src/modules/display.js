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
    return projectsUL.appendChild(p);
  }

  function createProjectElement(project) {
    const projectLI = document.createElement('li');
    const span = document.createElement('span');
    const btn = document.createElement('button');
    projectLI.classList.add('project-li');
    span.classList.add('project-span');
    projectLI.setAttribute('id', project._id);
    btn.textContent = 'X';
    btn.classList.add('deleteBtn');
    span.textContent = project._name;
    projectLI.append(span, btn);
    projectsUL.appendChild(projectLI);
    return;
  }

  function createTodoElement(todo) {
    const todoLI = document.createElement('li');
    todoLI.textContent = todo.title;
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
