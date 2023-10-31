import React from 'react'
import Graph from './Graph';
import Chart from './Chart';

export default function Dashboard() {
    function toggleSidebar() {
        var sidebar = document.getElementById('sidebar');

        sidebar.classList.toggle('open');

    }
    return (
        <div>
            <div class="container-fluid text-center">
                <div class="row">
                    <div class="col leftsidebararea">
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
                        {/* <button class="open-btn" onClick={toggleSidebar}>Open</button> */}



                    </div>
                    <div class="col rightmain">
                        
                        <div className='searchareaaa'>
                            <div className='leftsearchpros'>
                                <div className='Qsearchs'>
                                    <img alt=' ' src="./media/105.svg" />
                                </div>
                                <input placeholder='Search for products'></input>
                            </div>
                            <div className='namesection'>
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

                        <div className='welcomerow'>
                            <div class="col">
                                <div className='welcome'>
                                    <div className='leftwelcome'>
                                        <h1>Welcome back, Johnson</h1>
                                        <p>Maximize product sales and store management in order to get the best results</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col">
                                <div className='rightwelcom'>
                                    {/* <input type="text" class="form-control" id="date2" name="date" placeholder="29/02/2013" /> */}
                                    <button className='thismonth'>
                                        <img alt=' ' src="./media/210.svg" />
                                        <a>This Month</a>
                                        <img alt=' ' src="./media/209.svg" />
                                    </button>
                                    <button className='downloadreport'>
                                        <a>Download Report</a>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="row maintotalbuyers median-total-remove">
                            <div class="col  maintotalbuyers1">
                                {/* <div className='totalbuyerdivfirsttwo'> */}
                                    <div className='totalbuyerdiv'>
                                        <div className='linediv'>
                                            <img alt=' ' src="./media/Line 7.svg" />
                                            <div className='linetext'>
                                                <h1>Total Buyers</h1>
                                                <h2>1,456</h2>
                                            </div>
                                            <img alt=' ' src="./media/Group 203.svg" />
                                        </div>
                                        <div className='arowseccc'>
                                            <img alt=' ' src="./media/Vector(22).svg" />
                                            <span>+6.57%</span>
                                            <p>since last month</p>
                                        </div>
                                    </div>
                                    <div className='totalbuyerdiv'>
                                        <div className='linediv'>
                                            <img alt=' ' src="./media/Line 7(1).svg" />
                                            <div className='linetext'>
                                                <h1>Total Buyers</h1>
                                                <div className='mainsollarimage'>
                                                    <img alt=' ' src="./media/Vector(25).svg" className='dollarimage' />
                                                    <h2>1,456</h2>
                                                </div>

                                            </div>
                                            <img alt=' ' src="./media/Group 203(3).svg" />
                                        </div>
                                        <div className='arowseccc'>
                                            <img alt=' ' src="./media/Vector(23).svg" />
                                            <span>+6.57%</span>
                                            <p>since last month</p>
                                        </div>
                                    </div>
                                {/* </div> */}

                                {/* <div className='totalbuyerdivlasttwo'> */}
                                    <div className='totalbuyerdiv'>
                                        <div className='linediv'>
                                            <img alt=' ' src="./media/Line 7(2).svg" />
                                            <div className='linetext'>
                                                <h1>Total Buyers</h1>

                                                <h2>1,456</h2>
                                            </div>
                                            <img alt=' ' src="./media/Group 203(2).svg" />
                                        </div>
                                        <div className='arowseccc'>
                                            <img alt=' ' src="./media/Vector(23).svg" />
                                            <span>+6.57%</span>
                                            <p>since last month</p>
                                        </div>
                                    </div>
                                    <div className='totalbuyerdiv'>
                                        <div className='linediv'>
                                            <img alt=' ' src="./media/Line 7(3).svg" />
                                            <div className='linetext'>
                                                <h1>Total Buyers</h1>
                                                <div className='mainsollarimage'>
                                                    <img alt=' ' src="./media/Vector(25).svg" className='dollarimage' />
                                                    <h2>1,456</h2>
                                                </div>


                                            </div>

                                            <img alt=' ' src="./media/Group 203(3).svg" />
                                        </div>
                                        <div className='arowseccc'>
                                            <img alt=' ' src="./media/Vector(22).svg" />
                                            <span>+6.57%</span>
                                            <p>since last month</p>
                                        </div>
                                    </div>
                                {/* </div> */}
                            </div>

                        </div>












                        <div class="row maintotalbuyers median-main-total">
                            <div class="col  maintotalbuyers1">
                                <div className='totalbuyerdivfirsttwo'>
                                    <div className='totalbuyerdiv'>
                                        <div className='linediv'>
                                            <img alt=' ' src="./media/Line 7.svg" />
                                            <div className='linetext'>
                                                <h1>Total Buyers</h1>
                                                <h2>1,456</h2>
                                            </div>
                                            <img alt=' ' src="./media/Group 203.svg" />
                                        </div>
                                        <div className='arowseccc'>
                                            <img alt=' ' src="./media/Vector(22).svg" />
                                            <span>+6.57%</span>
                                            <p>since last month</p>
                                        </div>
                                    </div>
                                    <div className='totalbuyerdiv'>
                                        <div className='linediv'>
                                            <img alt=' ' src="./media/Line 7(1).svg" />
                                            <div className='linetext'>
                                                <h1>Total Buyers</h1>
                                                <div className='mainsollarimage'>
                                                    <img alt=' ' src="./media/Vector(25).svg" className='dollarimage' />
                                                    <h2>1,456</h2>
                                                </div>

                                            </div>
                                            <img alt=' ' src="./media/Group 203(3).svg" />
                                        </div>
                                        <div className='arowseccc'>
                                            <img alt=' ' src="./media/Vector(23).svg" />
                                            <span>+6.57%</span>
                                            <p>since last month</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='totalbuyerdivlasttwo'>
                                    <div className='totalbuyerdiv'>
                                        <div className='linediv'>
                                            <img alt=' ' src="./media/Line 7(2).svg" />
                                            <div className='linetext'>
                                                <h1>Total Buyers</h1>

                                                <h2>1,456</h2>
                                            </div>
                                            <img alt=' ' src="./media/Group 203(2).svg" />
                                        </div>
                                        <div className='arowseccc'>
                                            <img alt=' ' src="./media/Vector(23).svg" />
                                            <span>+6.57%</span>
                                            <p>since last month</p>
                                        </div>
                                    </div>
                                    <div className='totalbuyerdiv'>
                                        <div className='linediv'>
                                            <img alt=' ' src="./media/Line 7(3).svg" />
                                            <div className='linetext'>
                                                <h1>Total Buyers</h1>
                                                <div className='mainsollarimage'>
                                                    <img alt=' ' src="./media/Vector(25).svg" className='dollarimage' />
                                                    <h2>1,456</h2>
                                                </div>


                                            </div>

                                            <img alt=' ' src="./media/Group 203(3).svg" />
                                        </div>
                                        <div className='arowseccc'>
                                            <img alt=' ' src="./media/Vector(22).svg" />
                                            <span>+6.57%</span>
                                            <p>since last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                       
                        <Chart/>
                        <Graph />

                    </div>
                </div>
            </div>
        </div>
    )
}
