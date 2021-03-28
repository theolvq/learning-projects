//images
import fishTacos from './img/fish-tacos.jpg';
import caesarSalad from './img/caesar-salad.jpg';
import snackBoard from './img/snack-board.jpg';
import veganSalad from './img/vegan-salad.jpg';
import veganBurger from './img/vegan-burger.jpg';
import meatBurger from './img/meat-burger.jpg';
import burrito from './img/burrito.jpg';
import pastaCarbonara from './img/pasta-carbonara.jpg';

const menu = [
  {
    id: 1,
    category: 'Appetizer',
    name: 'Caesar Salad',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$9.90',
    image: caesarSalad,
  },
  {
    id: 2,
    category: 'Appetizer',
    name: 'Fish Tacos',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$11.90',
    image: fishTacos,
  },
  {
    id: 3,
    category: 'Appetizer',
    name: 'Vegan Salad',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$9.90',
    image: veganSalad,
  },
  {
    id: 4,
    category: 'Appetizer',
    name: 'Charcuterie Board',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$9.90',
    image: snackBoard,
  },
  {
    id: 5,
    category: 'Main',
    name: 'Vegan Burger',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$16.90',
    image: veganBurger,
  },
  {
    id: 6,
    category: 'Main',
    name: 'Super Burrito',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$13.90',
    image: burrito,
  },
  {
    id: 7,
    category: 'Main',
    name: 'Meat Burger',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$15.90',
    image: meatBurger,
  },
  {
    id: 8,
    category: 'Main',
    name: 'Pasta Carbonara',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$14.90',
    image: pastaCarbonara,
  },
];

const createMenu = () => {
  if (!document.querySelector('#menu')) {
    const menuContainer = document.createElement('section');
    document.body.appendChild(menuContainer);
    menuContainer.classList.add('container');
    menuContainer.id = 'menu';

    menu.forEach(el => {
      const card = document.createElement('div');
      card.classList.add('card');
      menuContainer.appendChild(card);

      const image = new Image();
      image.src = el.image;
      card.appendChild(image);
      image.classList.add('menu-img');

      const descriptionContainer = document.createElement('section');
      card.appendChild(descriptionContainer);
      descriptionContainer.classList.add('description-container');

      const itemTitle = document.createElement('h3');
      descriptionContainer.appendChild(itemTitle);
      itemTitle.innerText = el.name;

      const itemDescription = document.createElement('p');
      descriptionContainer.appendChild(itemDescription);
      itemDescription.innerText = el.description;
    });
  }
};

export default createMenu;
