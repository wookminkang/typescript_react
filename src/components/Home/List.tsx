import '../../assets/scss/mainList.scss';
import { useEffect, useState } from 'react';
import { INGREDIENTS } from '../../constants/img';
import { Checkbox } from '@mui/material';
import { Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';
import { useAlertDialog } from '../../hooks/useAlertDialog';
import { useBottomSheet } from '../../hooks/useBottomSheet';
import { useNavigate } from 'react-router-dom';

interface ListItem {
  name: string;
  image: string;
  date: string;
}

const List = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlertDialog();
  const { showBottomSheet } = useBottomSheet();
  const [list, setList] = useState<ListItem[]>(INGREDIENTS);
  const [selectedList, setSelectedList] = useState<ListItem[]>([]);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const getList = async () => {};

  const handleSelect = (item: ListItem) => {
    if (selectedList.includes(item)) {
      setSelectedList(selectedList.filter((x) => x.name !== item.name));
    } else {
      setSelectedList([...selectedList, item]);
    }
  };

  const handleDelete = (item: ListItem) => {
    setList(list.filter((x) => x.name !== item.name));
  };

  const handleItemClick = (item: ListItem) => {
    showBottomSheet(
      item.name,
      `${item.name} 상세 정보`,
      <div style={{ padding: '16px 0' }}>
        <div
          onClick={() => handleDelete(item)}
          style={{
            padding: '16px',
            margin: '4px 0',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500',
            color: '#ff6b6b',
            transition: 'all 0.2s ease-in-out',
            backgroundColor: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 107, 107, 0.2)';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow =
              '0 2px 8px rgba(255, 107, 107, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          🗑️ 버리기
        </div>
        <div
          style={{
            padding: '16px',
            margin: '4px 0',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500',
            color: '#74b9ff',
            transition: 'all 0.2s ease-in-out',
            backgroundColor: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(116, 185, 255, 0.2)';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow =
              '0 2px 8px rgba(116, 185, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          📖 레시피
        </div>
        <div
          style={{
            padding: '16px',
            margin: '4px 0',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500',
            color: '#55a3ff',
            transition: 'all 0.2s ease-in-out',
            backgroundColor: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(85, 163, 255, 0.2)';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow =
              '0 2px 8px rgba(85, 163, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          ℹ️ 정보확인
        </div>
      </div>
    );
  };

  const deleteItem = () => {
    showAlert('삭제 확인', '정말 삭제하시겠습니까?', () => {
      setList(list.filter((item) => !selectedList.includes(item)));
      setSelectedList([]);
      setIsSelected(false);
    });
  };

  const handleAddItem = () => {
    navigate('/add');
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <div className="list-setting-container">
        <button
          onClick={() => {
            if (selectedList.length > 0) {
              setSelectedList([]);
              setIsSelected(false);
            } else {
              setIsSelected(true);
            }
          }}
        >
          {isSelected ? '취소' : '선택'}
        </button>
      </div>

      <div className="list-container">
        {list.map((item, index) => (
          <div
            key={index}
            className="list-item"
            onClick={() => {
              if (isSelected) {
                handleSelect(item);
              } else {
                handleItemClick(item);
              }
            }}
          >
            {selectedList.includes(item) && (
              <div className="list-item-check">
                <Checkbox
                  checked={selectedList.includes(item)}
                  sx={{ padding: 0, borderRadius: '50%' }}
                  id={item.name}
                />
              </div>
            )}

            <div
              className="list-item-image"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
          </div>
        ))}
      </div>

      <div className="list-setting-container bottom">
        <button onClick={handleAddItem}>
          <AddIcon />
        </button>

        <button disabled={selectedList.length === 0} onClick={deleteItem}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default List;
