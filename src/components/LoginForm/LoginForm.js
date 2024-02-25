

import styles from './loginForm.module.scss'
import {useState, useEffect} from 'react'

export default function LoginForm(
    {
        setToken,
        setUser,
        login,
        user
    }

){
    const handleCredentials = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    return (
        <>
        <form className={styles.form}
        onSubmit={(e)=> {
            e.preventDefault() 
            login(user)}}>
        <input  className={styles.input}
        placeholder='email'
        type='text'
        name='email'
        value = {user.email}
        onChange = {handleCredentials}
        />
 
        <input  className={styles.input}
        placeholder='password'
        type='text'
        name='password'
        //value = {user.password}
        onChange = {handleCredentials}
        />
        <input  className={styles.input}
        type='submit' value='login as an existing user'/> 

        </form>

        </>
    )
}
