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
      const btn = document.createElement('button');
      projectLI.setAttribute('id', project.id);
      btn.textContent = 'X';
      btn.classList.add('deleteBtn');
      projectLI.textContent = project.name;
      projectLI.appendChild(btn);
      projectsUL.appendChild(projectLI);
      // for (const todo of project.todolist) {
      //   const todoLI = document.createElement('li');
      //   todoLI.textContent = todo.title;
      //   projectLI.append(todosUL.appendChild(todoLI));
      // }
    }
    return;
  }

  function renderTodos(project) {
    for (const todo of project.todolist) {
      const todoLI = document.createElement('li');
      todoLI.textContent = todo.title;
      todosUL.appendChild(todoLI);
    }
  }
  return { render, clearElements, renderTodos };
})();

export default display;
