import { Project } from './Project';
import { Task } from './Task';
const titleContainer = document.querySelector('.title-container');
const createProjectBtn = document.querySelector('#add-project');
const mainSection = document.querySelector('.main-section');

export const renderTask = () => {
  const task = new Task();
  console.log(task);
};

export const openForm = () => {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.insertBefore(overlay, titleContainer);

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

const addProjectToSidebar = () => {
  const projectContainer = document.createElement('div');
  projectContainer.classList.add()`    <div class="add-container" id="add-project">
          <button class="btn__side row row__center text__light">
            <span class="material-icons md-36 add-sign"> add </span>
            <h4>Projects</h4>
          </button>
        </div>`;
};

export const submitForm = e => {
  if (e.target.classList.contains('form--btn__add')) {
    e.preventDefault();
    const overlay = document.querySelector('.overlay');
    const projectName = document.querySelector('#project-name').value;
    const project = new Project(projectName);
    document.body.removeChild(overlay);

    const projectCard = document.createElement('section');
    projectCard.classList.add('card');
    mainSection.appendChild(projectCard);

    const projecTitle = document.createElement('h4');
    projecTitle.classList.add('text__dark');
    projectCard.appendChild(projecTitle);
    projecTitle.innerText = project.getName();
    console.log(project);
  }
};

export const closeForm = e => {
  const overlay = document.querySelector('.overlay');
  if (e.target.classList.contains('form--btn__cancel') || e.target === overlay) {
    e.preventDefault();
    document.body.removeChild(overlay);
  }
};

window.addEventListener('click', closeForm);
createProjectBtn.addEventListener('click', openForm);
window.addEventListener('click', submitForm);
