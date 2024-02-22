import { useState, useEffect } from 'react'
import styles from './App.module.scss'
import {Route, Routes} from "react-router-dom"

import AuthPage from './pages/AuthPage/AuthPage'
import HomePage from './pages/HomePage/HomePage'
import AnimalPage from './pages/AnimalPage/AnimalPage'

export default function App(){
    return(
        <div>
            <Routes>
                <Route path="/register" element={<AuthPage/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/animalpage" element={<AnimalPage/>}/>
            </Routes>
        </div>
    )
}