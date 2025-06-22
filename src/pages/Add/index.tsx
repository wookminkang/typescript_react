import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  ArrowBack as ArrowBackIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import { TextField } from '@mui/material';
import '../../assets/scss/add.scss';

import { INGREDIENTS } from '../../constants/img';

interface ListItem {
  name: string;
  image: string;
  date: string;
}

const Add = () => {
  const [search, setSearch] = useState<string>('');
  const [list, setList] = useState<ListItem[]>(INGREDIENTS);

  const navigate = useNavigate();

  return (
    <>
      <div className="add-header">
        <button onClick={() => navigate('/')}>
          <ArrowBackIcon />
        </button>
      </div>

      <div className="add-container">
        <div className="search-container">
          <TextField
            placeholder="검색"
            fullWidth
            sx={{
              backgroundColor: '#1a1a1a',
              borderRadius: '10px',
              '& .MuiInputBase-input': {
                color: '#fff',
              },
            }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon
            sx={{ color: '#fff', position: 'absolute', right: 10, top: 17 }}
          />
        </div>

        <div className="search-result-container">
          {list.map((item) => (
            <div className="search-result-item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div className="search-result-item-name">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Add;
