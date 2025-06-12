import { useState } from 'react';
import type { Diary, DiaryFormData } from '../types/diary';
import './DiaryForm.css';

interface DiaryFormProps {
  initialData?: Diary;
  onSubmit: (data: Diary) => void;
  onCancel: () => void;
}

const DiaryForm = ({ initialData, onSubmit, onCancel }: DiaryFormProps) => {
  const [formData, setFormData] = useState<DiaryFormData>({
    date: initialData?.date || new Date().toISOString().split('T')[0],
    content: initialData?.content || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const diary: Diary = {
      id: initialData?.id || crypto.randomUUID(),
      ...formData,
      createdAt: initialData?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    onSubmit(diary);
  };

  return (
    <form className="diary-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="date">날짜</label>
        <input
          type="date"
          id="date"
          value={formData.date}
          onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          value={formData.content}
          onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
          required
          rows={10}
        />
      </div>

      <div className="form-actions">
        <button type="button" className="cancel-button" onClick={onCancel}>
          취소
        </button>
        <button type="submit" className="submit-button">
          {initialData ? '수정하기' : '저장하기'}
        </button>
      </div>
    </form>
  );
};

export default DiaryForm; 