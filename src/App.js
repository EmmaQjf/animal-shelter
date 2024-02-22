import { useState, useEffect } from 'react'
import styles from './App.module.scss'
import {Route, Routes} from "react-router-dom"

import AuthPage from './pages/AuthPage/AuthPage'
import HomePage from './pages/HomePage/HomePage'
import AnimalPage from './pages/AnimalPage/AnimalPage'

export default function App(){
    const [user, setUser] = useState(
        {
            email: '',
            password: '',
            name: ''
        }
    )
    const [token, setToken] = useState('')

    //signup 
    const signUp = async() => {
        try {
            const response = await fetch('/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            const data = await response.json()
            setUser(data.user)
            setToken(data.token)
            localStorage.setItem('token',data.token)
        }catch(error){
            console.error(error)
        }  
    }

    //login 
    const login = async() => {
        try{
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            const data = await response.json()
            setUser(data.user)
            setToken(data.token)
            localStorage.setItem('token',data.token)
        } catch(error){
            console.error(error)
        } 
    }


    return(
        <div>
            <Routes>
                <Route path="/register" element={<AuthPage user={user} setToken={setToken} setUser={setUser} signUp={signUp} login={login}/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/animalpage" element={<AnimalPage/>}/>
            </Routes>
        </div>
    )
}