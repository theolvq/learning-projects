const createNav = () => {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const navElements = ['About us', 'Menu', 'Contact'];

  document.body.appendChild(nav);
  nav.classList.add('nav');

  nav.appendChild(ul);

  navElements.forEach((el, i) => {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.classList.add('nav__item');
    const link = document.createElement('a');
    li.appendChild(link);
    link.classList.add('nav__link');
    link.innerText = navElements[i];
  });
};

window.addEventListener('load', createNav);
