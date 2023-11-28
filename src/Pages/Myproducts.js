
import Header from '../Components/Header'
import Footer from '../Components/Footer'

import React from 'react';
import Basictable from '../Components/Basictable';

export default function Myproducts() {
   
    return (
        <div>
            <Header />
       
            
            <div className='alignmentmyproduct'>
                
                <div class="container-fluid text-center">
                    <div class="row">
                        <div class="col">
                            <div className=' mainmyproductshead'>
                                <h1>My Products</h1>
                                <div className='activearchive'>
                                    <h2>Active</h2>
                                    <h2>Archive</h2>
                                    <div className='relevencediv'>
                                        <img alt=' ' src="./media/100.svg" />
                                        <img alt=' ' src="./media/101.svg" />
                                        <h2>Relevance</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid text-center">
                    <div class="row">
                        <div class="col">
                            <div className='searchforproduct'>
                                <div className='leftsearchpro'>
                                    <div className='Qsearch'>
                                        <img alt=' ' src="./media/105.svg" />
                                        <img alt=' ' src="./media/104.svg" />
                                    </div>
                                    <input placeholder='Search for products'></input>
                                </div>
                                <div className='rightsearchpro'>


                                    <img alt=' ' src="./media/105.svg" />
                                    <img alt=' ' src="./media/104.svg" />

                                    <h1>Filter</h1>
                                    <img alt=' ' src="./media/102.svg" />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="container-fluid text-center">
                    <div class="row">
                        <div class="col">
                            <div className='productbusinessmain'>
                                <div className='leftbusinesspro'>
                                    <div className='medianbusi'>
                                        <div className='businespro1'>
                                            <h1>Business</h1>
                                            <img alt=' ' src="./media/103.svg" />
                                        </div>
                                        <div className='businespro1'>
                                            <h1>Analytics</h1>
                                            <img alt=' ' src="./media/103.svg" />
                                        </div>
                                    </div>
                                    <div className='medianbusi'>
                                        <div className='businespro1'>
                                            <h1>Learning</h1>
                                            <img alt=' ' src="./media/103.svg" />
                                        </div>
                                        <div className='businespro1'>
                                            <h1>Sales  </h1>
                                            <img alt=' ' src="./media/103.svg" />
                                        </div>
                                    </div>

                                </div>
                                <div className='rightbusinesspro'>
                                    <div className='rightbtnbuss1'>
                                        <h6>From</h6>
                                        <input type="text" class="form-control" id="date" name="date" placeholder="29/02/2013" />
                                    </div>
                                    <div className='rightbtnbuss1'>
                                        <h6>To</h6>
                                        <input type="text" class="form-control" id="date" name="date" placeholder="29/02/2013" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <Basictable/>
                <div class="container-fluid text-center">
                    <div class="row">
                        <div class="col">
                            <div className='mainpagination'>
                                <h1>Showing 1 to  7 of 132 entries</h1>
                                <div className='pag'>
                                    <div class="pagination">
                                        <a href="#">❮</a>
                                        <a href="#">1</a>
                                        <a href="#" class="active">2</a>
                                        <a href="#">3</a>

                                        <a href="#">❯</a>
                                    </div>

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
