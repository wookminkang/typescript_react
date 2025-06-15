import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="welcome-section">
        <h1 className="welcome-title">나의 일기장에 오신 것을 환영합니다</h1>
        <div>
          <Link to="/signup">가입신청서 작성하기</Link>
        </div>

        <p className="welcome-text">
          당신의 생각과 감정을 자유롭게 표현해보세요. 매일의 소중한 순간들을
          기록하고 보관하세요.
        </p>
      </section>

      <div className="home-grid">
        <section className="home-card">
          <h2 className="card-title">오늘의 일기</h2>
          <div className="card-content">
            <p>아직 오늘의 일기를 작성하지 않으셨네요.</p>
            <button className="write-button">일기 작성하기</button>
          </div>
        </section>

        <section className="home-card">
          <h2 className="card-title">나의 기록</h2>
          <div className="card-content">
            <div className="stats">
              <div className="stat-item">
                <span className="stat-label">총 일기 수</span>
                <span className="stat-value">0</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">이번 달</span>
                <span className="stat-value">0</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
