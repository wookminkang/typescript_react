import { useState } from 'react';

interface WriteFormProps {
  onCancel: () => void;
  onSave: (content: string) => void;
}

const WriteForm = (props: WriteFormProps) => {

  const [content, setContent] = useState<string>('');


  const handleSave = () => {
    props.onSave(content);
    setContent('');
  }

  return (
    <div className="write-form">
      <div className="write-form-content">
        <textarea 
        onChange={(e) => setContent(e.target.value)}
        value={content}
        placeholder="내용을 입력하세요" />
        <button onClick={handleSave}>저장</button>
        <button onClick={props.onCancel}>취소</button>
      </div>
    </div>
  )
}

export default WriteForm;