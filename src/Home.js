import chefCooking from './img/chef-cooking.jpg';

const subtitles = ['We Cook', 'We Serve', 'We Love'];

const createHome = () => {
  if (!document.querySelector('#home')) {
    const homeContainer = document.createElement('section');
    document.body.appendChild(homeContainer);
    homeContainer.classList.add('container');
    homeContainer.id = 'home';

    const title = document.createElement('h2');
    homeContainer.appendChild(title);
    title.classList.add('title');
    title.innerText = 'This is our restaurant';

    const chef = new Image();
    chef.src = chefCooking;
    chef.alt = 'Chef cooking in kitchen';
    homeContainer.appendChild(chef);

    const flexContainer = document.createElement('section');
    homeContainer.appendChild(flexContainer);
    flexContainer.classList.add('row');

    subtitles.forEach(sub => {
      const itemContainer = document.createElement('div');
      flexContainer.appendChild(itemContainer);
      itemContainer.classList.add('item-container');

      const subtitle = document.createElement('h3');
      itemContainer.appendChild(subtitle);
      // subtitle.classList.add('title');
      subtitle.innerText = sub;

      const paragraph = document.createElement('p');
      itemContainer.appendChild(paragraph);
      paragraph.innerText =
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet nostrum molestias.';
    });
  }
};

export default createHome;
