import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'

export const Banner = () => {
  const navigate = useNavigate()
  return (
    <>
        <Typography variant='h1' gutterBottom>
            Create a video card in less than a minute
        </Typography>
        <div>
            <Button variant="contained" size='large' style={{backgroundColor: '#205295',color: '#FFFF00'}}onClick={()=>navigate('create_card')}>Create Now</Button>
        </div>
    </>
  )
}
