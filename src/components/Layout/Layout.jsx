import { Outlet } from 'react-router-dom';
import { BiSolidUser } from 'react-icons/bi';
import Navbar from '../Navbar/Navbar';
import './Layout.css';

const Layout = () => (
  <>
    <header className="header">
      <div className="wrapper">
        <h1 className="title">Bookstore CMS</h1>
        <Navbar />
      </div>
      <BiSolidUser className="userIcon" />
    </header>

    <main className="content">
      <Outlet />
    </main>
  </>
);

export default Layout;
