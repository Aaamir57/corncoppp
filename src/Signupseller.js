import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Signupseller() {
    return (
        <div>
           
                <Header/>
                <br/><br/>
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className="col-lg-6 col-md-0 col-sm-0  main-div-left">
                            <div className="signup-text">
                                <h1>Life Is Better<br />With AI</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing<br /> elit. At elementum eu facilisis sed odio morbi. Massa <br />vitae tortor condimentum lacinia quis vel.</p>
                            </div>
                            <div className="signup-image">
                                <img src="./media/1.svg"/>
                                    <p>1. Fill in your personal
                                        information</p>
                            </div>
                            <div className="signup-image" >
                                <p>2. Fill in your credit
                                    card information.
                                </p>
                                <img src="./media/2.svg"/>
                            </div>
                            <div className="signup-image">
                                <img src="./media/3.svg"/>
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
                                                <input type="text" name=""/>
                                            </div>
                                            <div class="form-css signupsellerform-css">
                                                <label>Last Name</label>
                                                <input type="text" name=""/>
                                            </div>
                                        </div>
                                        <div class="main-form-css ">
                                            <div class="form-css signupsellerform-css">
                                                <label>Email</label>
                                                <input type="text" name=""/>
                                            </div>
                                            <div class="form-css signupsellerform-css">
                                                <label>Phone</label>
                                                <input type="text" name=""/>
                                            </div>
                                        </div>
                                        <div class="main-form-css">
                                            <div class="form-css signupsellerform-css">
                                                <label>House Number</label>
                                                <input type="text" name=""/>
                                            </div>
                                            <div class="form-css signupsellerform-css">
                                                <label>Street</label>
                                                <input type="text" name=""/>
                                            </div>
                                        </div>
                                        <div class="main-form-css">
                                            <div class="form-css signupsellerform-css">
                                                <label>Country</label>
                                                <input type="text" name=""/>
                                            </div>
                                            <div class="form-css signupsellerform-css">
                                                <label>City</label>
                                                <input type="text" name=""/>
                                            </div>
                                        </div>
                                        <div class="main-form-css ">
                                            <div class="form-css signupsellerform-css">
                                                <label>Company Name</label>
                                                <input type="text" name=""/>
                                            </div>
                                            <div class="form-css signupsellerform-css">
                                                <label>Company Email</label>
                                                <input type="text" name=""/>
                                            </div>
                                        </div>
                                        <div class="main-form-css-block">
                                            <div class="form-css-block signupsellerform-csss">
                                                <label>Credit Card Number</label>
                                                <input type="text" name=""/>
                                            </div>
                                            <div class="form-css-block bb signupsellerform-csss">
                                                <label>Card Holder's Name</label>
                                                <input type="text" name=""/>
                                            </div>
                                        </div>
                                        <div class="main-form-css">
                                            <div class="form-css signupsellerform-css">
                                                <label>Expiry Date</label>
                                                <input type="text" name=""/>
                                            </div>
                                            <div class="form-css signupsellerform-css">
                                                <label>CCV</label>
                                                <input type="text" name=""/>
                                            </div>

                                        </div>
                                        <div class="main-form-css">
                                            <div class="form-css signupsellerform-css">
                                                <label>Password</label>
                                                <input type="text" name=""/>
                                            </div>
                                            <div class="form-css signupsellerform-css">
                                                <label>Confirm Password</label>
                                                <input type="text" name=""/>
                                            </div>
                                        </div>
                                        <button class="main-div-right-button"><a href="">  Create an account</a></button>
                                        <div className='line-div'>
                                            <hr class="line"/><p>or</p><hr class=" line2"/>
                                        </div>
                                        
                                            <span class="main-div-right-text">Continue signing in with</span>
                                            <div class="main-div-right-image">
                                                <img src="./media/4.svg"/>
                                                <img src="./media/5.svg"/>
                                                <img src="./media/6.svg"/>
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
