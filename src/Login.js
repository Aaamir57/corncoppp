
import Footer from './Footer'
import Headerlogin from './Headerlogin'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    async function login() {
        if (!validateForm()) {
            return;
        }
       
        
       
    
        let item = { email, password };
    
        try {
            let result = await fetch("http://localhost:8000/api/login", {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            });
    
            result = await result.json();
            console.log("result", result);
    
            if (result['page'] === 'table1') {
                navigate("/dashboard")
            } else if (result['page'] === 'table2') {
                navigate("/landingpage")
            } else {
                alert("Your email or password is not correct.");
            }
        } catch (error) {
            console.error("There was an error:", error);
        }
    }
    const validateForm = () => {
        let valid = true;
    if (!email) {
        setEmailError("Please enter your email.");
        valid = false;
    } else if (!validateEmail(email)) {
        setEmailError("Please enter a valid email.");
        valid = false;
    } else {
        setEmailError("");
    }

  
    if (!password) {
        setPasswordError("Please enter a password.");
        valid = false;
    } else if (!/(?=.*[a-zA-Z])(?=.*\d).{6,}/.test(password)) {
       
        setPasswordError("Password must contain at least 1 letter, 1 number, and be at least 6 characters long.");
        valid = false;
    } else {
        setPasswordError("");
    }

    return valid;
};


    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    

    return (
        <div>
            <Headerlogin />
            <br />
            <div class="container-fluid text-center mmmm">
                <div class="row">

                    <div class="col-lg-6 main-div-left">
                        <br /><br />
                        <div class="signup-text">
                            <h1>Great to have you back!</h1>
                            <p>
                                You can sign in with your existing account.</p>
                        </div>
                        <div class="signup-images">
                            <img alt=' ' src="./media/10.svg" />


                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="main-div-right login-height ">
                            <div>
                                <h1>Continue Journey</h1>
                                <form>

                                    <div class="main-form-csss">
                                        <div class="form-csss   signupsellerform-cssss">
                                            <label>Email</label>
                                            <input type="email" name="" value={email} onChange={(e) => SetEmail(e.target.value)}   className={emailError ? 'error' : ''} />
                                            <p style={{ color: 'red' ,textAlign:'left'}}>{emailError}</p>
                                        </div>
                                        

                                    </div>



                                    <div class="main-form-csss ">
                                        <div class="form-csss  signupsellerform-cssss">
                                            <label>Password</label>
                                            <input type="password" name="" value={password} onChange={(e) => SetPassword(e.target.value)} className={passwordError ? 'error' : ''} />
                                            <p style={{ color: 'red' ,textAlign:'left'}}>{passwordError}</p>

                                        </div>
                                       

                                    </div>
                                    <div className='main-password signupsellerform-cssss'>
                                        <div>
                                            <p className='box-password'></p>
                                        </div>
                                        <div className='box1'>
                                            <h2> Remember password?</h2>
                                        </div>
                                        <div className='box2'>
                                            <h2>forgot password?</h2>

                                        </div>

                                    </div>

                                    <button class="main-div-right-button loginn" type='button' onClick={login}>Login</button>
                                    <div className='line-div'>
                                        <hr class="line" /><p>or</p><hr class=" line2" />
                                    </div>
                                    <span class="main-div-right-text">Continue signing in with</span>
                                    <div class="main-div-right-image">
                                        <img alt=' ' src="./media/4.svg" />
                                        <img alt=' ' src="./media/5.svg" />
                                        <img alt=' ' src="./media/6.svg" />
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Footer />





        </div>
    )
}
