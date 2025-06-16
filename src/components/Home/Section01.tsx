import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../api/axios';

interface LeagueStatus {
  totalPlayer: number;
  totalTeam: number;
  regularLg: number;
  playOffLg: number;
  finalLg: boolean
} 

const Section01 = () => {

  const { data: leagueStatus, isLoading, error } = useQuery<LeagueStatus>({
    queryKey: ['leagueStatus'],
    queryFn: async () => {
      const res = await axiosInstance.get('/personal/home/league/status');
      console.log(res.data.data);
      return res.data.data;
    }
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;

 

  return (
    <div className="section section01">
      <div className="section01-content">
        <img src="https://image.smartscore.kr/league/main/2025/league-main-2025-mens-title.png" />
        <div className="section01-content-text">
          <h2>
            현재까지 등록된 선수는 <br /> 
            <span>{leagueStatus?.totalPlayer}</span>명
          </h2>          
        </div>
        <img src="https://image.smartscore.kr/league/main/2025/league-main-2025-thumbnail.png" />
      </div>
    </div>
  );
};

export default Section01;