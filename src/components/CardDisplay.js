import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Card from './VideoCard'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

export const CardDisplay = () => {

    const [cards,updateCards] = useState([])
    const [imgLink,setImgLink] = useState('')
    const [isDeleted,setIsDeleted] = useState(false)

    useEffect(()=>{

        axios.get('https://json-server-tpsw.onrender.com/videos')
        .then((res)=>{
            console.log(res.data);
            updateCards(res.data)
            setIsDeleted(false)
        })
        .catch((err)=>{
            console.log(err);
        })

        
    },[isDeleted])

    const showCards = cards.map((item,idx)=>{
        return (
            <div key={item.id} className='m-6'>
                <Card id={item.id} title={item.name} link={item.link} thumbnail_link={item.thumbnail_link} category={item.category} isDeleted={setIsDeleted}/>
            </div>
        )
    })

    return (
        <div className='flex flex-col items-center bg-[#1A120B] min-h-screen'>
            <div className='flex flex-wrap'>
            {showCards}
            </div>
        </div>
    )
}
