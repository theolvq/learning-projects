const createNav = () => {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const navElements = ['About us', 'Menu', 'Contact'];

  document.body.appendChild(nav);
  nav.appendChild(ul);
  for (let i = 0; i < navElements.length; i++) {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = navElements[i];
  }
};

window.addEventListener('load', createNav);
