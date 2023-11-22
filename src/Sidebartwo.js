import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Sidebartwo() {
    
    const navigate = useNavigate();
    function handleproduct() {
        navigate("/marketplace")
       
    }

function handledashboard(){
    navigate("/")
}
    return (
        <div>
            <div class="leftsidebararea">
                <div className='sidebar' id="sidebar">
                    <img alt=' ' src="./media/1.png" className='firstdashboardimg' />

                    <div className='dashboardbtn11'  onClick={handledashboard}>
                        <img alt=' ' src="./media/Vector(34).svg" />
                        <a>Dashboard</a>
                    </div>
                    <div className='dashboard-firstfive'>
                        <div className='dashbord-ul'>
                            <img alt=' ' src="./media/201.svg" />
                            <a>Inbox</a>
                        </div>
                        <div className=' dashboardbtn2' onClick={handleproduct}  >
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
        </div>
    )
}
