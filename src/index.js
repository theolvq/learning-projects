import './style.css';
import 'normalize.css';
import { Project } from './modules/Project';

const addProject = document.querySelector('#add-project');

const todo = new Project('Todo App');
todo.getName();
todo.addTask('test');
todo.getTasks();
