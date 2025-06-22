import { useEffect, useState } from 'react';
import './index.scss';
import Intro from '../../components/Home/Intro';
import List from '../../components/Home/List';

const Home = () => {
  const [hasSeenIntro, setHasSeenIntro] = useState<boolean>(false);

  useEffect(() => {
    const introCheck = localStorage.getItem('introCheck');
    if (introCheck) {
      setHasSeenIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    localStorage.setItem('introCheck', 'true');
    setHasSeenIntro(true);
  };

  return (
    <>
      {hasSeenIntro ? (
        <>
          <List />
        </>
      ) : (
        <Intro onComplete={handleIntroComplete} />
      )}
    </>
  );
};

export default Home;
