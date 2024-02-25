import styles from './SignUpForm.module.scss'

export default function SignUpForm(
    {
        setToken,
        setUser,
        signUp,
        user
    }

){
    const handleCredentials = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    return (
        <>
        <input 
        placeholder='name'
        type='text'
        name='name'
        value = {user.name}
        onChange = {handleCredentials}
        />

        <input 
        placeholder='email'
        type='email'
        name='email'
        value = {user.email}
        onChange = {handleCredentials}
        />


        <input 
        placeholder='password'
        type='password'
        name='password'
        value = {user.password}
        onChange = {handleCredentials}
        />

        <button
        onClick={(e)=>{signUp(user)}} 
        > Sign Up</button>

        </>
    )
}
