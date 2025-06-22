import { useAlertDialog } from '../../hooks/useAlertDialog';

const Section01 = () => {
  const { showAlert } = useAlertDialog();

  const handleAlertClick = () => {
    showAlert('알림', 'AlertDialog가 열렸습니다!', () => {
      console.log('AlertDialog 확인됨');
    });
  };

  const handleSaveClick = () => {
    showAlert('저장 완료', '데이터가 성공적으로 저장되었습니다.', () => {
      console.log('저장 완료 처리');
    });
  };

  const handleDeleteClick = () => {
    showAlert('삭제 확인', '정말 삭제하시겠습니까?', () => {
      console.log('삭제 처리');
    });
  };

  return (
    <div className="section section01">
      <button onClick={handleAlertClick}>AlertDialog 열기</button>
      <button onClick={handleSaveClick}>저장 완료 알림</button>
      <button onClick={handleDeleteClick}>삭제 확인</button>
    </div>
  );
};

export default Section01;
