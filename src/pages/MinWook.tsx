import './MinWook.css';
import { useState } from 'react';
import MinwookWriteForm from '../components/MinwookWriteForm';
import MinwookList from '../components/MinwookLIst';

interface Item {
  id: number;
  title: string;
  content: string;
}


export default function MinWook() {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);


  const addItem = () => {
    setIsOpen((prev) => !prev);
  }

  const handleSave = (item: Item) => {
    console.log(item);
  }

  return (
    <>
      <div className="title">MinWook</div>
      <div className='button-container'>
        <button onClick={addItem}>{isOpen ? '닫기' : '작성하기'}</button>
      </div>
      <div className="content">
          {isOpen && <MinwookWriteForm onSave={handleSave} />}
      </div>


      <MinwookList list={items} />
    </>
  )

}