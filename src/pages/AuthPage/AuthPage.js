import LoginForm from '../../components/LoginForm/LoginForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import styles from './AuthPage.module.scss'
import {useState} from 'react'

export default function AuthPage(
    {
        setToken,
        setUser,
        signUp,
        login,
        user
    }
){
    
    const [showLogin, setShowLogin] = useState(true)
    
    return (
        <> 
        <button 
        onClick = {()=>{setShowLogin(!showLogin),setShowSignUp(!showSignUp)}}>{showLogin? 'PLEASE LOGIN': "Please create a new account"}</button>

        {
            showLogin?
             <LoginForm setToken={setToken} setUser={setUser} login={login} user={user} /> :
             <SignUpForm setToken={setToken} setUser={setUser} login={login} user={user} />
        }
        </>
    )
}