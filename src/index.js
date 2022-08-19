import './styles/style.css';
import Project from './modules/Projects';
import init from './modules/init';
import Todos from './modules/Todos';

// [new Project('Study Finals', 'proj1', [new Todos('Calculus', 'Read Chapter 7', '2024-08-20', 'critical', true)])]

const storage = JSON.parse(localStorage.getItem('projects')) || [
  new Project('Study Finals', 'proj1', [
    new Todos(
      'Calculus',
      'Read Chapter 7',
      '2024-08-20',
      'critical',
      'todo1',
      false
    ),
    new Todos(
      'Click Title to Show Details',
      'These are the details of this todo',
      '2024-08-21',
      'normal',
      'todo2',
      false
    ),
    new Todos(
      'This task is done',
      'Click the circle button to toggle',
      '2024-08-22',
      'important',
      'todo3',
      true
    ),
    new Todos(
      'DeleteMe',
      'Click the trash icon to delete this todo',
      '2024-08-23',
      'low',
      'todo4',
      false
    ),
  ]),
];
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
            todo?._id,
            todo?._status
          )
      )
    )
); //deserialize JSON => convert to local class

console.log(projects);
let currentProject = projects[0];

// init()
init(projects, currentProject);
