import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/';
import Notice from './pages/Notice';
import MinWook from './pages/MinWook';
import Diary from './pages/Diary';
import Signup from './pages/Signup/';
import './styles/main.scss';
import './styles/pages.scss';
import './styles/form.scss';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="diary" element={<Diary />} />
            <Route path="notice" element={<Notice />} />
            <Route path="minwook" element={<MinWook />} />
            <Route path="minwook1" element={<MinWook />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
