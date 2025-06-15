import { useState } from 'react';

interface WriteFormProps {
  onSave: (content: string) => void;
  onCancel: () => void;
}

export default function WriteForm({ onSave, onCancel }: WriteFormProps) {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSave(content);
      setContent('');
      onCancel();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="write-form">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="일기를 작성해주세요..."
        className="write-textarea"
      />
      <div className="write-buttons">
        <button type="submit" className="save-button">저장하기</button>
        <button type="button" onClick={onCancel} className="cancel-button">취소</button>
      </div>
    </form>
  );
}