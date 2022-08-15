const display = (() => {
  const todosUL = document.querySelector('.todos');
  const projectsUL = document.querySelector('.projects');
  function clearElements(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  function createProjectElement(project) {
    const projectLI = document.createElement('li');
    const span = document.createElement('span');
    const btn = document.createElement('button');
    projectLI.classList.add('project-li');
    span.classList.add('project-span');
    projectLI.setAttribute('id', project.id);
    btn.textContent = 'X';
    btn.classList.add('deleteBtn');
    span.textContent = project.name;
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
    h2.textContent = project.name;
    todosUL.appendChild(h2);
    return;
  }

  function setActiveProject(currentProject) {
    if (!currentProject) return;
    projectsUL.childNodes.forEach((li) => {
      li.classList.remove('active-project');
    });
    const activeProject = document.querySelector(`#${currentProject.id}`);
    activeProject?.classList.add('active-project');
  }

  function renderProjects(projects, currentProject) {
    clearElements(projectsUL);
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
    for (const todo of project.todolist) {
      createTodoElement(todo);
    }
    return;
  }

  function render(project, currentProject) {
    renderProjects(project, currentProject);
    renderTodos(currentProject);
    return;
  }
  return { renderProjects, clearElements, renderTodos, render };
})();

export default display;
