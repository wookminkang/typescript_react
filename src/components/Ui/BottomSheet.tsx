import { useEffect } from 'react';
import { Drawer, IconButton, Typography, Box, Divider } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import Portal from './Portal';

interface BottomSheetProps {
  isOpen: boolean;
  children: React.ReactNode;
  title?: string;
  onClose?: () => void;
}

const BottomSheet = ({
  isOpen,
  children,
  title,
  onClose,
}: BottomSheetProps) => {
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

  return (
    <Portal>
      <Drawer
        anchor="bottom"
        open={isOpen}
        onClose={onClose}
        PaperProps={{
          style: {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            maxHeight: '80vh',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              mb: 2,
              minHeight: 56,
              pt: 2,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 40,
                height: 4,
                bgcolor: 'grey.300',
                borderRadius: 2,
              }}
            />
            {title && (
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  mt: 1,
                }}
              >
                {title}
              </Typography>
            )}
            <IconButton
              onClick={onClose}
              sx={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ pb: 2 }}>{children}</Box>
        </Box>
      </Drawer>
    </Portal>
  );
};

export default BottomSheet;
