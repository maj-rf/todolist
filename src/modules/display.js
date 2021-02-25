import {projectUL, projectList, LOCAL_STORAGE_PROJECTS_KEY, LOCAL_STORAGE_TODOLIST_KEY} from './dom'

//module to display stuff
const render = () => { //render left Nav
    clearElement(projectUL);
    projectList.forEach(list =>{
        const listLI = document.createElement("li");
        listLI.classList.add("project-name");
        listLI.innerText = list.name;
        listLI.setAttribute("id", `${list.id}`)
        projectUL.appendChild(listLI);
    });
}

const clearElement = (element) => { //clear and replace existing renders
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

const showThisProject = (e) => { //show Project and Todo list
    console.log(projectList[e.target.id - 1].name) //THIS IS THE KEY
    const content = document.querySelector(".content");
    const contentUL = document.createElement("ul");
    const contentULForm = document.createElement("form");
    contentULForm.classList.add("todo-form");
    clearElement(content);
    contentULForm.innerHTML = `
    <div class="form-input">
        <input type="text" placeholder="To-do Title.." id="todo-title">
    </div>
    <div class="form-input">
        <input type="text" placeholder="Description.." id="todo-desc">
    </div>
    <div class="form-input">
        <input type="date" id="todo-date">
    </div>
    <div class="form-input"> 
        <input type="submit" id="todo-submit" value="Add New To-do">
    </div>`
    contentUL.innerText = e.target.innerText;
    content.appendChild(contentULForm);
    content.appendChild(contentUL);

    contentULForm.addEventListener("submit", function(event){ //add Todo
        event.preventDefault();
        const title = document.querySelector("#todo-title").value;
        const desc = document.querySelector("#todo-desc").value;
        const date = document.querySelector("#todo-date").value;
        const contentLI = document.createElement("li");
        clearElement(contentLI);
        contentLI.innerText = `${title}, ${desc}, ${date}`;
        contentUL.appendChild(contentLI);
    });
}




const saveStorage = () => {
    localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY,JSON.stringify(projectList));
    render();
}

export {render, saveStorage, showThisProject};