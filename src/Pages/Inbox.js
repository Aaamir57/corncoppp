import React from 'react'

import Sidebarinbox from '../Components/Sidebarinbox'
import Chatinboxname from '../Components/Chatinboxname';

export default function Inbox() {
  function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');

    sidebar.classList.toggle('open');


  }
  return (
    <div>
      <div className='inboxmain'>
        <div className='leftsidebarinbox'>
          <Sidebarinbox />
        </div>
        <div className='rightinbox'>

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
              <h1>Inbox</h1>
            </div>
          </div>



          <div className='chatmain'>

            <div className='leftchat'>

              <div className='leftsearcmarket1'>
                <div className='Qsearch1'>
                  <img alt=' ' src="./media/105.svg" />
                  <img alt=' ' src="./media/104.svg" />
                </div>
                <input placeholder='Search for products'></input>
              </div>

              <Chatinboxname />
              <Chatinboxname />
              <Chatinboxname />
              <Chatinboxname />
              <Chatinboxname />
              <Chatinboxname />
              <Chatinboxname />
              <Chatinboxname />
            </div>

            <div className='rightchat'>

              <div className='leftchat22'>
                <div className='leftchat2ONE2'>
                  <img alt=' ' src="./media/207.svg" />
                  <div className='iconinboxx2'>
                  </div>
                </div>
                <div className='leftchat2TWO2'>
                  <div className='leftchat2TWOoooo2'>
                    <h1>Jennifer Fritz</h1>

                    <img alt=' ' src="./media/Group 320.svg" />
                  </div>
                  <p>
                    Apply now
                  </p>
                </div>
              </div>

              <div className='rightchat1'></div>

              <div className='rightchat2main'>
                <img alt=' ' src="./media/207.svg" />
                <div className='rightchat2maintext'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <h2>3:08 PM</h2>
              </div>

              <div className='rightchat2mainONE'>
                <h2>3:08 PM</h2>
                <div className='rightchat2maintextOne'>
                  <p>Lorem ipsum dolor sit amet,</p>
                  <div className='bidytextchat'>
                    <div className='charboxtextone'>
                      <div className='bodytextbox'>
                        <h1>PDF</h1>
                      </div>
                      <h2>Lorem ipsum dolor sit amet,</h2>
                    </div>
                    <img alt=' ' src="./media/Vector(39).svg" />
                  </div>
                </div>
                <img alt=' ' src="./media/207.svg" />
              </div>

              <div className='rightchat2main'>
                <img alt=' ' src="./media/207.svg" />
                <div className='rightchat2maintext'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <h2>3:08 PM</h2>
              </div>


              <div className='rightchat2mainONE'>
                <h2>3:08 PM</h2>
                <div className='rightchat2maintextOne0'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                </div>
                <img alt=' ' src="./media/207.svg" />
              </div>



              <div className='rightchat2main'>
                <img alt=' ' src="./media/207.svg" />
                <div className='rightchat2maintext'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <h2>3:08 PM</h2>
              </div>


              <div className='rightchat2mainONE'>
                <h2>3:08 PM</h2>
                <div className='rightchat2maintextOne0'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                </div>
                <img alt=' ' src="./media/207.svg" />
              </div><br/>
              <br/>

              <div className='rightchat1'></div>

              <div className='lastchatinbox'>
                <input type="text" placeholder="Type a message"></input>
                <div className='rightlastimages'>

                  <img alt=' ' src="./media/4002.svg" />
                  <img alt=' ' src="./media/4000.svg" />
                  <button className='sendbtn'>
                    <img alt=' ' src="./media/4001.svg" />
                    <h1>Done</h1>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
