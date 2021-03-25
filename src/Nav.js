const createNav = () => {
  const nav = document.createElement('nav');
  document.body.appendChild(nav);
  nav.classList.add('nav');

  const ul = document.createElement('ul');
  nav.appendChild(ul);
  ul.classList.add('nav__list');

  const navElements = ['About us', 'Menu', 'Contact'];
  navElements.forEach(el => {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.classList.add('nav__item');

    const link = document.createElement('a');
    li.appendChild(link);
    link.classList.add('nav__link');
    link.href = '#';
    link.innerText = el;
  });
};
export default createNav;
