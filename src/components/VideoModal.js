import React, { useEffect } from 'react'
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import { useNavigate } from 'react-router-dom';

export const VideoModal = () => {
    
    const [open, setOpen] = React.useState(true);
    const [link, setLink] = React.useState('');
    const navigate = useNavigate()

    useEffect(()=>{
        const pathArr = window.location.pathname.split('/')
        setLink(pathArr[pathArr.length-1])
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
        <div className='flex justify-center items-center'>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${link}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        </Modal>
    </React.Fragment>
  )
}
