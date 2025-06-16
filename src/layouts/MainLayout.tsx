import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import './MainLayout.css';

const MainLayout = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname.includes('/signup') ||
    location.pathname.includes('/login');

  return (
    <div className="layout">
      {isAuthPage ? <Header /> : <Header />}
      <main className={`main-content ${isAuthPage ? 'auth-page' : ''}`}>
        <div className="content-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
