import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Layout.css';

const Layout = () => (
  <>
    <header className="header">
      <h1 className="title">Bookstore CMS</h1>
      <Navbar />
    </header>

    <main className="content">
      <Outlet />
    </main>
  </>
);

export default Layout;
