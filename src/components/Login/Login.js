import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogo from "../../images/google.svg";
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, user2] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    
    if (user || user2) {
        navigate(from, {replace : true})
    }

    const handleLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }


    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleLogin}>
                    <h1 className='form-title'>Login</h1>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: "red" }}>{error?.massage}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='login-button' type="submit" value="Login" />
                </form>
                <p className='form-link-container'>New to Ema-john? <Link className='form-link' to="/singUp">Create New Account</Link></p>
                <div className='or-container'>
                    <div></div><p>or</p><div></div>
                </div>

                <button onClick={() => signInWithGoogle()} className='google-container'>
                    <img src={GoogleLogo} alt='' />
                    <p> Continue with Google </p>
                </button>
            </div>
        </div>

    );
};

export default Login;