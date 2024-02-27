// export default function Animals(){
//     return <h1>This is a list of all the animals</h1>
// }
import { Link } from 'react-router-dom'
import styles from './Animals.module.scss'

export default function Animals(
    animals
){

    return(
        <div>
        <h2>This is a list of all the animals</h2>
       
        <div className={styles.animalGrid}>
        { animals.animals.length? animals.animals.map((animal) => {
           
           return (
               <div className={styles.div} key = {animal._id}>
               <h3>{animal.name}</h3>
               <img src={animal.image} />
               <button ><Link to = {`/animalpage/${animal._id}`}>See more details</Link></button>
               </div>
           )
       }): 
            <>
            <h2>No animals yet... Add one in the form above</h2>
           </>
       }  
       </div>

        </div>
    )
}

