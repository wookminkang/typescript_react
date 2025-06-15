import React, { useState } from 'react';


interface Item {
  id: number;
  title: string;
  content: string;
}

const MinwookWriteForm = ({ onSave }: { onSave: (item: Item) => void }) => {

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleSave = () => {
    onSave({ id: 0, title, content });
  }

  return (
    <>  
    {title}
    {content}
    <div className='write-form'>
      <div className='title-input'>
        <input type="text" placeholder='제목을 입력하세요.' onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='content-input'>
        <input type="text" placeholder='내용을 입력하세요.' onChange={(e) => setContent(e.target.value)} />
      </div>
      <div className='button-container'>
        <button onClick={handleSave}>저장</button>
      </div>
    </div>
    </>
  )
}

export default React.memo(MinwookWriteForm);

