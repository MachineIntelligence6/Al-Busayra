import React from 'react';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';


const GenericModal = ({
  open,
  onClose,
  title,
  children,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '90%' : '80%',
    maxWidth: 800,
    maxHeight: '90vh',
    boxShadow: 24,
    borderRadius: 2,
    overflow: 'auto',
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      {/* <Box sx={modalStyle}> */}

        <Box id="modal-description" sx={modalStyle}>
          {children}
        </Box>
      {/* </Box> */}
    </Modal>
  );
};

export default GenericModal;

