import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Portal from './Portal';

interface AlertDialogProps {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
  onConfirm: () => void;
}

const AlertDialog = ({
  isOpen,
  title,
  content,
  onClose,
  onConfirm,
}: AlertDialogProps) => {
  return (
    <Portal>
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="inherit">
            취소
          </Button>
          <Button
            onClick={onConfirm}
            variant="contained"
            color="primary"
            autoFocus
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </Portal>
  );
};

export default AlertDialog;
