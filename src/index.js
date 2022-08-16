import './styles/style.css';
import Project from './modules/Projects';
import init from './modules/init';
import Todos from './modules/Todos';

const storage = JSON.parse(localStorage.getItem('projects')) || [];
let projects = storage.map(
  (proj) =>
    new Project(
      proj?._name,
      proj?._id,
      proj?._todolist.map(
        (todo) =>
          new Todos(
            todo?._title,
            todo?._details,
            todo?._due,
            todo?._priority,
            todo?._id
          )
      )
    )
); //deserialize JSON => convert to local class

console.log(projects);
let currentProject = projects[0];

// init()
init(projects, currentProject);
