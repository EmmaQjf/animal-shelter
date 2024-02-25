
import { useParams } from "react-router-dom"
import{ useState, useEffect } from 'react'
import Animal from '../../components/Animal/Animal'
import UpdateForm from '../../components/UpdateForm/UpdateForm'

export default function AnimalPage(
    {
        deleteAnimal,
        updateAnimal
    }
){
    
    const [animal, setAnimal]= useState({
        name: '',
        species:'',
        image:'',
        reservedForAdoption: "false"
    })

    // useEffect(()=>{
    //     const fetchAnimal = async()=> {
    //         try{
    //             const data = await getAnimalDetails()
    //             setAnimal(data)
    //         } catch(error) {
    //             console.error(error)
    //         }
    //     }
    //     fetchAnimal()
    // }, [])

    //   const getAnimalDetails= async() => {
    //       try {
    //           const response = await fetch(`/api/animals/${params.id}`)
    //           const data= await response.json()
    //           return data
    //       }  catch(error){
    //           console.error(error)
    //       } 
    //      }
    

    useEffect(() => {
        getAnimalDetails()
     },[])

  
     const params= useParams()

   
     // refill the from with the data
     // get to the backend to retrieve the data
     const getAnimalDetails= async() => {
      try {
          let data = await fetch(`/api/animals/${params.id}`)
          data = await data.json()
          setAnimal(data)
      }  catch(error){
          console.error(error)
      } 
     }
     console.log(animal)

     const [showAnimal, setShowAnimal] = useState(true)
    return (
        <>
        {
            showAnimal? <Animal 
            animal={animal}
            deleteAnimal={deleteAnimal}
            updateAnimal={updateAnimal}
            setShowAnimal={setShowAnimal}
            /> 
            : 
            <UpdateForm
            animal={animal}
            updateAnimal={updateAnimal}
            setShowAnimal={setShowAnimal} />
        }
        </>
    )
}