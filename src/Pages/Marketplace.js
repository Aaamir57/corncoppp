import React, { useState } from 'react';
import Basictabletwo from '../Components/Basictabletwo';
import Paginationer from '../Components/Paginationer';
import Sidebartwo from '../Components/Sidebartwo';

export default function Marketplace() {
    function toggleSidebar() {
        var sidebar = document.getElementById('sidebar');

        sidebar.classList.toggle('open');


    }

    
    return (
        <div>
            <div className='mainmarketplace'>
               <div className='leftmarket'>
                <Sidebartwo/>

               </div>
                <div className='rightmain rightmarket'>
                    <div className='marketonemain'>
                        <div className='leftsearchhead'>
                            <h1>Marketplace</h1>
                            <p>132 products</p>
                        </div>


                        <div className='nameonetoglemain'>
                            <img alt=' ' src="./media/202.svg" class="open-btn" onClick={toggleSidebar} className='toglebtnnn' />
                            <div className='name11'>
                                <div className='namesectiondiv'>
                                    <img alt=' ' src="./media/207.svg" />
                                    <div className='namesectiondivtext'>
                                        <h1>Johnson Alex</h1><h2>@Johnson_alex</h2>
                                    </div>
                                    <img alt=' ' src="./media/209.svg" className='aroo' />
                                </div>
                                <img alt=' ' src="./media/104.svg" className='straigntline' />
                                <img alt=' ' src="./media/208.svg" />
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid text-center">
                        <div class="row">
                            <div class="col">
                                <div className='searchmarketplace'>
                                    <div className='leftsearcmarket'>
                                        <div className='Qsearch'>
                                            <img alt=' ' src="./media/105.svg" />
                                            <img alt=' ' src="./media/104.svg" />
                                        </div>
                                        <input placeholder='Search for products'></input>
                                    </div>
                                    <div className='rightsearchmarketplace'>
                                        <div className='marketfiltermain'>
                                            <img alt=' ' src="./media/105.svg" />
                                            <img alt=' ' src="./media/104.svg" />
                                            <h1>Filter</h1>
                                            <img alt=' ' src="./media/102.svg" />
                                        </div>
                                        <button className='btnmarketfirst'>
                                            <img alt=' ' src="./media/Vector(31).svg" />
                                            <h1>Add New Product</h1>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='crosmarketmain'>
                        <div className='crosmarketone'>
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

                    </div>


                    <Basictabletwo />
                    <div class="container-fluid text-center">
                        <div class="row">
                            <div class="col">
                                <div className='paginaionmainmarket' >
                                    <h1>Showing 1 to  7 of 132 entries</h1>
                                    <Paginationer/>
                                </div>
                            </div>

                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}
