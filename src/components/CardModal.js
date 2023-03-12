import * as React from 'react';
import axios from 'axios';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import { useNavigate } from 'react-router-dom';
import CreateCard from './CreateCard';

const CardModal = () => {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate()
  let id
  let data = {
    name: '',
    link: '',
    category: '',
    thumbnail_link: ''
  }

  const [cardDetails,setCardDetails] = React.useState(data)

  React.useEffect(()=>{
      const path = window.location.pathname.split('/')
      const id = parseInt(path[path.length-1])
      if(id === undefined){
        return;
      }
      (async ()=>{
        await axios.get(`http://localhost:3000/videos/${id}`)
        .then((res)=>{
          setCardDetails({
            name: res.data.name,
            link: res.data.link,
            category: res.data.category,
            thumbnail_link: res.data.thumbnail_link
          })
        })
        .catch((err)=>{
          console.log(err);
        })
      })()
  },[])

  return (
    <React.Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => {
            setOpen(false)
            navigate(-1)
        }}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
              bgcolor: 'background.body',
            }}
          />
          <CreateCard name={cardDetails.name} link={cardDetails.link} category={cardDetails.category} thumbnail_link={cardDetails.thumbnail_link}/>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}

export default CardModal