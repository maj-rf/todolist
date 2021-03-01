import {projectUL, projectList, LOCAL_STORAGE_PROJECTS_KEY, 
    LOCAL_STORAGE_CURRENT_PROJECT_ID_KEY,currentProjectID,
    projectDisplayContainer, projectTitleElement, todoContainer,
    taskTemplate} from './dom'

//module to display stuff
const render = () => { //render everything
    clearElement(projectUL);
    renderProjects();
    const selectedList = projectList.find(list => list.id.toString() === currentProjectID);
    if (currentProjectID == null) {
      projectDisplayContainer.style.display = 'none'
    } else {
      projectDisplayContainer.style.display = ''
      projectTitleElement.innerText = selectedList.name;
      clearElement(todoContainer);
      renderTasks(selectedList);
    }
}

const renderProjects = () => { //render leftNav
    projectList.forEach(list =>{
        const listLI = document.createElement("li");
        listLI.classList.add("project-name");
        listLI.innerText = list.name;
        listLI.setAttribute("id", `${list.id}`);
        if(list.id === currentProjectID) {
        listLI.classList.add("active-project");
        }
        projectUL.appendChild(listLI);
    });
}

const renderTasks = (selectedList) => { //render Todos in specific Project
    selectedList.todolist.forEach(task => {
      const taskElement = document.importNode(taskTemplate.content, true) //Use html Template
      const label = taskElement.querySelector('label');
      label.append(`${task.title}, ${task.desc}, ${task.dueDate}`);
      todoContainer.appendChild(taskElement)
    })
}

const clearElement = (element) => { //clear and replace existing display elements
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}
const saveAndDisplay = () => {
    localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY,JSON.stringify(projectList));
    localStorage.setItem(LOCAL_STORAGE_CURRENT_PROJECT_ID_KEY, currentProjectID);
    render();
}

export {render, saveAndDisplay} //,showThisProject};