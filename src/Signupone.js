import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Signupone() {
    return (
        <div>

            <Header/>
            <div class="container-fluid text-center">
                <div class="row">
                    <div class="col-lg-6 main-div-left signupone">
                        <div class="signup-text">
                            <h1>Life Is Better<br />With AI</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing<br /> elit. At elementum eu facilisis sed odio morbi. Massa <br />vitae tortor condimentum lacinia quis vel.</p>
                        </div>
                        <div class="signup-images">
                            <img src="./media/2.png"/>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="main-div-right signup-height">
                            <div>
                                <h1>Join Our Venture</h1>
                                <form>
                                    <div class="main-form-css">
                                        <div class="form-css">
                                            <label>First name</label>
                                            <input type="text" name=""/>
                                        </div>
                                        <div class="form-css">
                                            <label>Last Name</label>
                                            <input type="text" name=""/>
                                        </div>
                                    </div>
                                    <div class="main-form-css">
                                        <div class="form-css">
                                            <label>Email</label>
                                            <input type="text" name=""/>
                                        </div>

                                    </div>



                                    <div class="main-form-css">
                                        <div class="form-css">
                                            <label>Password</label>
                                            <input type="text" name=""/>
                                        </div>
                                        <div class="form-css">
                                            <label>Confirm Password</label>
                                            <input type="text" name=""/>
                                        </div>
                                    </div>
                                    <button class="main-div-right-button"><a href="">  Create an account</a></button>
                                    <hr class="line"/>
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
                    
                    <Footer/>

                </div>
                )
}
