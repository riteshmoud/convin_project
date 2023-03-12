import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Banner } from './Banner'
import { CardDisplay } from './CardDisplay'
import CreateCard from './CreateCard'
import Home from './Home'
import CardModal from './CardModal'
import DeleteModal from './DeleteModal'
import { Navbar } from './Navbar'
import { VideoModal } from './VideoModal'
import { History } from './History'

const App = () => {
    return (
        <>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route path='create_card' element={<CardModal/>}/>
                </Route>
            </Routes>
            <Routes>
                <Route path='/dashboard' element={<Navbar/>}>
                    <Route path='' element={<CardDisplay/>}>
                        <Route path='delete_card/:id' element={<DeleteModal/>}/>
                        <Route path='watch/:link' element={<VideoModal/>}/>
                        <Route path='edit_card/:id' element={<CardModal/>}/>
                    </Route>
                </Route>
                <Route path='history' element={<History/>}/>
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default App