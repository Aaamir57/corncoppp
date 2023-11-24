import React from 'react'
import Slidebarthree from './Slidebarthree'
import Textarea from './Textareas';
import Autocompletes from './Autocompletes';
import Switcher from './Switcher';
import Switchertwo from './Switchertwo';
export default function Setting() {
    function toggleSidebar() {
        var sidebar = document.getElementById('sidebar');

        sidebar.classList.toggle('open');


    }
    return (
        <div>
            <div className='setingmain'>
                <div className='leftsetingsidebar'>
                    <Slidebarthree />
                </div>
                <div className='rightsettingarea'>

                    <div className='rightsettingareaone'>
                        <div className='nameonetoglemain '>
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

                        <div className='rightsettingaretwo'>
                            <h1>Manage profile</h1>                           
                        </div>
                    </div>

                    <div className='rightsettingaretwo'>                      
                        <img alt=' ' src="./media/7779.png" />
                    </div>


                    <div className='rightsettingarethree'>
                        <div className='rightsettingarethreeone'>
                            <img alt=' ' src="./media/7777.svg" />
                            <h1>Edit Display</h1>
                        </div>
                        <button className='rightsettingarethreetwo'>
                            <img alt=' ' src="./media/7778.svg" />
                            <h1>@jennifer_lawrence122</h1>
                        </button>
                    </div>


                    <div className='rightsettingarefour'>

                        <div className='rightsettingarefourone'>

                            <div className='rightsettingarefouroneONE'>
                                <div className='rightsettingarefouroneONEtwoone'>
                                    <h1>First Name</h1>
                                    <Textarea imageSrc="./media/555.svg"
                                        bordercolor="#9D40B1"
                                        placeholdercolor="#9D40B1"
                                        placeholderText="Jennifer"
                                        containerWidth="100%" />
                                </div>
                                <div className='rightsettingarefouroneONEtwoone'>
                                    <h2 className='lastnametwoone margintop'>Last Name</h2>
                                    <Textarea
                                        imageSrc="./media/556.svg"
                                        bordercolor="#747474"
                                        placeholdercolor="#747474"
                                        placeholderText="Lawrence"
                                        containerWidth="100%"
                                    />
                                </div>
                            </div>

                            <div className='rightsettingarefouroneONE1'>
                                <div className='rightsettingarefouroneONEtwotwo'>
                                    <h1>Country</h1>
                                    <Textarea
                                        imageSrc="./media/557.svg"
                                        bordercolor="#747474"
                                        placeholdercolor="#747474"
                                        placeholderText="England"
                                        containerWidth="100%"
                                    />
                                </div>
                                <div className='rightsettingarefouroneONEtwotwo'>
                                    <h1 className='margintop'>City</h1>
                                    <Textarea
                                        imageSrc="./media/Vector(38).svg"
                                        bordercolor="#9D40B1"
                                        placeholdercolor="#9D40B1"
                                        placeholderText="Manchester"
                                        containerWidth="100%"
                                    />
                                </div>
                                <div className='rightsettingarefouroneONEtwotwo2'>
                                    <h2 className='lastnametwoone margintop'>House #</h2>
                                    <Textarea
                                        imageSrc="./media/556.svg"
                                        bordercolor="#747474"
                                        placeholdercolor="#747474"
                                        placeholderText="452"
                                        containerWidth="100%"
                                    />
                                </div>
                            </div>


                            <div className='rightsettingarefouroneONE'>
                                <div className='rightsettingarefouroneONEtwoone3'>
                                    <h2 className='lastnametwoone'>Street #</h2>
                                    <Textarea imageSrc="./media/556.svg"
                                        bordercolor="#747474"
                                        placeholdercolor="#747474"
                                        placeholderText="William son street, arthur road, near 789 block"
                                        containerWidth="100%" />
                                </div>
                            </div>


                            <div className=' setinginput'>
                                <div className='setininput11'>
                                    <h2 className='lastnametwoone'>Phone</h2>
                                    <input type='text' placeholder='+00 - 0045129232'></input>
                                </div>
                                <div className='setininput11'>
                                    <h2 className='lastnametwoone margintop'>Email</h2>
                                    <input type='text' placeholder='cornucopia@acb.com'></input>
                                </div>
                            </div>

                            <div className=' setinginput'>
                                <div className='setininput11'>
                                    <h2 className='lastnametwoone'>Password</h2>
                                    <input type='text' placeholder='*************'></input>
                                </div>
                                <div className='setininput11 '>
                                    <h2 className='lastnametwoone margintop'>Confirm Password</h2>
                                    <input type='text' placeholder='*************'></input>
                                </div>
                            </div>
                        </div>




                        <div className='rightsettingarefourtwo'>
                            <div className='rightsettingarefourtwoONE'>
                                <h2 className='lastnametwoone'>Bio</h2>
                                <textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipis
                            cing elit, sed do eiusmod tempor incididunt ut
                             labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                             nostrud exercitation ullamco'/>
                            </div>

                            <div className='rightsettingarefourtwoTWO'>
                                <h2 className='lastnametwoone'>Notifications</h2>
                                <div className='notificationmain'>
                                    <div className='notificationmain1'>
                                        <div className='notificationmain1text'>
                                            <h1 >Order Confirmation</h1>
                                            <h2>you will be notified when customer order product</h2>
                                        </div>
                                        <Switcher />
                                    </div>
                                    <div className='linesetting'></div>
                                    <div className='notificationmain1 notipayment'>
                                        <div className='notificationmain1text'>
                                            <h1>Payment Confirmation</h1>
                                            <h2 >you will be notified when customer order product</h2>
                                        </div>
                                        <Switchertwo />
                                    </div>
                                </div>
                            </div>


                            <div className='rightlastinputmainMAIN'>
                                <h2 className='lastnametwoone'>Currency</h2>
                                <div className=' rightlastinputmain'>
                                    <div className='rightlastinputmain1'>
                                        <h1>$</h1>
                                    </div>
                                    <Autocompletes />
                                </div>
                            </div>

                            <div className='savbtnmain'>

                                <button className='savebtn'>
                                    <h1>Save</h1>
                                </button>
                            </div>






                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
