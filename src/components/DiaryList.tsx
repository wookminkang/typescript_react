import React from 'react';

interface DiaryItem {
  id: number;
  content: string;
}

interface DiaryListProps {
  items: DiaryItem[];
  onDelete: (id: number) => void;
}

const DiaryList: React.FC<DiaryListProps> = React.memo(({ items, onDelete }) => {
  return (
    <div className="list-container">
      {items.map((item) => (
        <div key={item.id} className="list-item">
          <div className="list-item-content"> {item.id} ::: {item.content}</div>
          <div className="list-item-button">
            <button>수정</button>
            <button onClick={() => onDelete(item.id)}>삭제</button>
          </div>
        </div>
      ))}
    </div>
  );
});

export default DiaryList; 