// export default function Animal(props) {
//     return <h1>This is the individual Animal</h1>
// }
//import UpdateForm from '../../components/UpdateForm/UpdateForm'
import styles from './Animal.module.scss'
import {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'
export default function Animal(
    {animal,
    deleteAnimal,
    updateAnimal,
    setShowAnimal}
){
    console.log(animal)
    // const [showUpdateForm, setShowUpdateForm] = useState(false) 
    const answer = animal.reservedForAdoption? "yes": "no"
    return (
        <>
        <div>
        <h3>Name: {animal.name}</h3>
        <h3>species: {animal.species}</h3>
        <img src={animal.image} />
        <h3>reservedForAdoption: {answer} </h3>
        <button className={styles.button} onClick={(e)=> deleteAnimal(animal._id, localStorage.token)}>Delete Me</button>
        <button className={styles.button}  onClick={(e)=> {
            // setShowUpdateForm(!showUpdateForm)
            setShowAnimal(false)
        }}>Update Me</button>
        </div>

       {/* <div>
        {
            showUpdateForm?
             <UpdateForm 
             animal={animal}
             updateAnimal={updateAnimal}
             setShowUpdateForm ={setShowUpdateForm}
            />: <></>
        }
        </div> */}
        </>

    )
}
