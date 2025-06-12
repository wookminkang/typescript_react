import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <div className="content-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout; 