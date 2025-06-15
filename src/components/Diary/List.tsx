import './List.css';
import { useState } from 'react';

interface Item {
  id: number;
  title: string;
  content: string;
}

const List = ({
  list,
  edit,
  onDelete,
  selectedList,
}: {
  list: Item[];
  edit: (id: number) => void;
  onDelete: (id: number) => void;
  selectedList: (id: number[]) => void;
}) => {
  const [checkedList, setCheckedList] = useState<number[]>([]);

  const handleEdit = (id: number) => {
    edit(id);
  };

  const handleDelete = (id: number) => {
    onDelete(id);
  };

  const handleCheck = (checked: boolean, id: number) => {
    if (checked) {
      setCheckedList((checkedList) => [...checkedList, id]);
    } else {
      setCheckedList((checkedList) =>
        checkedList.filter((item) => item !== id)
      );
    }
  };

  const handleCheckAll = (checked: boolean) => {
    if (checked) {
      setCheckedList(list.map((item) => item.id));
    } else {
      setCheckedList([]);
    }
  };

  const handleSelectDelete = () => {
    if (checkedList.length > 0) {
      selectedList(checkedList);
      setCheckedList([]);
    }
  };

  return (
    <>
      <div className="table-container">
        {checkedList.length > 0 && (
          <div className="button-container table-button">
            <button className="delete-button" onClick={handleSelectDelete}>
              선택 삭제
            </button>
          </div>
        )}

        <div className="table-item">
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={checkedList.length === list.length}
                    onChange={(e) => handleCheckAll(e.target.checked)}
                  />
                </th>
                <th>번호</th>
                <th>제목</th>
                <th>내용</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              {list.length > 0 ? (
                list.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={checkedList.includes(item.id)}
                        onChange={(e) => handleCheck(e.target.checked, item.id)}
                      />
                    </td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.content}</td>
                    <td>
                      <button
                        className="edit-button"
                        onClick={() => handleEdit(item.id)}
                      >
                        수정
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(item.id)}
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5}>내용이 없습니다.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default List;
