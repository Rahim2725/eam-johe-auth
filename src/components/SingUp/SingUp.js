import React, { useState } from 'react';
import GoogleLogo from "../../images/google.svg";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SingUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }
    
    if(user){
        navigate('/shop')
    }
    const handleCreateUser = event  =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Your two  password didn't match")
            return;
        }
        if(password.length < 6){
            setError("Password must be 6 characters or langer ")
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                    <h1 className='form-title'>Sing Up</h1>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id=""  required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="ConfirmPassword"> Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" name="ConfirmPassword" id="" required/>
                    </div>  
                    <p style={{color : "red"}}>{error}</p>
                    <input className='login-button' type="submit" value="Sing Up" />
                </form>
                <p className='form-link-container'>Already Have an account ? <Link className='form-link' to="/login">Login</Link></p>
                <div className='or-container'>
                    <div></div><p>or</p><div></div>
                </div>

                <button onClick={signInWithGoogle} className='google-container'>
                    <img src={GoogleLogo} alt='' />
                    <p> Continue with Google </p>
                </button>
            </div>
        </div>
    );
};

export default SingUp;