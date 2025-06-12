import type { Diary } from '../types/diary';

const STORAGE_KEY = 'diary_entries';

export const getDiaries = (): Diary[] => {
  const diaries = localStorage.getItem(STORAGE_KEY);
  return diaries ? JSON.parse(diaries) : [];
};

export const saveDiary = (diary: Diary): void => {
  const diaries = getDiaries();
  const existingIndex = diaries.findIndex(d => d.id === diary.id);
  
  if (existingIndex >= 0) {
    diaries[existingIndex] = diary;
  } else {
    diaries.push(diary);
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(diaries));
};

export const deleteDiary = (id: string): void => {
  const diaries = getDiaries();
  const filteredDiaries = diaries.filter(diary => diary.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredDiaries));
};

export const getDiaryById = (id: string): Diary | undefined => {
  const diaries = getDiaries();
  return diaries.find(diary => diary.id === id);
}; 