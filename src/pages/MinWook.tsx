import './MinWook.css';
import { useState } from 'react';
import WriteForm from '../components/WriteForm';


interface List {
  id: number;
  content: string;
}


export default function MinWook() {

  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState<List[]>([]);
  const [checked, setChecked] = useState(false);


  // 저장 
  const handleSave = (content: string) => {
    setList([...list, {id: list.length + 1, content: content}]);
  }

  // 취소
  const handleCancel = () => {
    setIsOpen(false);
  }

  // 삭제
  const handleDelete = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className="title">MinWook</div>
        <div className='button-container'>
          <button onClick={() => setIsOpen(true)}>작성하기</button>
        </div>
        <div className="content">
          <p>
            민욱일기장은 민욱이의 일기장입니다.
            <input type="checkbox" onChange={() => setChecked(!checked)} /> 체크박스 {checked ? '체크됨' : '체크안됨'}
          </p>

        {isOpen && (
          <WriteForm 
          onCancel={handleCancel} 
          onSave={handleSave} />
        )}

        <div className="list-container">
          {list.map((item) => (
            <div key={item.id} className="list-item">
              <div className="list-item-content"> {item.id} ::: {item.content}</div>
              <div className="list-item-button">
                <button>수정</button>
                <button onClick={() => handleDelete(item.id)}>삭제</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </> 
  )
}