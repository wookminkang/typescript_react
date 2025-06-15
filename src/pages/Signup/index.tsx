import './index.css';
import SubHeader from '../../components/Header/SubHeader';
import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

const Signup = () => {
  const [address, setAddress] = useState('');
  const [isOpenPost, setIsOpenPost] = useState(false);

  const handleComplete = ({ address }: { address: string }) => {
    setAddress(address);
    setIsOpenPost(false);

    console.log(address);
  };

  const handleAddrFind = () => {
    setIsOpenPost(true);
  };

  return (
    <div className="signup-container">
      <SubHeader />

      <div className="page-content-container">
        <p className="page-fixed-top-title">
          업무를 작성하기 위해 정보를 <br />
          입력해 주세요
        </p>

        <div className="form-container">
          {/* 이름 */}
          <div className="form-item">
            <label className="title-label" htmlFor="name">
              이름
            </label>
            <input
              type="text"
              autoComplete="off"
              placeholder="이름을 입력해 주세요"
            />
          </div>

          {/* 성별 */}
          <div className="form-item">
            <label htmlFor="name" className="title-label">
              성별
            </label>

            <div className="form-item-radio-container">
              <div className="form-item-radio-container-item">
                <input
                  type="radio"
                  id="gender-male"
                  name="gender"
                  value="male"
                />
                <label htmlFor="gender-male" className="form-item-radio-label">
                  남자
                </label>
              </div>
              <div className="form-item-radio-container-item">
                <input
                  type="radio"
                  id="gender-female"
                  name="gender"
                  value="female"
                />
                <label
                  htmlFor="gender-female"
                  className="form-item-radio-label"
                >
                  여자
                </label>
              </div>
            </div>
          </div>

          {/* 주소 */}
          <div className="form-item">
            <label htmlFor="address" className="title-label">
              주소
            </label>
            <div className="address-container">
              <input
                type="text"
                value={address}
                readOnly
                placeholder="주소를 입력해 주세요"
              />
              <button
                type="button"
                className="address-search-button"
                onClick={handleAddrFind}
              >
                주소 찾기
              </button>
            </div>
            <input
              type="text"
              placeholder="상세주소를 입력해 주세요"
              className="address-detail-input"
            />

            {/* 주소 찾기 모달 */}
            {isOpenPost && (
              <div className="post-modal">
                <div className="post-modal-content">
                  <DaumPostcode onComplete={handleComplete} />
                </div>
              </div>
            )}
          </div>

          {/* 연락처 */}
          <div className="form-item">
            <label htmlFor="phone" className="title-label">
              연락처
            </label>
            <input type="text" placeholder="연락처를 입력해 주세요" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
