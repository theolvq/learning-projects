// Components
import Header from './Header';
import Nav from './Nav';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';

//css
import 'normalize.css';
import './style.css';

Header();
Nav();

const menuLink = document.querySelector('#Menu');
const homeLink = document.querySelector('#Home');
const contactLink = document.querySelector('#Contact');

const resetPage = () => {
  const home = document.querySelector('#home');
  const menu = document.querySelector('#menu');
  const contact = document.querySelector('#contact');

  if (home) document.body.removeChild(home);
  if (menu) document.body.removeChild(menu);
  if (contact) document.body.removeChild(contact);
};

menuLink.addEventListener('click', () => {
  resetPage();
  Menu();
});
homeLink.addEventListener('click', () => {
  resetPage();
  Home();
});
contactLink.addEventListener('click', () => {
  resetPage();
  Contact();
});
