import * as React from 'react';
import axios from 'axios';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DeleteForever from '@mui/icons-material/DeleteForever';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import Typography from '@mui/joy/Typography';
import { useNavigate } from 'react-router-dom';

export default function DeleteModal() {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate()

  const onDelete = async () => {
    const path = window.location.pathname.split('/')
    const id = parseInt(path[path.length-1])
    await axios.delete(`https://json-server-tpsw.onrender.com/videos/${id}`)
    .then((res)=>{
      console.log('Card Deleted');
      window.location.href = '/dashboard'
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <React.Fragment>
      <Modal open={open} onClose={() => {
        setOpen(false)
        navigate(-1)
        }}>
        <ModalDialog
          variant="outlined"
          role="alertdialog"
          aria-labelledby="alert-dialog-modal-title"
          aria-describedby="alert-dialog-modal-description"
        >
          <Typography
            id="alert-dialog-modal-title"
            component="h2"
            startDecorator={<WarningRoundedIcon />}
          >
            Confirmation
          </Typography>
          <Divider />
          <Typography id="alert-dialog-modal-description" textColor="text.tertiary">
            Are you sure you want to delete this card?
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', pt: 2 }}>
            <Button variant="plain" color="neutral" onClick={() => {
                setOpen(false)
                navigate(-1)}}>
              Cancel
            </Button>
            <Button variant="solid" color="danger" onClick={() => {
                onDelete()
                setOpen(false)}}>
              Delete
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}