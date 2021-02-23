import {projNav} from './dom';

const updateNav = (proj) =>{
    const projectLi = document.createElement("li");
    projectLi.innerHTML = `<button>${proj.projName}</button>`;
    projectLi.classList.add("project-btns");
    projNav.appendChild(projectLi);
}

export default updateNav;