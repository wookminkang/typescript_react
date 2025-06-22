import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../api/axios';

interface List {
  type: string;
  achieveCnt: number;
  playerInfo: {
    area: string;
    areaCode: number;
    areaGroup: string;
    club: string;
    count: number;
    courseName: string;
    genderType: number;
    gradeType: number;
    hole: string | null;
    memIdx: number;
    nickName: string;
    par: number | null;
    plyrIdx: number;
    profileImg: string;
    type: string;
    userName: string;
  }[];
}

const Section02 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const {
    data: list,
    isLoading,
    error,
    refetch,
  } = useQuery<List[]>({
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
          <div className="item-list">
            {list?.map((item, index) => (
              <div key={index} className="item">
                <div className="item-text">
                  <div>타입: {item.type}</div>
                  <div>달성 횟수: {item.achieveCnt}</div>
                  <div>선수 정보:</div>

                  <div className="player-list">
                    {item.playerInfo.map((player, playerIndex) => (
                      <div key={playerIndex} className="player-item">
                        <div>이름: {player.userName}</div>
                        <div>닉네임: {player.nickName}</div>
                        <div>클럽: {player.club}</div>
                        <div>코스: {player.courseName}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Section02;
