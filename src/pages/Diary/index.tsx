import './index.css';
import { useState } from 'react';
import WriteForm from '../../components/Diary/WriteForm';
import List from '../../components/Diary/List';
import FeatherIcon from 'feather-icons-react';

interface Item {
  id: number;
  title: string;
  content: string;
}

const Diary = () => {
  const [setting, setSetting] = useState<boolean>(false);
  const [list, setList] = useState<Item[]>([]);
  const [editItem, setEditItem] = useState<Item>({
    id: 0,
    title: '',
    content: '',
  });

  const handleSave = (item: Item) => {
    if (editItem.id > 0) {
      setList(list.map((i) => (i.id === editItem.id ? item : i)));
    } else {
      setList([...list, { ...item }]);
    }
  };

  const handleSetting = () => {
    setSetting((prev) => !prev);
  };

  const handleEdit = (id: number) => {
    if (id) {
      const filter = list.find((item) => item.id === id);
      if (filter) {
        setEditItem(filter);
        setSetting(true);
      }
    }
  };

  const handleDelete = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleCancel = () => {
    setSetting(false);
  };

  const handleSelectedListRemove = (id: number[]) => {
    const newList = list.filter((item) => !id.includes(item.id));
    setList(newList);
  };

  return (
    <>
      <div className="title">
        일일업무보고 작성하기 <FeatherIcon icon="trash-2" size={20} />
      </div>
      <button className="setting-button" onClick={handleSetting}>
        {setting ? '닫기' : '추가'}
      </button>

      {setting && (
        <WriteForm save={handleSave} details={editItem} cancel={handleCancel} />
      )}

      <List
        list={list}
        edit={handleEdit}
        onDelete={handleDelete}
        selectedList={handleSelectedListRemove}
      />
    </>
  );
};

export default Diary;
