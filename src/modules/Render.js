import { Project } from './Project';
import { Task } from './Task';
const mainContainer = document.querySelector('#main-container');
const addProject = document.querySelector('#add-project');

export const renderTask = () => {
  const task = new Task();
  console.log(task);
};

export const openForm = () => {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.insertBefore(overlay, mainContainer);

  const formContainer = document.createElement('section');
  formContainer.classList.add('form-container');
  overlay.appendChild(formContainer);

  const projectForm = document.createElement('form');
  projectForm.classList.add('project-form');
  formContainer.appendChild(projectForm);

  const projectFormTitle = document.createElement('h4');
  projectForm.appendChild(projectFormTitle);
  projectFormTitle.innerText = 'Create a new project';

  const projectNameLabel = document.createElement('label');
  projectForm.appendChild(projectNameLabel);
  projectNameLabel.innerText = 'Give your project a name';
  projectNameLabel.htmlFor = 'project-name';

  const projectNameInput = document.createElement('input');
  projectNameInput.type = 'text';
  projectNameInput.id = 'project-name';
  projectNameInput.placeholder = 'Project Name';
  projectNameInput.required = true;
  projectForm.appendChild(projectNameInput);

  const btnContainer = document.createElement('div');
  btnContainer.className = 'form--btn__container';
  projectForm.appendChild(btnContainer);

  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('form--btn', 'form--btn__cancel');
  cancelBtn.innerText = 'Cancel';
  cancelBtn.type = 'button';
  btnContainer.appendChild(cancelBtn);

  const addBtn = document.createElement('button');
  addBtn.classList.add('form--btn', 'form--btn__add');
  addBtn.innerText = 'Add';
  btnContainer.appendChild(addBtn);
};

addProject.addEventListener('click', openForm);
