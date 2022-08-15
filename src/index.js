import './styles/style.css';
import Project from './modules/Projects';
import init from './modules/init';

const storage = JSON.parse(localStorage.getItem('projects')) || [];
let projects = storage.map(
  (proj) => new Project(proj._name, proj._id, proj._todolist)
); //deserialize JSON => convert to local class
let currentProject = projects[0];

// init()
init(projects, currentProject);
