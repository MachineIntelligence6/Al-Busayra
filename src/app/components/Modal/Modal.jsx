import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";


function CustomModal({isOpen,setIsOpen,children,style}) {
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style = {{padding:'0px'}}
      >
        <Box sx={style}>
            {children}
        </Box>
      </Modal>
    </div>
  );
}

export default CustomModal;
