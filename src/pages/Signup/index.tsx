import './index.css';
import SubHeader from '../../components/Header/SubHeader';
import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  // 이름
  const [name, setName] = useState<string>('');
  // 성별
  const [gender, setGender] = useState<string>('male');
  // 주소
  const [address, setAddress] = useState<string>('');
  // 주소 찾기 팝업 열기 여부
  const [isOpenPost, setIsOpenPost] = useState<boolean>(false);
  // 상세주소
  const [addressDetail, setAddressDetail] = useState<string>('');
  // 연락처
  const [phone, setPhone] = useState<string>('');
  // 이메일
  const [email, setEmail] = useState<string>('');
  // 이메일 도메인
  const [emailDomain, setEmailDomain] = useState<string>('self');

  // 주소 찾기 완료
  const handleComplete = ({ address }: { address: string }) => {
    setAddress(address);
    setIsOpenPost(false);
  };

  // 주소 찾기 버튼 클릭
  const handleAddrFind = () => {
    setIsOpenPost(true);
  };

  // 필수 입력 항목 체크
  const checkMustFill = () => {
    if (
      name === '' ||
      gender === '' ||
      address === '' ||
      phone === '' ||
      email === ''
    ) {
      return false;
    }
    return true;
  };

  // 리셋
  const resetForm = () => {
    setName('');
    setGender('');
    setAddress('');
    setAddressDetail('');
    setPhone('');
  };

  // 저장 버튼
  const handleSave = () => {
    console.log(name, gender, address, phone, email, emailDomain);
    const userInfo = {
      name: name,
      gender: gender,
      address: address,
      addressDetail: addressDetail,
      phone: phone,
      email: email,
      emailDomain: emailDomain,
    };

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    resetForm();
    navigate('/');
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
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
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
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  checked={gender === 'male'}
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
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  checked={gender === 'female'}
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
              value={addressDetail}
              onChange={(e) => {
                setAddressDetail(e.target.value);
              }}
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
            <input
              type="text"
              placeholder="연락처를 입력해 주세요"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>

          {/* 이메일 */}
          <div className="form-item">
            <label htmlFor="email" className="title-label">
              이메일
            </label>
            <div className="email-container">
              <div className="email-container-item email-container-item-input">
                <input
                  type="text"
                  placeholder="이메일을 입력해 주세요"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              {emailDomain !== 'self' && (
                <>
                  <div className="email-container-item email-container-item-at">
                    @
                  </div>
                  <div className="email-container-item email-container-item-domain">
                    <input
                      type="text"
                      placeholder=""
                      value={emailDomain}
                      onChange={(e) => {
                        setEmailDomain(e.target.value);
                      }}
                    />
                  </div>
                </>
              )}

              <div className="email-container-item email-container-item-select">
                <select
                  name="email-domain"
                  id="email-domain"
                  value={emailDomain}
                  onChange={(e) => {
                    setEmailDomain(e.target.value);
                  }}
                >
                  <option value="self">직접입력</option>
                  <option value="naver.com">naver.com</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="daum.net">daum.net</option>
                </select>
              </div>
            </div>
          </div>

          {/* 저장 버튼 */}
          <div className="form-item">
            <button
              type="button"
              className="save-button"
              disabled={!checkMustFill()}
              onClick={handleSave}
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
