const menu = [
  {
    id: 1,
    category: 'Appetizer',
    name: 'Caesar Salad',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$9.90',
    image: './img/caesar-salad.jpg',
  },
  {
    id: 2,
    category: 'Appetizer',
    name: 'Fish Tacos',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$11.90',
    image: './img/fish-tacos.jpg',
  },
  {
    id: 3,
    category: 'Appetizer',
    name: 'Vegan Salad',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$9.90',
    image: './img/vegan-salad.jpg',
  },
  {
    id: 4,
    category: 'Appetizer',
    name: 'Charcuterie Board',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$9.90',
    image: './img/snack-board.jpg',
  },
  {
    id: 5,
    category: 'Main',
    name: 'Vegan Burger',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$16.90',
    image: './img/vegan-burger.jpg',
  },
  {
    id: 6,
    category: 'Main',
    name: 'Super Burrito',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$13.90',
    image: './img/burrito.jpg',
  },
  {
    id: 7,
    category: 'Main',
    name: 'Meat Burger',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$15.90',
    image: './img/meat-burger.jpg',
  },
  {
    id: 8,
    category: 'Main',
    name: 'Pasta Carbonara',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',
    price: '$14.90',
    image: './img/pasta-carbonara.jpg',
  },
];

const createMenu = () => {
  menu.forEach((el, i) => {
    const img = document.createElement('img');
    img.src = el.image;
    console.log('Hello');
  });
};

window.addEventListener('load', createMenu);
