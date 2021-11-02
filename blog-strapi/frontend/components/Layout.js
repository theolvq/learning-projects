import Nav from './Nav';

const Layout = ({ children, categories, seo }) => (
  <>
    <Nav categories={categories} />
    {children}
  </>
);

export default Layout;
