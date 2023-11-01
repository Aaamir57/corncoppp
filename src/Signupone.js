import Header from './Header'
import Footer from './Footer'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signupone() {
    const[firstname,SetFirstName]=useState("");
    const[lastname,SetLastName]=useState("");
    const[password,SetPassword]=useState("");
    const[email,SetEmail]=useState("");
    const[confirmpassword,SetConfirmPassword]=useState("");
    const navigate=useNavigate();
    async function buyersignup()
    {

        let item={firstname,lastname, email,password,confirmpassword};


        let result = await fetch ("http://localhost:8000/api/buyersignup",{
          method:'POST',
          body:JSON.stringify(item),
          headers:{
            "Content-Type": 'application/json',
            "Accept" : 'application/json'
          }
        })
        console.log("item",item)
        result=await result.json();
        
        navigate("/")
}
    return (
        <div>

            <Header />
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
                                            <input type="text" name=""  value={firstname} onChange={(e)=>SetFirstName(e.target.value)}/>
                                        </div>
                                        <div class="form-css signupsellerform-css">
                                            <label>Last Name</label>
                                            <input type="text" name="" value={lastname} onChange={(e)=>SetLastName(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div class="main-form-css">
                                        <div class="form-css email-css signupsellerform-css">
                                            <label>Email</label>
                                            <input type="email" name="" value={email} onChange={(e)=>SetEmail(e.target.value)}/>
                                        </div>

                                    </div>



                                    <div class="main-form-css">
                                        <div class="form-css signupsellerform-css">
                                            <label>Password</label>
                                            <input type="password"  value={password} onChange={(e)=>SetPassword(e.target.value)}/>
                                        </div>
                                        <div class="form-css signupsellerform-css">
                                            <label>Confirm Password</label>
                                            <input type="password" name=""  value={confirmpassword} onChange={(e)=>SetConfirmPassword(e.target.value)} />
                                        </div>
                                    </div>
                                    <button class="main-div-right-button" onClick={buyersignup}><a href="/signupone">  Create an account</a></button>
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
