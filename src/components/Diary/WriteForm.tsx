import './WriteForm.css';
import { useState, useEffect } from 'react';

interface Item {
  id: number;
  title: string;
  content: string;
}

const WriteForm = ({
  save,
  details,
  cancel,
}: {
  save: (item: Item) => void;
  details: Item;
  cancel: () => void;
}) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    setTitle(details.title);
    setContent(details.content);
  }, [details]);

  // 저장하기
  const handleSave = () => {
    if (title === '' || content === '') {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    const item = {
      id: details.id > 0 ? details.id : new Date().getTime(),
      title,
      content,
    };
    setTitle('');
    setContent('');
    save(item);
  };

  // 취소하기
  const handleCancel = () => {
    cancel();
  };

  return (
    <>
      <div className="title">WriteForm</div>

      {details.id > 0 && (
        <>
          <div>id: {details.id}</div>
          <div>title: {details.title}</div>
          <div>content: {details.content}</div>
        </>
      )}

      <div className="form-container">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-title"
          placeholder="제목"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="input-content"
          placeholder="내용"
        />
        <div className="button-container">
          <button className="cancel-button" onClick={handleCancel}>
            취소
          </button>
          <button className="save-button" onClick={handleSave}>
            저장
          </button>
        </div>
      </div>
    </>
  );
};

export default WriteForm;
