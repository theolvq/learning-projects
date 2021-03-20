const createHeader = () => {
  const header = document.createElement('header');
  document.body.appendChild(header);

  const title = document.createElement('h1');
  header.appendChild(title);
  title.innerText = 'Your average dinner';
};

window.addEventListener('load', createHeader);
