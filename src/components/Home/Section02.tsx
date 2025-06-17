import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../api/axios';


interface Item {
  type: string;
  achieveCnt: number;
  playerInfo: {
    area: string;
    areaCode: number;
    areaGroup: string;
    areaGroupCode: number;
    clubName: string;
    count: number | null
    courseName: string;
    genderType: number;
    gradeType: number;
    hole: number;
    memIdx: number;
    name: string;
    par: number;
    plyrIdx: number;
    profileImg: string;
    type: string;
    userName: string;
  }[]
}





const Section02 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  

  const { data: list, isLoading, error, refetch } = useQuery({
    queryKey: ['list'],
    queryFn: async () => {
      const res = await axiosInstance.get('personal/home/newRecord');
      console.log(res.data.data);
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

          <div className="i">
            {list?.map((item: Item) => (              
                <>
                  {
                    item.playerInfo.length > 0 && (
                      <div className="item-list">
                       {item.playerInfo.map((player: Item['playerInfo'][0]) => (
                        <div className="item">

                          <div className="item-type"> {item.type} {player?.count > 1 ? `${player.count}회` : `1회`}</div>
                          <div className="player-info-name">
                            <div className="player-info-img">
                              <img src={`//image.smartscore.kr/${player.profileImg}`} alt={player.userName} />
                            </div>
                            <div className="player-info-name-text">
                              {player.nickName}
                            </div>
                          </div>                      
                          <div className="player-info-score">                            
                            <div className="player-info-score-text">
                              {player.area}                               
                            </div>
                            <div className="player-info-score-text">
                              {player.courseName}
                            </div>
                            <div className="player-info-score-text">
                              
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                }
                </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Section02;