export interface Diary {
  id: string;
  date: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface DiaryFormData {
  date: string;
  content: string;
} 