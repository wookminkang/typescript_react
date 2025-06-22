import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAlertDialog } from './hooks/useAlertDialog';
import AlertDialog from './components/Ui/AlertDialog';
import BottomSheet from './components/Ui/BottomSheet';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Notice from './pages/Notice';
import MinWook from './pages/MinWook';
import Diary from './pages/Diary';
import Signup from './pages/Signup';
import Add from './pages/Add/index';
import './App.css';
import './styles/main.scss';
import './styles/pages.scss';
import './styles/form.scss';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { useBottomSheet } from './hooks/useBottomSheet';

function App() {
  const alertDialog = useAlertDialog();
  const bottomSheet = useBottomSheet();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="diary" element={<Diary />} />
            <Route path="notice" element={<Notice />} />
            <Route path="minwook" element={<MinWook />} />
            <Route path="minwook1" element={<MinWook />} />

            <Route path="add" element={<Add />} />
          </Route>
        </Routes>

        {/* 전역 AlertDialog */}
        <AlertDialog
          isOpen={alertDialog.alertState.isOpen}
          title={alertDialog.alertState.title}
          content={alertDialog.alertState.content}
          onClose={alertDialog.hideAlert}
          onConfirm={alertDialog.handleConfirm}
        />
        {/* 전역 BottomSheet */}
        <BottomSheet
          isOpen={bottomSheet.isOpen}
          title={bottomSheet.title}
          children={bottomSheet.children}
          onClose={bottomSheet.hideBottomSheet}
        />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
