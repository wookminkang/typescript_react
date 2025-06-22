import '../../assets/scss/intro.scss';
import { useEffect, useState } from 'react';

interface IntroProps {
  onComplete: () => void;
}

const Intro = ({ onComplete }: IntroProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPlaying(true);
      setIsComplete(true);
    }, 5100);
  }, []);

  return (
    <div className="intro-container">
      <video width="100%" height="auto" autoPlay muted playsInline>
        <source src="/intro.mp4" type="video/mp4" />
      </video>

      {isPlaying && (
        <>
          <div className={`intro-content ${isComplete ? 'complete' : ''}`}>
            <button onClick={onComplete}>냉장고 확인</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Intro;
