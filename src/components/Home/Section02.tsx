import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../api/axios';


const Section02 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  

  const { data: list, isLoading, error, refetch } = useQuery({
    queryKey: ['list'],
    queryFn: async () => {
      const res = await axiosInstance.get('personal/home/newRecord');
      return res.data.data;
    },
    enabled: false,
  });

  useEffect(() => {

    // 스크롤로 인한 inView 변경일 때만 실행
    if (inView) {
      console.log('Section02가 스크롤로 화면에 보입니다!');
      refetch();
    }
  }, [inView]);

  return (
    <div ref={ref} className="section section02">
      {inView && (
        <div className="section02-content">
          <img src="//image.smartscore.kr/releague/releague_thisYearEventRecord_tit.png" />
          <div className="item-list">
            <div className="item">
              <div className="item-text"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section02;