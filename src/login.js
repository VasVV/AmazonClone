import React, {useState} from 'react';
import './login.css'
import Logo from './amazon-logo.png';
import {Link, useHistory} from 'react-router-dom';
import {db, auth} from './firebase';

export default function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false)

    const signIn = async(e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            history.push('/')
        } catch(err) {
            setErr(true)
        }


    }

    const register = async() => {
        try {
            await  auth.createUserWithEmailAndPassword(email, password);
            history.push('/')
        } catch(err) {
            setErr(true)
        }
   
    }
    return (
       
        <div className='login'>
            <Link to='/'>
                <img className='login-logo' src={Logo} />
            </Link>
        

        <div className='login-container'>
            <h1>Sign In</h1>
            {err && 'Something went wrong. Try again.'}
            <form className='login-form'>
                <h5>E-mail</h5>
                <input type='text' onChange={(e) => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' onChange={(e) => setPassword(e.target.value)} />

                <button type='submit' className='login-btn' onClick={(e) => signIn(e)}>Sign in</button>
            </form>
           <button className='login-register-btn' onClick={() => register()}>Create an account</button>
        </div>
        </div>
    )
}