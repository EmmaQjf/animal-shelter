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
        <div >
            <form className={styles.form}
            onSubmit = {(e)=>{signUp(user)}}>
        <input className={styles.input}
        placeholder='name'
        type='text'
        name='name'
        value = {user.name}
        onChange = {handleCredentials}
        />

        <input className={styles.input}
        placeholder='email'
        type='email'
        name='email'
        value = {user.email}
        onChange = {handleCredentials}
        />


        <input className={styles.input}
        placeholder='password'
        type='password'
        name='password'
        value = {user.password}
        onChange = {handleCredentials}
        />

        <input className={styles.input}
        type='submit' value='Sign Up'/>
        {/* <button className={styles.button}
        onClick={(e)=>{signUp(user)}} 
        > Sign Up</button> */}

        </form>
        </div>
    )
}
