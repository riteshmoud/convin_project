import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import axios from 'axios'

const CreateCard = ({name,link,category,thumbnail_link}) => {
    const navigate = useNavigate()
    console.log(name,link,category);
    let data = {
        name: name,
        link: link,
        category: category,
        thumbnail_link: thumbnail_link
    }

    const [cardDetails,changeCardDetails] = useState(data)

    useEffect(()=>{
        changeCardDetails({
            name,
            link,
            category,
            thumbnail_link
        })
    },[name,link,category])

    const createCard = async () => {
        //console.log(cardDetails);

        // form validation here--------
        // check for empty felds-------

        const link = cardDetails.link.split('https://youtu.be/')
        const video_id = link[1]
        const imgLink = `https://img.youtube.com/vi/${video_id}/hqdefault.jpg`

        if(window.location.pathname === '/create_card'){
            await axios.post('http://localhost:3000/videos',{
                name: cardDetails.name,
                link: cardDetails.link,
                category: cardDetails.category,
                thumbnail_link: imgLink
            })
            .then((res)=>{
                console.log('Data Added');
                changeCardDetails({ name: "", link: "", category: ""})
                navigate('/dashboard')
            })
            .catch((err)=>{
                console.log('Error occured');
            })
        }
        const path = window.location.pathname.split('/')
        const id = parseInt(path[path.length-1])
        if(window.location.pathname === `/dashboard/edit_card/${id}`){
            console.log('hello');
            await axios.put(`http://localhost:3000/videos/${id}`,{
                name: cardDetails.name,
                link: cardDetails.link,
                category: cardDetails.category,
                thumbnail_link: imgLink
            })
            .then((res)=>{
                console.log('Data Updated');
                changeCardDetails({ name: "", link: "", category: ""})
                window.location.href = '/dashboard'
            })
            .catch((err)=>{
                console.log('Error occured');
            })
        }

    }

    const onCardDetailsChange = (e) => {
        const {id,value} = e.target
        changeCardDetails({...cardDetails,[id]:value})
    }
    return(
        // <div className='min-h-screen flex justify-center items-center bg-gray-300'>
            <div className='lg:w-[500px] bg-blue-300 p-10 rounded-2xl'>
                <form className='p-6 rounded-2xl bg-white'>
                    <div className='text-center'>
                        <Typography variant='h4' gutterBottom>
                            Let's build it!
                        </Typography>
                    </div>
                    <div>
                        <div className='mt-4 mb-4'>
                            <TextField id="name" label="Card Name" variant="outlined" fullWidth value={cardDetails.name} onChange={onCardDetailsChange}/>
                        </div>
                        <div className='mt-4 mb-4'>
                            <TextField id="link" label="Link" variant="outlined" fullWidth value={cardDetails.link} onChange={onCardDetailsChange}/>
                        </div>
                        <div className='mt-4 mb-4'>
                            <TextField id="category" label="Category" variant="outlined" fullWidth value={cardDetails.category} onChange={onCardDetailsChange}/>
                        </div>
                        <div className='flex justify-center mt-4 mb-4'>
                            {/* <Button variant="outlined" size='medium' sx={{
                                ml: 1,
                                mr: 1
                            }} onClick={()=>navigate(-1)}>Go Back</Button> */}
                            <Button variant="contained" size='medium' sx={{
                                ml: 1,
                                mr: 1
                            }} onClick={createCard}>Done</Button>
                        </div>
                    </div>
                </form>
            </div>
        // </div>
    )

}

export default CreateCard