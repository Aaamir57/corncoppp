import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Signup() {
    return (
        <div>

            <Header/>
            <div class="container-fluid text-center">
                <div class="row">
                    <div class="col mainnn">
                        <div class="main-buyerseller ">
                            <h1>Unlock boundless possibilities with our cutting - edge AI companion</h1>
                            <div class="butoon-vsss">
                                <h3>Select your account type</h3>
                                <p>Morbi tincidunt augue interdum velit euismod</p>
                                <button class="main-buyerseller-button">
                                    <div class="butoon-css">

                                        <img src="./media/7.svg" />
                                        <a href="">
                                            I am a savvy shopper, I
                                            want to join as a buyer
                                        </a>

                                        <img src="./media/9.svg" class="arrowcss" />
                                    </div>
                                </button>
                            </div>
                            <div class="butoon-vsss">
                                <button class="main-buyerseller-button">
                                    <div class="butoon-css">

                                        <img src="./media/8.svg" class="firstbutton" />
                                        <a href="">
                                            I am an enterprenuer,
                                            I want to join as a seller
                                        </a>

                                        <img src="./media/9.svg" class="arrowcss" />

                                    </div>
                                </button>
                            </div>
                            <div class="bottom-button">
                                <button> <a href="">Continue</a> </button>
                                <p>Already have an account? <a href=""> login</a> </p>
                            </div>



                        </div>
                    </div>

                </div>
            </div>
            <Footer/>











        </div>
    )
}
