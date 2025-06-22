import { useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';
import Portal from './Portal';

interface ConfirmProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
  type?: 'danger' | 'warning' | 'info';
}

const Confirm = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = '확인',
  cancelText = '취소',
  type = 'info',
}: ConfirmProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const getConfirmButtonColor = () => {
    switch (type) {
      case 'danger':
        return 'error';
      case 'warning':
        return 'warning';
      default:
        return 'primary';
    }
  };

  return (
    <Portal>
      <Dialog
        open={isOpen}
        onClose={onCancel}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: 8,
          },
        }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Typography>{message}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="inherit">
            {cancelText}
          </Button>
          <Button
            onClick={onConfirm}
            variant="contained"
            color={getConfirmButtonColor()}
          >
            {confirmText}
          </Button>
        </DialogActions>
      </Dialog>
    </Portal>
  );
};

export default Confirm;
