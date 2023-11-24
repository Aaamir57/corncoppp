import React from 'react'
import Sidebar from './Sidebar'
import Paginationer from './Paginationer';
import { Pie } from 'react-chartjs-2';
import Productonespeifictwo from './Productonespeifictwo';

export default function Mainproducts() {
    function toggleSidebar() {
        var sidebar = document.getElementById('sidebar');

        sidebar.classList.toggle('open');


    }
    const data =
    {
        labels: ['one', 'two', 'three'],
        datasets: [
            {
                data: [3, 6, 9],
                backgroundColor: ['#88219E', 'rgba(126, 85, 135, 0.20)', '#3F0065']
            }
        ]

    };
    const options = {

    }


    return (
        <div>
            <div className='mainproducts'>
                <div className='leftmainproductsidebar'>
                    <Sidebar />
                </div>
                <div className='rightmainproductcontent'>


                    <div className='rightmainproductoneee'>
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


                    <div className='rightmainproducttwoo'>
                        <button className='arrowbutton'>
                            <img alt=' ' src="./media/75.svg" />
                        </button>
                        <div className='productdetailtexts'>
                            <h1>Back to product list</h1>
                            <h2>Product Details</h2>
                        </div>
                    </div>


                    <div className='rightmainproductthree'>
                        <div className='loremipsumtext loremtextrigntcontentone'>
                            <div className='loremipsumtext1'>
                                <h1>Lorem ipsum dolor sit amet - onsectetur</h1><span>(1,456)</span>
                            </div>
                            <div className='loremipsumtextmain'>
                                <div className='loremipsumtext22'>
                                    <img alt=' ' src="./media/78.svg" />
                                    <h1>Business</h1>
                                </div>
                                <div className='loremipsumtext33'>
                                    <img alt=' ' src="./media/77.svg" />
                                    <h1>Retail</h1>
                                </div>
                                <div className='loremipsumtext44'>
                                    <img alt=' ' src="./media/78.svg" />
                                    <h1>Automation</h1>
                                </div>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the  1500s
                                , when an unknown printer
                                took a galley of type and scrambled it to make a type specimen book.</p>

                            <img alt=' ' src="./media/20.png" className='firstbigimages' />
                            <div className='imagesthree'>
                                <img alt=' ' src="./media/21.png" className='img2s' />
                                <img alt=' ' src="./media/22.png" className='img2s' />
                                <img alt=' ' src="./media/23.png" className='img2s' />
                            </div>
                        </div>
                        <div className='loremtextrigntcontenttwo'>
                            <div className='loremtextrigntcontenttwoone'>
                                <div className='codeno'>
                                    <h1>#AB2432A</h1>
                                </div>
                                <div className='codenomain'>
                                    <div className='ninehundred'>
                                        <h1> $ 900</h1>
                                    </div>
                                    <button className='livepreviewbtns'>
                                        <img alt=' ' src="./media/76.svg" />
                                        <h1>Live preview</h1>
                                    </button>
                                </div>
                            </div>
                            <div className='loremtextrigntcontenttwotwo'>


                                <Productonespeifictwo imageUrl="./media/Line 7.svg" h1text="Total Buyerssss" imageurl2="./media/Vector(22).svg"
                                    image1="./media/Group 203(3).svg"

                                />
                                <Productonespeifictwo imageUrl="./media/Line 7(1).svg" h1text="Total Buyers" imageurl2="./media/Vector(23).svg"
                                    image1="./media/Group 203(3).svg"
                                />
                            </div>
                           
                            <div
                                className="chartmainproduct"> <Pie
                                    data={data}
                                    options={options}></Pie>

                            </div>
                            <div className='detailsmainproduct'>
                                <h1>Details</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the indust
                                    ry's standard dummy text ever since the  1500s,
                                    when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book.</p>

                            </div>
                            <div className='filtersbusinessonly'>
                                <div className='loremipsumtext22'>
                                    <img alt=' ' src="./media/78.svg" />
                                    <h1>Business</h1>
                                </div>
                                <div className='loremipsumtext22'>
                                    <img alt=' ' src="./media/78.svg" />
                                    <h1>Business</h1>
                                </div>
                                <div className='loremipsumtext22'>
                                    <img alt=' ' src="./media/78.svg" />
                                    <h1>Business</h1>
                                </div>
                                <div className='loremipsumtext22'>
                                    <img alt=' ' src="./media/78.svg" />
                                    <h1>Business</h1>
                                </div>
                            </div>
                            <div className='filtersbusinessonly'>
                                <div className='loremipsumtext22'>
                                    <img alt=' ' src="./media/78.svg" />
                                    <h1>Business</h1>
                                </div>
                                <div className='loremipsumtext22'>
                                    <img alt=' ' src="./media/78.svg" />
                                    <h1>Business</h1>
                                </div>
                                <div className='loremipsumtext22'>
                                    <img alt=' ' src="./media/78.svg" />
                                    <h1>Business</h1>
                                </div>
                                <div className='loremipsumtext22'>
                                    <img alt=' ' src="./media/78.svg" />
                                    <h1>Business</h1>
                                </div>
                            </div>
                            <div className='filtersbusinessonly'>
                                <div className='loremipsumtext22'>
                                    <img alt=' ' src="./media/78.svg" />
                                    <h1>Business</h1>
                                </div>
                                <div className='loremipsumtext22'>
                                    <img alt=' ' src="./media/78.svg" />
                                    <h1>Business</h1>
                                </div>
                                <div className='loremipsumtext22'>
                                    <img alt=' ' src="./media/78.svg" />
                                    <h1>Business</h1>
                                </div>
                                <div className='loremipsumtext22'>
                                    <img alt=' ' src="./media/78.svg" />
                                    <h1>Business</h1>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='rightmainproducfour'>
                        <div className='rightmainproducfourone'>
                            <div className='mainjohnsonalexs'>
                                <div className='johnsonimagediv'>
                                    <img alt=' ' src="./media/207.svg" className='firstimagees' />
                                    <div className='johnsonalexs'>
                                        <h1>Johnson Alex</h1>
                                        <p>29 Aug 2020</p>
                                    </div>
                                    <div className='johnsonstar'>
                                        <span>4.2/5</span>
                                        <img alt=' ' src="./media/93.svg" />
                                    </div>
                                </div>
                                <div className='Qsection'>
                                    <img alt=' ' src="./media/96.svg"  className='qsectionimg1'/>
                                    <span>7</span>
                                    <img alt=' ' src="./media/95.svg" />
                                </div>
                                <p className='texts'>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the
                                    industry's standard  text ever
                                    since the 1500s, when an unknown printer took a galley of type and scrambled
                                    it to make a type specimen book. It survived not only
                                    five centuries, but also the leap into electronic typesetting, remaining
                                    essentially unchanged. </p>
                            </div>
                            <div className='mainjohnsonalexstwo'>
                                <div className='johnsonimagediv'>
                                    <img alt=' ' src="./media/207.svg" className='firstimagees' />
                                    <div className='johnsonalexs'>
                                        <h1>Johnson Alex</h1>
                                        <p>29 Aug 2020</p>
                                    </div>
                                    <div className='johnsonstar'>
                                        <span>4.2/5</span>
                                        <img alt=' ' src="./media/93.svg" />
                                    </div>
                                </div>
                                <div className='Qsection'>
                                    <img alt=' ' src="./media/96.svg"  className='qsectionimg1'/>
                                    <span>7</span>
                                    <img alt=' ' src="./media/95.svg" />
                                </div>
                                <p className='texts'>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the
                                    industry's standard  text ever
                                    since the 1500s, when an unknown printer took a galley of type and scrambled
                                    it to make a type specimen book. It survived not only
                                    five centuries, but also the leap into electronic typesetting, remaining
                                    essentially unchanged. </p>
                            </div>
                            <div className='mainjohnsonalexsthree'>
                                <div className='johnsonimagediv'>
                                    <img alt=' ' src="./media/207.svg" className='firstimagees' />
                                    <div className='johnsonalexs'>
                                        <h1>Johnson Alex</h1>
                                        <p>29 Aug 2020</p>
                                    </div>
                                    <div className='johnsonstar'>
                                        <span>4.2/5</span>
                                        <img alt=' ' src="./media/93.svg" />
                                    </div>
                                </div>
                                <div className='Qsection'>
                                    <img alt=' ' src="./media/96.svg"  className='qsectionimg1'/>
                                    <span>7</span>
                                    <img alt=' ' src="./media/95.svg" />
                                </div>
                                <p className='texts'>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the
                                    industry's standard  text ever
                                    since the 1500s, when an unknown printer took a galley of type and scrambled
                                    it to make a type specimen book. It survived not only
                                    five centuries, but also the leap into electronic typesetting, remaining
                                    essentially unchanged. </p>
                            </div>
                        </div>
                        <div className='rightmainproducfourline'>
                        </div>
                        <div className='rightmainproducfourtwo'>
                            <button className='publushbtn'>
                                <div className='publishbtntext'>
                                    <h1>Publish review</h1>
                                    <img alt=' ' src="./media/800.svg" />
                                </div>
                            </button>
                            <button className='publushbtntwo'>
                                <div className='publishbtntext'>
                                    <h1>Respond to review</h1>
                                    <img alt=' ' src="./media/805.svg" />
                                </div>
                            </button>
                            <div className='down'>
                                <h1>Download</h1>
                                <img alt=' ' src="./media/802.svg" />
                            </div>
                            <div className='down2'>
                                <h1>Delete Review</h1>
                                <img alt=' ' src="./media/803.svg" />
                            </div>
                        </div>
                    </div>


                    <div className='rightmainproducfive'>
                        <Paginationer />
                    </div>
                </div>

            </div>
        </div>
    )
}
