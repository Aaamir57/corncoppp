
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import React, { useState } from 'react';

export default function Signup() {
    const [page, setPage] = useState('signup');
    const [imageSrcsss, setImageSrcsss] = useState('./media/8.svg');
    const [imageSrcc, setImageSrcc] = useState('./media/8.svg');
    const [imageSrcccc, setImageSrcccc] = useState('./media/9.svg');
    const [imageSrc, setImageSrc] = useState('./media/8.svg');
    const [textColor, setTextColor] = useState('#9600AF');
    const [continueButtonColor, setContinueButtonColor] = useState('#ABABAB');

    const [buttonColors, ssetButtonColor] = useState('white');
    const [imageSrccs, ssetImageSrcc] = useState('./media/8.svg');
    const [imageSrccccs, ssetImageSrcccc] = useState('./media/9.svg');
    const [imageSrcs, ssetImageSrc] = useState('./media/7.svg');
    const [textColors, ssetTextColor] = useState('#9600AF');


    const [buttonColor, setButtonColor] = useState('white');

    const handleButtonClick = () => {

        setImageSrc('./media/22.svg');
        setImageSrcccc('./media/21.svg');
        setImageSrcc('./media/23.svg');
        setImageSrcc('./media/21.svg');
        setTextColor('white');
        setButtonColor('#9600AF');
        setContinueButtonColor('#9600AF');
        setPage('signupseller');
        setImageSrcsss('./media/50.svg');

        ssetImageSrc('./media/7.svg');
        ssetImageSrcccc('./media/9.svg');
        ssetButtonColor('white');
        ssetTextColor('#9600AF');
    };
    const handleButtonClicks = () => {

        ssetImageSrc('./media/22.svg');
        ssetImageSrcccc('./media/21.svg');
        ssetImageSrcc('./media/23.svg');
        ssetImageSrcc('./media/21.svg');
        ssetTextColor('white');
        ssetButtonColor('#9600AF');
        setContinueButtonColor('#9600AF');
        setPage('signupone');



        
        setImageSrcccc('./media/9.svg');
        setButtonColor('white');
        setImageSrcsss('./media/8.svg');
        setTextColor('#9600AF');
    };



    return (
        <div>

            <Header />
            <div class="container-fluid text-center">
                <div class="row">
                    <div class="col mainnn">
                        <div class="main-buyerseller ">
                            <h1>Unlock boundless possibilities with our cutting - edge AI companion</h1>
                            <div class="butoon-vsss">
                                <h3>Select your account type</h3>
                                <p>Morbi tincidunt augue interdum velit euismod</p>
                                <button class="main-buyerseller-button" id="colorChangeButton"
                                    onClick={handleButtonClicks}
                                    style={{ backgroundColor: buttonColors }}>
                                    <div class="butoon-css">

                                        <img   class="firstbutton" src={imageSrcs} alt="" />
                                        
                                        <p className='firstbuttons' style={{ color: textColors }}> I am a savvy shopper,
                                            I want to join as a buyer</p>

                                        <img alt=' '  src={imageSrccccs} class="arrowcss" />

                                    </div>
                                </button>
                            </div>
                            <div class="butoon-vsss">
                                <button class="main-buyerseller-button" id="colorChangeButton"
                                    onClick={handleButtonClick}
                                    style={{ backgroundColor: buttonColor }}>
                                    <div class="butoon-css">

                                        <img   class="firstbutton" src={imageSrcsss} alt="" />
                                        <p className='firstbuttons' style={{ color: textColor }}>
                                            I am an enterprenuer,
                                            I want to join as a seller
                                        </p>

                                        <img alt=' '  src={imageSrcccc} class="arrowcss" />

                                    </div>
                                </button>
                            </div>

                            <div class="bottom-button">
                                <button id="continueButton"
                                    onClick={() => setContinueButtonColor('purple')}
                                    style={{ backgroundColor: continueButtonColor }}> <a href={`http://localhost:3000/${page}`}>Continue</a> </button>
                                <p>Already have an account? <a href="/login" className='bottom-buuton-login'> login</a> </p>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
            <Footer />














        </div>
    )
}