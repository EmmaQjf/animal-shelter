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
        <div className={styles.body} > 
        <button className={styles.button}
        onClick = {()=>{console.log(showLogin); setShowLogin(!showLogin);console.log(showLogin)}}>
            {showLogin? 'Do not have an account? Please click to create one': 
            "Already have an account? Please click to log in"}</button>

        {
            showLogin?
             <LoginForm setToken={setToken} setUser={setUser} login={login} user={user} /> :
             <SignUpForm setToken={setToken} setUser={setUser} signUp={signUp} user={user} />
        }
        </div>
    )
}