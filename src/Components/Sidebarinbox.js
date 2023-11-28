import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Sidebarinbox() {
    
    const navigate = useNavigate();
    function handleproduct() {
        navigate("/marketplace")
       
    }

function handledashboard(){
    navigate("/")
}

function handlesetting(){
    navigate("/setting")
}

function handleinbox(){
    navigate("/inbox")
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
                        <div className='dashboardbtn2'  onClick={handleinbox}>
                            <img alt=' ' src="./media/tabler_messages(1).svg" />
                            <a>Inbox</a>
                            <div className='inboxdiv'> 
                                    <h1>5</h1>
                            </div>
                        </div>
                        <div className='dashbord-ul ' onClick={handleproduct}  >
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
                    <div className='dashboard-lasttwo' onClick={handlesetting}>
                        <div className='dashbord-ul'>
                            <img alt=' ' src="./media/205.svg" />
                            <a>Settings</a>
                        </div>
                        <div className='dashbord-ul' >
                            <img alt=' ' src="./media/206.svg" />
                            <a>Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
