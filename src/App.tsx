import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Diary from './pages/Diary';
import MyPage from './pages/MyPage';
import Notice from './pages/Notice';
import MinWook from './pages/MinWook';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="diary" element={<Diary />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="notice" element={<Notice />} />
            <Route path="minwook" element={<MinWook />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
