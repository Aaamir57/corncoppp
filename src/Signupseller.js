
import Header from './Header'
import Footer from './Footer'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signupseller() {
    const[firstname,SetFirstName]=useState("");
    const[lastname,SetLastName]=useState("");
    const[email,SetEmail]=useState("");
    const[phone,SetPhone]=useState("");
    const[houseno,SetHouseno]=useState("");
    const[street,SetStreet]=useState("");
    const[country,SetCountry]=useState("");
    const[city,SetCity]=useState("");
    const[companyname,SetCompanyname]=useState("");
    const[ccompanyemail,SetCcompanyemail]=useState("");
    const[creditcardno,SetCreditcardno]=useState("");
    const[cardholdersname,SetCardholdersname]=useState("");
    const[expirydate,SetExpirydate]=useState("");
    const[ccv,SetCcv]=useState("");
    const[password,SetPassword]=useState("");
    const[confirmpassword,SetConfirmPassword]=useState("");
    const navigate=useNavigate();


    async function sellersignup()
    {

        let item={firstname,lastname,email,phone,houseno,
            street,country,city,companyname,ccompanyemail,creditcardno,cardholdersname,expirydate,ccv,password,confirmpassword};


        let result = await fetch ("http://localhost:8000/api/sellersignup",{
          method:'POST',
          body:JSON.stringify(item),
          headers:{
            "Content-Type": 'application/json',
            "Accept" : 'application/json'
          }
        })
        result=await result.json();
        
        navigate("/")
}
    return (
        <div>
           
                <Header/>
                <br/><br/>
                <div className="container-fluid text-center ">
                    <div className="row aa">
                        <div className="col-lg-6 col-md-0 col-sm-0  main-div-left">
                            <div className="signup-text">
                                <h1>Life Is Better<br />With AI</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing<br /> elit. At elementum eu facilisis sed odio morbi. Massa <br />vitae tortor condimentum lacinia quis vel.</p>
                            </div>
                            <div className="signup-image">
                                <img alt=' '  src="./media/1.svg"/>
                                    <p>1. Fill in your personal
                                        information</p>
                            </div>
                            <div className="signup-image" >
                                <p>2. Fill in your credit
                                    card information.
                                </p>
                                <img alt=' '  src="./media/2.svg"/>
                            </div>
                            <div className="signup-image">
                                <img alt=' '  src="./media/3.svg"/>
                                    <p>3. Subscribe to our freebies,
                                        updates, trends and you’re
                                        good to create your account!
                                    </p>
                            </div>

                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="main-div-right">
                                <div>
                                    <h1>Join Our Venture</h1>
                                    <form>
                                        <div class="main-form-css">
                                            <div class="form-css signupsellerform-css">
                                                <label>First name</label>
                                                <input type="text" name="" value={firstname} onChange={(e)=>SetFirstName(e.target.value)}/>
                                            </div>
                                            <div class="form-css signupsellerform-css">
                                                <label>Last Name</label>
                                                <input type="text" name="" value={lastname} onChange={(e)=>SetLastName(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div class="main-form-css ">
                                            <div class="form-css signupsellerform-css">
                                                <label>Email</label>
                                                <input type="email" name="" value={email} onChange={(e)=>SetEmail(e.target.value)}/>
                                            </div>
                                            <div class="form-css signupsellerform-css">
                                                <label>Phone</label>
                                                <input type="text" name="" value={phone} onChange={(e)=>SetPhone(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div class="main-form-css">
                                            <div class="form-css signupsellerform-css">
                                                <label>House Number</label>
                                                <input type="text" name="" value={houseno} onChange={(e)=>SetHouseno(e.target.value)}/>
                                            </div>
                                            <div class="form-css signupsellerform-css">
                                                <label>Street</label>
                                                <input type="text" name="" value={street} onChange={(e)=>SetStreet(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div class="main-form-css">
                                            <div class="form-css signupsellerform-css">
                                                <label>Country</label>
                                                <input type="text" name="" value={country} onChange={(e)=>SetCountry(e.target.value)}/>
                                            </div>
                                            <div class="form-css signupsellerform-css">
                                                <label>City</label>
                                                <input type="text" name=""  value={city} onChange={(e)=>SetCity(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div class="main-form-css ">
                                            <div class="form-css signupsellerform-css">
                                                <label>Company Name</label>
                                                <input type="text" name=""  value={companyname} onChange={(e)=>SetCompanyname(e.target.value)}/>
                                            </div>
                                            <div class="form-css signupsellerform-css">
                                                <label>Company Email</label>
                                                <input type="email" name=""  value={ccompanyemail} onChange={(e)=>SetCcompanyemail(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div class="main-form-css-block">
                                            <div class="form-css-block signupsellerform-csss">
                                                <label>Credit Card Number</label>
                                                <input type="text" name=""  value={creditcardno} onChange={(e)=>SetCreditcardno(e.target.value)}/>
                                            </div>
                                            <div class="form-css-block bb signupsellerform-csss">
                                                <label>Card Holder's Name</label>
                                                <input type="text" name=""  value={cardholdersname} onChange={(e)=>SetCardholdersname(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div class="main-form-css">
                                            <div class="form-css signupsellerform-css">
                                                <label>Expiry Date</label>
                                                <input type="text" name=""  value={expirydate} onChange={(e)=>SetExpirydate(e.target.value)}/>
                                            </div>
                                            <div class="form-css signupsellerform-css">
                                                <label>CCV</label>
                                                <input type="text" name=""  value={ccv} onChange={(e)=>SetCcv(e.target.value)}/>
                                            </div>

                                        </div>
                                        <div class="main-form-css">
                                            <div class="form-css signupsellerform-css">
                                                <label>Password</label>
                                                <input type="password" name=""  value={password} onChange={(e)=>SetPassword(e.target.value)}/>
                                            </div>
                                            <div class="form-css signupsellerform-css">
                                                <label>Confirm Password</label>
                                                <input type="password" name=""  value={confirmpassword} onChange={(e)=>SetConfirmPassword(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className='main-box-signup '>
                                            <div>
                                                <p className='box-password'></p>
                                            </div>
                                            <div className='box11'>
                                                <h2>Send me tips, trends, freebies, updates & offers.<br/> You can unsubscribe anytime.</h2>
                                            </div>
                                        
                                       
                                        </div>
                                        <button class="main-div-right-button" onClick={sellersignup}><a href="/">  Create an account</a></button>
                                        <div className='line-div'>
                                            <hr class="line"/><p>or</p><hr class=" line2"/>
                                        </div>
                                        
                                            <span class="main-div-right-text">Continue signing in with</span>
                                            <div class="main-div-right-image">
                                                <img alt=' '    src="./media/4.svg"/>
                                                <img alt=' '  src="./media/5.svg"/>
                                                <img alt=' '  src="./media/6.svg"/>
                                            </div>
                                        </form>
                                            </div>

                                        </div>
                                        

                                </div>

                            </div>
                        </div>
                        <br/>
                        <Footer/>

                    </div>
                    )
}
