// export default function CreateForm(){
//     return <h1>This is a createform</h1>
// }
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

    // const handleChange =(e) => {
    //     setAnimal({...animal, [e.target.name]: e.target.value})
    // }

    // checkbox
    const [isChecked, setIsChecked] = useState(false);
    const handleOnCheck = (e) => {
        setIsChecked(!isChecked);
        isChecked? setAnimal({...animal, reservedForAdoption:false})
        :setAnimal({...animal, reservedForAdoption:true})
        // setAnimal({...animal, reservedForAdoption:e.target.value})
      }

      //upload image
      const [file, setFile] = useState('');
      function handleFileChange(e) {
          console.log(e.target.files);
          setFile(URL.createObjectURL(e.target.files[0]));
          setAnimal({...animal, image:e.target.value})
      }

    return(
        <>
       <h2> Create a new animal profile</h2>
        <form
        onSubmit= {handleSubmit}>
            Name: <input placeholder="name" type="text" value={animal.name} onChange = {(e)=> {
                setAnimal({...animal, name: e.target.value})
            }}/>
            Species: <input placeholder="species" type="text" value={animal.species} onChange = {(e)=> {
                setAnimal({...animal, species: e.target.value})
            }}/>
            Images: <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" 
            value={animal.image}
            onChange={handleFileChange}/>
        
            ReservedForAdoption: <input type="checkbox" value={animal.reservedForAdoption} checked={isChecked}
            onChange={handleOnCheck} />
            <input type="submit" value='submit'/>
        </form>
        </>
    )
}