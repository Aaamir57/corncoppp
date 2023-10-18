import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Headerlogin from './Headerlogin'

export default function Login() {
    return (
        <div>
            <Headerlogin/>
            <br/>
            <div class="container-fluid text-center">
                <div class="row">

                    <div class="col main-div-left">
                        <br/><br/>
                        <div class="signup-text">
                            <h1>Great to have you back!</h1>
                            <p>
                                You can sign in with your existing account.</p>
                        </div>
                        <div class="signup-images">
                            <img src="./media/10.svg"/>


                        </div>
                    </div>
                    <div class="col">
                        <div class="main-div-right login-height ">
                            <div>
                                <h1>Continue Journey</h1>
                                <form>

                                    <div class="main-form-csss">
                                        <div class="form-csss">
                                            <label>Email</label>
                                            <input type="text" name=""/>
                                        </div>

                                    </div>



                                    <div class="main-form-csss">
                                        <div class="form-csss">
                                            <label>Password</label>
                                            <input type="text" name=""/>
                                        </div>

                                    </div>

                                    <button class="main-div-right-button"><a href="">  Login</a></button>
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