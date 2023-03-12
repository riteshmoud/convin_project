import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import { Edit } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function SampleCard() {

    const title = 'Most Affordable Apple Computer ! *Mac Mini M2*'
    const thumbnail_link = 'https://img.youtube.com/vi/8yr36ejdzMc/hqdefault.jpg'

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
          <IconButton aria-label="settings">
              <Edit/>
          </IconButton>
        }
        title={title}
      />
      <CardActions>
        <Button size="small" color="primary" variant='contained'>
          Watch Video
        </Button>
        <Button size="small" color="error" variant='contained'>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}