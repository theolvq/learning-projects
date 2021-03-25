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

menuLink.addEventListener('click', Menu);
// homeLink.addEventListener('click', Home);
// contactLink.addEventListener('click', Contact);
