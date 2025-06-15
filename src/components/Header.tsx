import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="nav-list">
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/diary">일일업무보고</Link>
          </li>


{/*           
          <li>
            <Link to="/diary">나의 일기장</Link>
          </li>
          <li>
            <Link to="/mypage">마이페이지</Link>
          </li>
          <li>
            <Link to="/notice">공지사항</Link>
          </li>
          <li>
            <Link to="/minwook">민욱일기장</Link>
          </li>
          <li>
            <Link to="/minwook1">민욱일기장1</Link>
          </li> */}
        </ul> 
      </nav>
    </header>
  );
};

export default Header; 