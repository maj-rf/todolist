const display = (() => {
  const todosUL = document.querySelector('.todos');
  function clearElements(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  function render(projects) {
    for (const project of projects) {
      const projectsUL = document.querySelector('.projects');
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
    }
    return;
  }

  function renderTodos(project) {
    if (!project) return clearElements(todosUL);
    const projectLI = document.querySelector(`${project.id}`);
    const h2 = document.createElement('h2');
    h2.textContent = project.name;
    clearElements(todosUL);
    todosUL.appendChild(h2);
    for (const todo of project.todolist) {
      const todoLI = document.createElement('li');
      todoLI.textContent = todo.title;
      todosUL.appendChild(todoLI);
    }

    projectLI?.appendChild(todosUL);
  }
  return { render, clearElements, renderTodos };
})();

export default display;
