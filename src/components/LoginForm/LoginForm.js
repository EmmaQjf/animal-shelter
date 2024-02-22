

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
    return (
        <>
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
        onClick={login} 
        > Login </button>

        </>
    )
}
