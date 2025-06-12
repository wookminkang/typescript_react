import { useState, useEffect } from 'react';
import type { Diary } from '../types/diary';
import { getDiaries, saveDiary, deleteDiary } from '../utils/storage';
import DiaryForm from '../components/DiaryForm';
import './Diary.css';

const Diary = () => {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingDiary, setEditingDiary] = useState<Diary | undefined>();

  useEffect(() => {
    loadDiaries();
  }, []);

  const loadDiaries = () => {
    const loadedDiaries = getDiaries();
    setDiaries(loadedDiaries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
  };

  const handleSubmit = (diary: Diary) => {
    saveDiary(diary);
    loadDiaries();
    setIsFormOpen(false);
    setEditingDiary(undefined);
  };

  const handleEdit = (diary: Diary) => {
    setEditingDiary(diary);
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('정말로 이 일기를 삭제하시겠습니까?')) {
      deleteDiary(id);
      loadDiaries();
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
    return `${year}년 ${month}월 ${day}일 (${dayOfWeek})`;
  };

  return (
    <div className="diary-container">
      <div className="diary-header">
        <h1 className="diary-title">나의 일기장</h1>
        <button className="write-button" onClick={() => setIsFormOpen(true)}>
          새 일기 작성
        </button>
      </div>

      {isFormOpen && (
        <div className="diary-form-container">
          <DiaryForm
            initialData={editingDiary}
            onSubmit={handleSubmit}
            onCancel={() => {
              setIsFormOpen(false);
              setEditingDiary(undefined);
            }}
          />
        </div>
      )}

      <div className="diary-entries">
        {diaries.map((diary) => (
          <div key={diary.id} className="diary-entry">
            <div className="diary-date">
              <span className="date">{formatDate(diary.date)}</span>
              <div className="diary-actions">
                <button
                  className="edit-button"
                  onClick={() => handleEdit(diary)}
                >
                  수정
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(diary.id)}
                >
                  삭제
                </button>
              </div>
            </div>
            <p className="diary-content">{diary.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diary; 