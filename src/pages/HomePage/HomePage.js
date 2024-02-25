// export default function HomePage(){
//     return <h1>This is the Home Page</h1>
// }
import { useState, useEffect } from 'react'
import CreateForm from '../../components/CreateForm/CreateForm'
import Animals from '../../components/Animals/Animals'
import styles from './HomePage.module.scss'

export default function HomePage(
    {
        token,
        getAllAnimals,
        createAnimal,
        setToken,
        user
    }

){
    const[showCreateForm, setShowCreateForm] = useState(false)
    const[animals, setAnimals] = useState([])

    // update the animals State to show all the animals
    useEffect(()=>{
        const fetchAnimals = async()=> {
            try{
                const data = await getAllAnimals()
                setAnimals(data)
            } catch(error) {
                console.error(error)
            }
        }
        fetchAnimals()
    }, [])
    // keep the user logged in even though they refresh the page
    useEffect(()=> {
        if(localStorage.token && !token) {
            setToken(localStorage.getItem('token'))
            setShowCreateForm(true)
        }
        if(localStorage.token && localStorage.user && !user) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    })

    return(
        <>
        <h1>Welcome to the Animal Shelter</h1>
        {
            showCreateForm ? <CreateForm 
            createAnimal = {createAnimal}
            token ={token}
            //animals={animals}
           // setAnimals={setAnimals}
           /> : <></>
        }
        <Animals
        animals ={animals}/>
        </>
    )
}