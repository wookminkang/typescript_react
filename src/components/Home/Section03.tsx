// src/components/Home/Section03.tsx
import { useInView } from 'react-intersection-observer';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../api/axios';
import { useEffect } from 'react';

interface LeagueStatus {
  id: number;
  name: string;
  status: string;
}


const Section03 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { data, isLoading, error, refetch } = useQuery<LeagueStatus>({
    queryKey: ['leagueStatus'],
    queryFn: async () => {
      const response = await axiosInstance.get('/personal/home/league/status');
      return response.data;
    },
    enabled: false,
  });

  useEffect(() => {
    if (inView) {
      refetch();
    }
  }, [inView, refetch]);

  return (
    <div ref={ref} className="section section03">
      {inView && (
        <>
         
          {!isLoading && (
            <div className="fade-in">
              {error ? (
                <div className="error-message">에러가 발생했습니다</div>
              ) : (
                <div className="league-status">
                  <h2>리그 상태</h2>
                  <p>리그명: {data?.name}</p>
                  <p>상태: {data?.status}</p>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Section03;