const createHeader = () => {
  const body = document.querySelector('body');
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const navElements = ['About us', 'Menu', 'Contact'];
  body.appendChild(header);
  header.appendChild(nav);
  nav.appendChild(ul);
  for (let i = 0; i < navElements.length; i++) {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = navElements[i];
  }
};

window.addEventListener('load', createHeader);
