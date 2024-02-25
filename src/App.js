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
    // const[animal, setAnimal] =useState({
    //     name: '',
    //     species:'',
    //     image:'',
    //     reservedForAdoption: false
    // })
    // const[animals, setAnimals] = useState([])

    //signup 
    const signUp = async(credentials) => {
        try {
            const response = await fetch('/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
            const data = await response.json()
            setUser(data.user)
            setToken(data.token)
            localStorage.setItem('token',data.token)
            localStorage.setItem('user',JSON.stringify(data.user))
        }catch(error){
            console.error(error)
        }  
    }

    //login 
    const login = async(credentials) => {
        try{
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
            const data = await response.json()
            setUser(data.user)
            setToken(data.token)
            localStorage.setItem('token',data.token)
            localStorage.setItem('user',JSON.stringify(data.user))
        } catch(error){
            console.error(error)
        } 
    }
     
    //createAnimal
    const createAnimal = async(animal, token) => {
        try{
            const response = await fetch('api/animals', {
                method:'POST',
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({...animal})
            })
            const newAnimal = await response.json()
            return newAnimal
            // const animalsCopy = [newAnimal, ...animals]
            // setAnimals(animalsCopy)
            // setAnimal({
            //     name: '',
            //     species:'',
            //     image:'',
            //     reservedForAdoption: false
            // })
        } catch(error){
            console.error(error)
        }
    }
    //updateAnimal
    const updateAnimal = async(id,updatedData,token) => {
        try{ 
            const response = await fetch(`/api/animals/${id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedData)
            })
            const updatedAnimal = await response.json()
            return updatedAnimal
            // const animalsCopy = [...animals]
            // const index = animalsCopy.findIndex(animal => animal._id === id)
            // // important 
            // animalsCopy[index] = {...animalsCopy[index], ...updatedData}
            // setAnimals(animalsCopy)


        } catch(error){
            console.error(error)
        }
    }
    //deleteAnimal
    const deleteAnimal = async(id,token) => {
        try{
            const response = await fetch(`/api/animals/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const foundAnimal= await response.json()
            return foundAnimal
            // const animalsCopy = [...animals]
            // const index = animalsCopy.findIndex(animal => animal._id === id)
            // animalsCopy.splice(index,1)
            // setAnimals(animalsCopy)

        } catch(error){
            console.error(error)
        }
    }
    //showAnimal
    const ShowAnimal = async(id) => {
        try{
            const response = await fetch(`/api/animals/${id}`)
            const data = await response.json()
            setAnimal(data)
        } catch(error){
            console.error(error)
        }
    }

    const getAllAnimals = async() => {
        try{
            const response = await fetch('/api/animals')
            const data = await response.json()
            return data
        } catch(error){
            console.error(error)
        }
    }


    return(
        <div>
            <Routes>
                <Route path="/register" element={<AuthPage user={user} setToken={setToken} setUser={setUser} signUp={signUp} login={login}/>}/>
                <Route path="/" element={<HomePage 
                user={user} 
                token={token}
                setUser={setUser}
                setToken={setToken}
                createAnimal={createAnimal}
                 getAllAnimals={getAllAnimals}
               />}/>
                <Route path="/animalpage/:id" element={<AnimalPage  token={token} updateAnimal={updateAnimal} deleteAnimal={deleteAnimal}/>}/>
            </Routes>
        </div>
    )
}