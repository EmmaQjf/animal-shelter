export default function AnimalPage(){
    return <h1>This is an individual Animal Page</h1>
}
// import { useParams } from "react-router-dom"
// import{useState, useEffect} from 'react-router-dom'


// export default function AnimalPage(
//     {
//         deleteAnimal,
//         updateAnimal
//     }
// ){
//     const [animal, setAnimal]= useState({
//         name: '',
//         species:'',
//         image:'',
//         reservedForAdoption: false
//     }   )

//     useEffect(() => {
//         getAnimalDetails()
//      },[])
  
//      // refill the from with the data
//      // get to the backend to retrieve the data
//      const getAnimalDetails= async() => {
//       try {
//           let data = await fetch(`/api/animals/${params.id}`)
//           data = await data.json()
//           setAnimal(data)
//       }  catch(error){
//           console.error(error)
//       } 
//      }
//     const params= useParams()
//     return (
//         <>
//         <h3>Name: {animal.name}</h3>
//         <h3>species: {animal.speices}</h3>
//         <img src={animal.image} />
//         <h3>reservedForAdoption: {animal.reservedForAdoption}? Yes: No</h3>
//         <button onClick={(e)=> deleteAnimal(params.id)}>Delete Me</button>
//         <button onClick={(e)=> updateAnimal(params.id)}>Delete Me</button>
//         </>
//     )
// }

// need to revise the updateAnimal 