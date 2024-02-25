// export default function UpdateForm(){
//     return <h1>This is the UPDATE FORM</h1>
// }

import {useState, useEffect} from 'react'
import styles from './UpdateForm.module.scss'
export default function UpdataForm(
    {
        animal,
        updateAnimal,
        //setShowUpdateForm
        setShowAnimal
    }
){
    const[formData, setFormData] = useState({
        name: '',
        species:'',
        image:'',
        reservedForAdoption: "false"
    })
    
    useEffect(()=>{
        setFormData(animal)
    },[])
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

     //upload image
     const [file, setFile] = useState('');
     function handleFileChange(e) {
         console.log(e.target.files);
         setFile(URL.createObjectURL(e.target.files[0]));
         setFormData({...formData, image:e.target.value})
     }

        // checkbox
    const [isChecked, setIsChecked] = useState(false);
    const handleOnCheck = (e) => {
        setIsChecked(!isChecked);
        setFormData({...formData, reservedForAdoption:!isChecked})
      }


      const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await updateAnimal(animal._id,formData,localStorage.token)
            //setShowUpdateForm(false)
            setShowAnimal(true)
        } catch(error){
            console.error(error)
        }
    }
    console.log(animal)
    console.log(formData)

    return (
        <>
        <h1>This is the UPDATE FORM</h1>
        <form className={styles.form}
        onSubmit ={handleSubmit}>
            <input className={styles.input} type='text' name='name' spaceholder='name' value={formData.name}
            onChange={handleChange}/>
            <input className={styles.input} type='species' name='species' spaceholder='species' value={formData.species}
            onChange={handleChange}/>
            {/* <input input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" 
            value={formData.image}
            onChange={handleFileChange}/> */}
            ReservedForAdoption: <input className={styles.input}type="checkbox" value={formData.reservedForAdoption} checked={isChecked}
            onChange={handleOnCheck} />
            <input className={styles.submit}type="submit" value='submit'/>

        </form>

        </>
    )
}
