const createHeader = () => {
  const header = document.createElement('header');
  document.body.appendChild(header);

  const title = document.createElement('h1');
  header.appendChild(title);
  title.classList.add('title');
  title.innerText = 'Your average dinner';
};

export default createHeader;
