import './subHeader.css';
import FeatherIcon from 'feather-icons-react';

const SubHeader = () => {
  return (
    <div className="sub-header">
      <div className="sub-header-left-container">
        <FeatherIcon icon="chevron-left" size={26} color="#4882EA" />
      </div>
      <div className="sub-header-title">가입신청서</div>
    </div>
  );
};

export default SubHeader;
