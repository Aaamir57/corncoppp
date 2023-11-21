import React from 'react'
import Basictabletwo from './Basictabletwo';

export default function Marketplace() {
    function toggleSidebar() {
        var sidebar = document.getElementById('sidebar');

        sidebar.classList.toggle('open');

    }
    return (
        <div>
            <div className='mainmarketplace'>
                <div class="leftsidebararea leftmarket">
                    <div className='sidebar' id="sidebar">
                        <img alt=' ' src="./media/1.png" className='firstdashboardimg' />
                        <button className='dashboardbtn'>
                            <img alt=' ' src="./media/202.svg" />
                            <a>Dashboard</a>
                        </button>
                        <div className='dashboard-firstfive'>
                            <div className='dashbord-ul'>
                                <img alt=' ' src="./media/201.svg" />
                                <a>Inbox</a>
                            </div>
                            <div className='dashbord-ul'>
                                <img alt=' ' src="./media/203.svg" />
                                <a>Products</a>
                            </div>
                            <div className='dashbord-ul'>
                                <img alt=' ' src="./media/204.svg" />
                                <a>Transactions</a>
                            </div>
                            <div className='dashbord-ul'>
                                <img alt=' ' src="./media/200.svg" />
                                <a>Trends</a>
                            </div>
                        </div>
                        <div className='dashboard-lasttwo'>
                            <div className='dashbord-ul'>
                                <img alt=' ' src="./media/205.svg" />
                                <a>Settings</a>
                            </div>
                            <div className='dashbord-ul'>
                                <img alt=' ' src="./media/206.svg" />
                                <a>Logout</a>
                            </div>
                        </div>
                    </div>
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
                                    <div className=''>
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
            </div>
        </div>
    )
}
