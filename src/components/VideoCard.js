import React from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import { Edit } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import UpdateModal from './CardModal';
import { logDOM } from '@testing-library/react';


export default function VideoCard({id,title,link,thumbnail_link,category,isDeleted}) {

  const navigate = useNavigate()

  const onEdit = (e) => {
    navigate(`edit_card/${id}`)
  }

  const onWatch = async () => {
    let date = new Date()
    const day = date.getDate()
    const month = date.getMonth()+1
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    date = `${day}/${month}/${year}  ${hours}:${minutes}:${seconds}`
    await axios.post('http://localhost:3000/history',{
      name: title,
      video_id: id,
      link: link,
      category: category,
      time: date
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
    const linkArr = link.split('/')
    navigate(`watch/${linkArr[linkArr.length-1]}`)
  }

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={thumbnail_link}
          alt={title}
        />
      </CardActionArea>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={onEdit}>
              <Edit/>
          </IconButton>
        }
        title={title}
      />
      <CardActions>
        <Button size="small" color="primary" variant='contained' onClick={onWatch}>
          Watch Video
        </Button>
        <Button size="small" color="error" variant='contained' onClick={()=>navigate(`delete_card/${id}`)}>
          Delete
        </Button>
      </CardActions>
      <Outlet />
    </Card>
  );
}