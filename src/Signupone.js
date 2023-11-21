import Header from './Header'
import Footer from './Footer'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Phone } from '@mui/icons-material';

export default function Signupone() {
    const[firstname,SetFirstName]=useState("");
    const[lastname,SetLastName]=useState("");
    const[password,SetPassword]=useState("");
    const[email,SetEmail]=useState("");
    const[confirmpassword,SetConfirmPassword]=useState("");
    const[source,SetSource]=useState("buyerseller");

   
    const [phone, SetPhone] = useState("0");
    const [houseno, SetHouseno] = useState("0");
    const [street, SetStreet] = useState("0");
    const [country, SetCountry] = useState("null");
    const [city, SetCity] = useState("null");
    const [companyname, SetCompanyname] = useState("null");
    const [ccompanyemail, SetCcompanyemail] = useState("null@gmail.com");
    const [creditcardno, SetCreditcardno] = useState("0");
    const [cardholdersname, SetCardholdersname] = useState("null");
    const [expirydate, SetExpirydate] = useState("0");
    const [ccv, SetCcv] = useState("null");

    const navigate=useNavigate();

    const [firstnameError, setFirstNameError] = useState("");
    const [lastnameError, setLastNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [confirmpasswordError, setConfirmPasswordError] = useState("");

 
    async function buyersignup() {
    
        if (!validateForm()) {
            return;
        }

        let item = {
            firstname, lastname, email, phone, houseno, source,
            street, country, city, companyname, ccompanyemail, creditcardno, cardholdersname, expirydate, ccv, password, confirmpassword
        };


        let result = await fetch("http://localhost:8000/api/buyersignup", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json();
        // console.log(result)
        // console.log(item)

        navigate("/")

       

    }
    const validateForm = () => {
        let valid = true;

        if (!firstname) {
            setFirstNameError("Please enter your first name.");
            valid = false;
        } else {
            setFirstNameError("");
        }

        if (!lastname) {
            setLastNameError("Please enter your last name.");
            valid = false;
        } else {
            setLastNameError("");
        }

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

        if (!confirmpassword) {
            setConfirmPasswordError("Please confirm your password.");
            valid = false;
        } else if (password !== confirmpassword) {
            setConfirmPasswordError("Passwords do not match.");
            valid = false;
        } else {
            setConfirmPasswordError("");
        }

        return valid;
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };
    return (
        <div>

            <Header />
            <input type="hidden" name=""  value={phone} onChange={(e)=>SetPhone (e.target.value)}/>
            <input type="hidden" name=""  value={companyname} onChange={(e)=>SetCompanyname (e.target.value)}/>
            <input type="hidden" name=""  value={country} onChange={(e)=>SetCountry (e.target.value)}/>
            

            <input type="hidden" name=""  value={ccv} onChange={(e)=>SetCcv (e.target.value)}/>
            <input type="hidden" name=""  value={city}onChange={(e)=> SetCity (e.target.value)}/>
            <input type="hidden" name=""  value={creditcardno} onChange={(e)=>SetCreditcardno (e.target.value)}/>
            <input type="hidden" name=""  value={cardholdersname}  onChange={(e)=>SetCardholdersname(e.target.value)}/>
            <input type="hidden" name=""  value={street} onChange={(e)=>SetStreet(e.target.value)}/>
            <input type="hidden" name=""  value={expirydate} onChange={(e)=>SetExpirydate(e.target.value)}/>
            <input type="hidden" name=""  value={houseno} onChange={(e)=>SetHouseno (e.target.value)}/>
            
            <input type="hidden" name=""  value={ccompanyemail} onChange={(e)=> SetCcompanyemail(e.target.value)}/>
            
            
            <div class="container-fluid text-center">
                <div class="row">
                    <div class="col-lg-6 main-div-left signupone">
                        <div class="signup-text">
                            <h1>Life Is Better<br />With AI</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing<br /> elit. At elementum eu facilisis sed odio morbi. Massa <br />vitae tortor condimentum lacinia quis vel.</p>
                        </div>
                        <div class="signup-images">
                            <img alt=' '  src="./media/2.png" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="main-div-right signup-height">
                            <div>
                                <h1>Join Our Venture</h1>
                                <form>
                                    <div class="main-form-css">
                                        <div class="form-css signupsellerform-css">
                                            <label>First name</label>
                                            <input type="hidden" name=""  value={source} onChange={(e)=>SetSource(e.target.value)}/>
                                            <input type="text" name=""  value={firstname} onChange={(e)=>SetFirstName(e.target.value)} className={firstnameError? 'error' : ''}/>
                                            <p style={{ color: 'red' ,textAlign:'left'}}>{firstnameError}</p>
                                        </div>
                                        <div class="form-css signupsellerform-css">
                                            <label>Last Name</label>
                                            <input type="text" name="" value={lastname} onChange={(e)=>SetLastName(e.target.value)} className={lastnameError? 'error' : ''}/>
                                            <p style={{ color: 'red' ,textAlign:'left'}}>{lastnameError}</p>
                                        </div>
                                    </div>
                                    <div class="main-form-css">
                                        <div class="form-css email-css signupsellerform-css">
                                            <label>Email</label>
                                            <input type="email" name="" value={email} onChange={(e)=>SetEmail(e.target.value)}  className={emailError? 'error' : ''}/>
                                            <p style={{ color: 'red' ,textAlign:'left'}}>{emailError}</p>
                                        </div>

                                    </div>



                                    <div class="main-form-css">
                                        <div class="form-css signupsellerform-css">
                                            <label>Password</label>
                                            <input type="password"  value={password} onChange={(e)=>SetPassword(e.target.value)}  className={passwordError? 'error' : ''}/>
                                            <p style={{ color: 'red' ,textAlign:'left'}}>{passwordError}</p>
                                        </div>
                                        <div class="form-css signupsellerform-css">
                                            <label>Confirm Password</label>
                                            <input type="password" name=""  value={confirmpassword} onChange={(e)=>SetConfirmPassword(e.target.value)}  className={confirmpasswordError? 'error' : ''}/>
                                            <p style={{ color: 'red' ,textAlign:'left'}}>{confirmpasswordError}</p>
                                        </div>
                                    </div>
                                    <button class="main-div-right-button" type='button' onClick={buyersignup}>Create an account</button>
                                    <div className='line-div'>
                                        <hr class="line" /><p>or</p><hr class=" line2" />
                                    </div>
                                    <span class="main-div-right-text">Continue signing in with</span>
                                    <div class="main-div-right-image">
                                        <img alt=' '  src="./media/4.svg" />
                                        <img alt=' '  src="./media/5.svg" />
                                        <img alt=' '  src="./media/6.svg" />
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
