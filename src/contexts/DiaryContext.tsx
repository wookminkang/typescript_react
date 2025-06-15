import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DiaryItem {
  id: number;
  content: string;
}

interface DiaryContextType {
  items: DiaryItem[];
  addItem: (content: string) => void;
  deleteItem: (id: number) => void;
}

const DiaryContext = createContext<DiaryContextType | undefined>(undefined);

export function DiaryProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<DiaryItem[]>([]);

  const addItem = (content: string) => {
    setItems(prev => [...prev, { id: prev.length + 1, content }]);
  };

  const deleteItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <DiaryContext.Provider value={{ items, addItem, deleteItem }}>
      {children}
    </DiaryContext.Provider>
  );
}

export function useDiary() {
  const context = useContext(DiaryContext);
  if (context === undefined) {
    throw new Error('useDiary must be used within a DiaryProvider');
  }
  return context;
} 