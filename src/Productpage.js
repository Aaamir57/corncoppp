
import Footer from './Footer';
import Header from './Header'
import React, { useState } from 'react';

export default function Productpage() {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);

    const handleCheckboxChange = (checkboxNumber) => {
        if (checkboxNumber === 1) {
            setIsChecked1(!isChecked1);
        } else if (checkboxNumber === 2) {
            setIsChecked2(!isChecked2);
        } else if (checkboxNumber === 3) {
            setIsChecked3(!isChecked3);
        } else if (checkboxNumber === 4) {
            setIsChecked4(!isChecked4);
        } else if (checkboxNumber === 5) {
            setIsChecked5(!isChecked5);
        }
    };


    return (
        <div>
            <Header />
            <div class="container text-center mmm">
                <div class="row">
                    <div class="col">
                        <div className='main-search'>
                            <input type="text" name="" placeholder='How we can help you ?' className='custominput' />
                            <div className='searchicon'>
                                <img src="./media/72.svg" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <div className='main-filter'>
                            <div className='filter ' id="flip1">
                                <h1>Filters</h1>
                                <img src="./media/74.svg" />
                            </div>
                            <div className='toglle' id="panel1">


                                <div className='main-all-filters' >
                                    <div className='businessfilter'>
                                        <div className='businessfilter1'>
                                            <label className='firstinputbusiness '>
                                                <input type="checkbox" onChange={() => handleCheckboxChange(1)} checked={isChecked1} />
                                                <span style={{ color: isChecked1 ? '#9D40B1' : '#9D40B1' }}>E-commerce</span>
                                            </label>
                                        </div>
                                        <div className='businessfilter3'>
                                            <div className='businessfilter2'>
                                                <label className='setrow '>
                                                    <input type="checkbox" onChange={() => handleCheckboxChange(2)} checked={isChecked2} />
                                                    <span style={{ color: isChecked2 ? '#9D40B1' : '#686868' }}>Real Estate</span>
                                                </label>
                                                <label className='setrow'>
                                                    <input type="checkbox" onChange={() => handleCheckboxChange(3)} checked={isChecked3} />
                                                    <span style={{ color: isChecked3 ? '#9D40B1' : '#686868' }}>Real Estate</span>
                                                </label>
                                            </div>
                                            <div className='businessfilter6'>
                                                <label className='setrow'>
                                                    <input type="checkbox" onChange={() => handleCheckboxChange(4)} checked={isChecked4} />
                                                    <span style={{ color: isChecked4 ? '#9D40B1' : '#686868' }} className='pp'>Real Estate</span>
                                                </label>
                                                <label className='setrow'>
                                                    <input type="checkbox" onChange={() => handleCheckboxChange(5)} checked={isChecked5} />
                                                    <span style={{ color: isChecked5 ? '#9D40B1' : '#686868' }}>Real Estate</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='businessfilter'>
                                        <div className='businessfilter1'>
                                            <label className='firstinputbusiness'>
                                                <input type="checkbox" />
                                                <span >E-commerce</span>
                                            </label>
                                        </div>
                                        <div className='businessfilter3'>
                                            <div className='businessfilter2'>
                                                <label className='setrow'>

                                                    <input type="checkbox" />
                                                    <span >Real Estate</span>
                                                </label>
                                                <label className='setrow'>
                                                    <input type="checkbox" />
                                                    <span >Real Estate</span>
                                                </label>
                                            </div>
                                            <div className='businessfilter6'>
                                                <label className='setrow'>
                                                    <input type="checkbox" />
                                                    <span >Real Estate</span>
                                                </label>
                                                <label className='setrow'>
                                                    <input type="checkbox" />
                                                    <span >Real Estate</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='businessfilter'>
                                        <div className='businessfilter1'>
                                            <label className='firstinputbusiness'>
                                                <input type="checkbox" />
                                                <span >E-commerce</span>
                                            </label>
                                        </div>
                                        <div className='businessfilter3'>
                                            <div className='businessfilter2'>
                                                <label className='setrow'>

                                                    <input type="checkbox" />
                                                    <span >Real Estate</span>
                                                </label>
                                                <label className='setrow'>
                                                    <input type="checkbox" />
                                                    <span >Real Estate</span>
                                                </label>
                                            </div>
                                            <div className='businessfilter6'>
                                                <label className='setrow'>
                                                    <input type="checkbox" />
                                                    <span >Real Estate</span>
                                                </label>
                                                <label className='setrow'>
                                                    <input type="checkbox" />
                                                    <span >Real Estate</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='businessfilter'>
                                        <div className='businessfilter1'>
                                            <label className='firstinputbusiness'>
                                                <input type="checkbox" />
                                                <span >E-commerce</span>
                                            </label>
                                        </div>
                                        <div className='businessfilter3'>
                                            <div className='businessfilter2'>
                                                <label className='setrow'>

                                                    <input type="checkbox" />
                                                    <span >Real Estate</span>
                                                </label>
                                                <label className='setrow'>
                                                    <input type="checkbox" />
                                                    <span >Real Estate</span>
                                                </label>
                                            </div>
                                            <div className='businessfilter6'>
                                                <label className='setrow'>
                                                    <input type="checkbox" />
                                                    <span >Real Estate</span>
                                                </label>
                                                <label className='setrow'>
                                                    <input type="checkbox" />
                                                    <span >Real Estate</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='businessfilter'>
                                        <div className='businessfilter1'>
                                            <label className='firstinputbusiness'>
                                                <input type="checkbox" />
                                                <span >E-commerce</span>
                                            </label>
                                        </div>
                                        <div className='businessfilter3'>
                                            <div className='businessfilter2'>
                                                <label className='setrow'>

                                                    <input type="checkbox" />
                                                    <span >Real Estate</span>
                                                </label>
                                                <label className='setrow'>
                                                    <input type="checkbox" />
                                                    <span >Real Estate</span>
                                                </label>
                                            </div>
                                            <div className='businessfilter6'>
                                                <label className='setrow'>
                                                    <input type="checkbox" />
                                                    <span >Real Estate</span>
                                                </label>
                                                <label className='setrow'>
                                                    <input type="checkbox" />
                                                    <span >Real Estate</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='businessfilter'>
                                        <label className='pricerange'>
                                            <input type="checkbox" />
                                            <span >Price Range</span>
                                        </label>
                                        <div className='main-sliderange'>
                                            <h1>Min</h1>
                                            <input type="range" min="1" max="100" value="50" className='sliderange'/>
                                            <h2>$0</h2>

                                        </div>
                                        <div className='main-sliderange'>
                                            <h1>Max</h1>
                                            <input type="range" min="1" max="100" value="50" className='sliderange'/>
                                            <h2>$677</h2>

                                        </div>
                                       


                                        <label>
                                            <input type="checkbox" />
                                            <span >Free</span>
                                        </label>
                                    </div>
                                   


                                </div>
                               
                                <div className='btnnnsett'>
                                    <button className='clearbtn'>
                                        <a>Clear all</a>
                                    </button>


                                    <button className='donebtn'>
                                        <a>Done</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="container text-center m">
                <div class="row">
                    <div class="col">
                        <div className='trendingproduct'>
                            <div className='trendingproducttext'>
                                <h1>E-Commerce Products</h1>
                                <p>AI products helping to boost your business and profits.</p>
                            </div>
                            <button className='trendingbutton'>
                                <a>View More</a>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div class="container text-center mmmm">
                <div class="row mainrow">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='main-proo mmmmmm'>
                            <img src="./media/11.png" className='proimage' />
                            <div className='mainprocss'>
                                <div className='free'>
                                    <p>
                                        Lorem ipsum
                                    </p>
                                    <span>Free</span>
                                </div>
                                <p className='protext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <div className='businessfetal'>
                                    <img src="./media/60.svg" />
                                    <img src="./media/61.svg" />
                                    <p>Business </p><p>Retail</p>
                                </div>
                                <div className='bytes'>
                                    <img src="./media/73.svg" />
                                    <p>589 buyers</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='main-proo mmmmmm'>
                            <img src="./media/11.png" className='proimage' />
                            <div className='mainprocss'>
                                <div className='free'>
                                    <p>
                                        Lorem ipsum
                                    </p>
                                    <span>Free</span>
                                </div>
                                <p className='protext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <div className='businessfetal'>
                                    <img src="./media/60.svg" />
                                    <img src="./media/61.svg" />
                                    <p>Business </p><p>Retail</p>
                                </div>
                                <div className='bytes'>
                                    <img src="./media/73.svg" />
                                    <p>589 buyers</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='main-proo mmmmmm'>
                            <img src="./media/11.png" className='proimage' />
                            <div className='mainprocss'>
                                <div className='free'>
                                    <p>
                                        Lorem ipsum
                                    </p>
                                    <span>Free</span>
                                </div>
                                <p className='protext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <div className='businessfetal'>
                                    <img src="./media/60.svg" />
                                    <img src="./media/61.svg" />
                                    <p>Business </p><p>Retail</p>
                                </div>
                                <div className='bytes'>
                                    <img src="./media/73.svg" />
                                    <p>589 buyers</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='main-proo mmmmmm'>
                            <img src="./media/11.png" className='proimage' />
                            <div className='mainprocss'>
                                <div className='free'>
                                    <p>
                                        Lorem ipsum
                                    </p>
                                    <span>Free</span>
                                </div>
                                <p className='protext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <div className='businessfetal'>
                                    <img src="./media/60.svg" />
                                    <img src="./media/61.svg" />
                                    <p>Business </p><p>Retail</p>
                                </div>
                                <div className='bytes'>
                                    <img src="./media/73.svg" />
                                    <p>589 buyers</p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>


            </div>
            <div class="container text-center m">
                <div class="row">
                    <div class="col">
                        <div className='trendingproduct'>
                            <div className='trendingproducttext'>
                                <h1>E-Commerce Products</h1>
                                <p>AI products helping to boost your business and profits.</p>
                            </div>
                            <button className='trendingbutton'>
                                <a>View More</a>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div class="container text-center mmmm">
                <div class="row mainrow">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='main-proo mmmmmm'>
                            <img src="./media/11.png" className='proimage' />
                            <div className='mainprocss'>
                                <div className='free'>
                                    <p>
                                        Lorem ipsum
                                    </p>
                                    <span>Free</span>
                                </div>
                                <p className='protext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <div className='businessfetal'>
                                    <img src="./media/60.svg" />
                                    <img src="./media/61.svg" />
                                    <p>Business </p><p>Retail</p>
                                </div>
                                <div className='bytes'>
                                    <img src="./media/73.svg" />
                                    <p>589 buyers</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='main-proo mmmmmm'>
                            <img src="./media/11.png" className='proimage' />
                            <div className='mainprocss'>
                                <div className='free'>
                                    <p>
                                        Lorem ipsum
                                    </p>
                                    <span>Free</span>
                                </div>
                                <p className='protext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <div className='businessfetal'>
                                    <img src="./media/60.svg" />
                                    <img src="./media/61.svg" />
                                    <p>Business </p><p>Retail</p>
                                </div>
                                <div className='bytes'>
                                    <img src="./media/73.svg" />
                                    <p>589 buyers</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='main-proo mmmmmm'>
                            <img src="./media/11.png" className='proimage' />
                            <div className='mainprocss'>
                                <div className='free'>
                                    <p>
                                        Lorem ipsum
                                    </p>
                                    <span>Free</span>
                                </div>
                                <p className='protext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <div className='businessfetal'>
                                    <img src="./media/60.svg" />
                                    <img src="./media/61.svg" />
                                    <p>Business </p><p>Retail</p>
                                </div>
                                <div className='bytes'>
                                    <img src="./media/73.svg" />
                                    <p>589 buyers</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='main-proo mmmmmm'>
                            <img src="./media/11.png" className='proimage' />
                            <div className='mainprocss'>
                                <div className='free'>
                                    <p>
                                        Lorem ipsum
                                    </p>
                                    <span>Free</span>
                                </div>
                                <p className='protext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <div className='businessfetal'>
                                    <img src="./media/60.svg" />
                                    <img src="./media/61.svg" />
                                    <p>Business </p><p>Retail</p>
                                </div>
                                <div className='bytes'>
                                    <img src="./media/73.svg" />
                                    <p>589 buyers</p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>


            </div>
            <div class="container text-center m">
                <div class="row">
                    <div class="col">
                        <div className='trendingproduct'>
                            <div className='trendingproducttext'>
                                <h1>E-Commerce Products</h1>
                                <p>AI products helping to boost your business and profits.</p>
                            </div>
                            <button className='trendingbutton'>
                                <a>View More</a>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div class="container text-center mmmm">
                <div class="row mainrow">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='main-proo mmmmmm'>
                            <img src="./media/11.png" className='proimage' />
                            <div className='mainprocss'>
                                <div className='free'>
                                    <p>
                                        Lorem ipsum
                                    </p>
                                    <span>Free</span>
                                </div>
                                <p className='protext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <div className='businessfetal'>
                                    <img src="./media/60.svg" />
                                    <img src="./media/61.svg" />
                                    <p>Business </p><p>Retail</p>
                                </div>
                                <div className='bytes'>
                                    <img src="./media/73.svg" />
                                    <p>589 buyers</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='main-proo mmmmmm'>
                            <img src="./media/11.png" className='proimage' />
                            <div className='mainprocss'>
                                <div className='free'>
                                    <p>
                                        Lorem ipsum
                                    </p>
                                    <span>Free</span>
                                </div>
                                <p className='protext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <div className='businessfetal'>
                                    <img src="./media/60.svg" />
                                    <img src="./media/61.svg" />
                                    <p>Business </p><p>Retail</p>
                                </div>
                                <div className='bytes'>
                                    <img src="./media/73.svg" />
                                    <p>589 buyers</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='main-proo mmmmmm'>
                            <img src="./media/11.png" className='proimage' />
                            <div className='mainprocss'>
                                <div className='free'>
                                    <p>
                                        Lorem ipsum
                                    </p>
                                    <span>Free</span>
                                </div>
                                <p className='protext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <div className='businessfetal'>
                                    <img src="./media/60.svg" />
                                    <img src="./media/61.svg" />
                                    <p>Business </p><p>Retail</p>
                                </div>
                                <div className='bytes'>
                                    <img src="./media/73.svg" />
                                    <p>589 buyers</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='main-proo mmmmmm'>
                            <img src="./media/11.png" className='proimage' />
                            <div className='mainprocss'>
                                <div className='free'>
                                    <p>
                                        Lorem ipsum
                                    </p>
                                    <span>Free</span>
                                </div>
                                <p className='protext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <div className='businessfetal'>
                                    <img src="./media/60.svg" />
                                    <img src="./media/61.svg" />
                                    <p>Business </p><p>Retail</p>
                                </div>
                                <div className='bytes'>
                                    <img src="./media/73.svg" />
                                    <p>589 buyers</p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>


            </div>
            <div class="container text-center m">
                <div class="row">
                    <div class="col">
                        <div className='trendingproduct'>
                            <div className='trendingproducttext'>
                                <h1>E-Commerce Products</h1>
                                <p>AI products helping to boost your business and profits.</p>
                            </div>
                            <button className='trendingbutton'>
                                <a>View More</a>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div class="container text-center mmmm">
                <div class="row mainrow">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='main-proo mmmmmm'>
                            <img src="./media/11.png" className='proimage' />
                            <div className='mainprocss'>
                                <div className='free'>
                                    <p>
                                        Lorem ipsum
                                    </p>
                                    <span>Free</span>
                                </div>
                                <p className='protext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <div className='businessfetal'>
                                    <img src="./media/60.svg" />
                                    <img src="./media/61.svg" />
                                    <p>Business </p><p>Retail</p>
                                </div>
                                <div className='bytes'>
                                    <img src="./media/73.svg" />
                                    <p>589 buyers</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='main-proo mmmmmm'>
                            <img src="./media/11.png" className='proimage' />
                            <div className='mainprocss'>
                                <div className='free'>
                                    <p>
                                        Lorem ipsum
                                    </p>
                                    <span>Free</span>
                                </div>
                                <p className='protext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <div className='businessfetal'>
                                    <img src="./media/60.svg" />
                                    <img src="./media/61.svg" />
                                    <p>Business </p><p>Retail</p>
                                </div>
                                <div className='bytes'>
                                    <img src="./media/73.svg" />
                                    <p>589 buyers</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='main-proo mmmmmm'>
                            <img src="./media/11.png" className='proimage' />
                            <div className='mainprocss'>
                                <div className='free'>
                                    <p>
                                        Lorem ipsum
                                    </p>
                                    <span>Free</span>
                                </div>
                                <p className='protext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <div className='businessfetal'>
                                    <img src="./media/60.svg" />
                                    <img src="./media/61.svg" />
                                    <p>Business </p><p>Retail</p>
                                </div>
                                <div className='bytes'>
                                    <img src="./media/73.svg" />
                                    <p>589 buyers</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='main-proo mmmmmm'>
                            <img src="./media/11.png" className='proimage' />
                            <div className='mainprocss'>
                                <div className='free'>
                                    <p>
                                        Lorem ipsum
                                    </p>
                                    <span>Free</span>
                                </div>
                                <p className='protext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <div className='businessfetal'>
                                    <img src="./media/60.svg" />
                                    <img src="./media/61.svg" />
                                    <p>Business </p><p>Retail</p>
                                </div>
                                <div className='bytes'>
                                    <img src="./media/73.svg" />
                                    <p>589 buyers</p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>


            </div>

            <Footer />

        </div>
    )
}
