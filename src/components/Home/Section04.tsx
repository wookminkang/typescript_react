// src/components/Home/Section04.tsx
import { useInView } from 'react-intersection-observer';

const Section04 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="section section04">
      {inView && (
        <div className="fade-in">
          section04
        </div>
      )}
    </div>
  );
};

export default Section04;