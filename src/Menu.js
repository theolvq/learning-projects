// //images
// import fishTacos from './img/fish-tacos.jpg';
// import caesarSalad from './img/caesar-salad.jpg';
// import snackBoard from './img/snack-board.jpg';
// import veganSalad from './img/vegan-salad.jpg';
// import veganBurger from './img/vegan-burger.jpg';
// import meatBurger from './img/meat-burger.jpg';
// import burrito from './img/burrito.jpg';
// import pastaCarbonara from './img/pasta-carbonara.jpg';

const menu = [
  {
    id: 1,
    category: 'Appetizer',
    name: 'Caesar Salad',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$9.90',
  },
  {
    id: 2,
    category: 'Appetizer',
    name: 'Fish Tacos',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$11.90',
  },
  {
    id: 3,
    category: 'Appetizer',
    name: 'Vegan Salad',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$9.90',
  },
  {
    id: 4,
    category: 'Appetizer',
    name: 'Charcuterie Board',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$9.90',
  },
  {
    id: 5,
    category: 'Main',
    name: 'Vegan Burger',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$16.90',
  },
  {
    id: 6,
    category: 'Main',
    name: 'Super Burrito',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$13.90',
  },
  {
    id: 7,
    category: 'Main',
    name: 'Meat Burger',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$15.90',
  },
  {
    id: 8,
    category: 'Main',
    name: 'Pasta Carbonara',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$14.90',
  },
];

const createMenu = () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  container.classList.add('container');

  menu.forEach(el => {
    const card = document.createElement('div');
    card.classList.add('card');
    container.appendChild(card);

    const itemTitle = document.createElement('h3');
    card.appendChild(itemTitle);
    itemTitle.innerText = el.name;

    const itemDescription = document.createElement('p');
    card.appendChild(itemDescription);
    itemDescription.innerText = el.description;
  });
};

window.addEventListener('load', createMenu);
