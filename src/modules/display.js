import {projectUL, projectList} from './dom'

//module to display stuff
const render = () => {
    clearElement(projectUL);
    projectList.forEach(list =>{
        const listLI = document.createElement("li");
        listLI.classList.add("project-name");
        listLI.innerText = list.name;
        projectUL.appendChild(listLI);
    });
}

const clearElement = (element) => {
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

export default render;