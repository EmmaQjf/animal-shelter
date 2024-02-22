import styles from './SignUpForm.module.scss'

export default function SignUpForm(
    {
        setToken,
        setUser,
        signup,
        user
    }

){
    return (
        <>
        <input 
        placeholder='name'
        type='text'
        value = {user.name}
        onChange = {(e) => {
            setUser({...user, name:e.target.value})
        }}
        />

        <input 
        placeholder='email'
        type='text'
        value = {user.email}
        onChange = {(e) => {
            setUser({...user, email:e.target.value})
        }}
        />


        <input 
        placeholder='password'
        type='text'
        value = {user.password}
        onChange={(e) => {
            setUser({...user, password: e.target.value})
        }}
        />

        <button
        onClick={signup} 
        > Sign Up</button>

        </>
    )
}
