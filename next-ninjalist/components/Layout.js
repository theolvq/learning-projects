import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className='content'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
