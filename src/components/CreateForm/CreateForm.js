// export default function CreateForm(){
//     return <h1>This is a createform</h1>
// }
import styles from './CreateForm.module.scss'
import {useState} from 'react'
export default function CreateForm(
    {
        createAnimal
        //animals,
       // setAnimals,
       // token
    }
){
    const [animal, setAnimal] = useState(
        {
            name: '',
            species:'',
            image:'',
            reservedForAdoption: false
        }
    )

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await createAnimal(animal, localStorage.token)
            //await setAnimals([...animal, ...animals])
        } catch(error){
            console.error(error)
        }
    }


    // checkbox
    const [isChecked, setIsChecked] = useState(false);
    //console.log("onrender   ", isChecked)
    const handleOnCheck = (e) => {
        // if (isChecked) {
        //     console.log(isChecked)
        //     setIsChecked(false)
        //     console.log(isChecked)
        //     setAnimal({...animal, reservedForAdoption: false})
        // } else {
        //     console.log(isChecked)
        //     setIsChecked(true)
        //     console.log(isChecked)
        //     setAnimal({...animal, reservedForAdoption: true})
        // }

       // console.log("onhandle - before   ", isChecked)
        setIsChecked(!isChecked);
        setAnimal({...animal, reservedForAdoption:!isChecked})
       // console.log("onhandle - after   ", isChecked)

      }


      //upload image
      const [file, setFile] = useState('');
      function handleFileChange(e) {
          console.log(e.target.files);
          setFile(URL.createObjectURL(e.target.files[0]));
          setAnimal({...animal, image:file})
      }

     

    return(
        <div className={styles.body}>
       <h2> Create a new animal profile</h2>
        <form
        
        onSubmit= {handleSubmit}>
            <div className={styles.form}>
            Name: <input 
            className={styles.input}
            placeholder="name" type="text" value={animal.name} onChange = {(e)=> {
                setAnimal({...animal, name: e.target.value})
            }}/> 
            Species: <input 
            className={styles.input}
            placeholder="species" type="text" value={animal.species} onChange = {(e)=> {
                setAnimal({...animal, species: e.target.value})
            }}/>
            Image: <input 
            className={styles.input}
            type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" 
            onChange={handleFileChange}/>
        
           ReservedForAdoption: <input 
           className={styles.input}
           type="checkbox" value={animal.reservedForAdoption} checked={isChecked}
            onChange={handleOnCheck} />
           </div>
            <input
            className={styles.submit}
             type="submit" value='submit'/>
        </form>
        </div>
    )
}