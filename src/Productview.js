import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Productview() {
    return (
        <div>
            <Header />
            <div className='alignment'>
                <div class="container-fluid text-center">
                    <div class="row">
                        <div class="col main-product-view">
                            <div className='productdetail'>
                                <button className='arrowbutton'>
                                    <img src="./media/75.svg" />
                                </button>
                                <div className='productdetailtext'>
                                    <h1>Back to product list</h1>
                                    <h2>Product Details</h2>
                                </div>
                                <button className='livepreviewbtn'>
                                    <img src="./media/76.svg" />
                                    <a>Live preview</a>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>




                <div class="container-fluid text-center">
                    <div class="row mainnnn">
                        <div class="col-md-12 col-sm-12 main-lorem-ipsum leftbaseseller">
                            <div className='loremipsumtext'>
                                <div className='loremipsumtext1'>
                                    <h1>Lorem ipsum dolor sit amet - onsectetur</h1><span>(1,456)</span>
                                </div>
                                <div className='loremipsumtextmain'>
                                    <div className='loremipsumtext2'>
                                        <img src="./media/77.svg" />
                                        <h1>Business</h1>
                                    </div>
                                    <div className='loremipsumtext3'>
                                        <img src="./media/78.svg" />
                                        <h1>Retail</h1>
                                    </div>
                                    <div className='loremipsumtext4'>
                                        <img src="./media/77.svg" />
                                        <h1>Automation</h1>
                                    </div>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the  1500s
                                    , when an unknown printer
                                    took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div >
                                <div className='medianscren'>
                                    <img src="./media/20.png" className='firstbigimage' />
                                    <img src="./media/21.png" className='img2' />

                                </div>
                                <div className='medianscren'>
                                    <img src="./media/22.png" className='img2' />
                                    <img src="./media/23.png" className='img2' />

                                </div>
                                <div className='main-lorem-images'>
                                    <img src="./media/20.png" className='firstbigimage' />
                                    <img src="./media/21.png" className='img2' />
                                    <img src="./media/22.png" className='img2' />
                                    <img src="./media/23.png" className='img2' />
                                </div>
                            </div>
                        </div>
                        <div class=" rightbaseseller">
                            <div className='mainbaseprice'>
                                <div className='mainbaseprice1'>
                                    <h1>Base Price</h1><span>$799.99</span>
                                </div>
                                <hr />
                                <div className='mainbasepricelorem'>
                                    <div className='mainbaseprice2'>
                                        <img src="./media/81.svg" />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>
                                    <div className='mainbaseprice2'>
                                        <img src="./media/81.svg" />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>
                                    <div className='mainbaseprice2'>
                                        <img src="./media/81.svg" />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>
                                </div>
                                <div className='mainextendfile'>
                                    <span></span>
                                    <h1>Extend Support to 12 <br />months</h1>
                                    <div className='mainprice'>
                                        <p>$40.32</p>
                                        <h2>$21.99</h2>
                                    </div>

                                </div>
                                <button className='purchaseprooductbtn'>
                                    <img src="./media/91.svg" />
                                    <a>Purchase Product</a>
                                </button>
                                <h1 className='head'>Seller Information</h1>
                                <div className='jamesmens'>
                                    <img src="./media/81.png" />
                                    <div className='jamestext'>
                                        <h1>James and Laura</h1>
                                        <h2>Business Growth Firm</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>

                                </div>
                                <h1 className='head'>Message</h1>

                                <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='Leave us a message ...'>

                                </textarea>
                                <button className='purchaseprooductbtn'>
                                    <img src="./media/92.svg" />
                                    <a>Drop us a message</a>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="container-fluid text-center">
                    <div class="row">
                        <div class="col">
                            <div className='descriptiontext'>
                                <h1>Description</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.
                                    At elementum eu facilisis sed odio morbi. Massa vitae tortor
                                    condimentum lacinia quis vel. Natoque penatibus et magnis dis parturient
                                    montes nascetur ridiculus mus. Eget nulla facilisi etiam dignissim diam. Mauris
                                    pellentesque pulvinar pellentesque habitant. Est placerat in egestas erat imperdiet
                                    sed euismod nisi porta. A pellentesque sit amet porttitor eget. Ipsum dolor sit amet
                                    consectetur adipiscing elit ut. Diam quis enim lobortis scelerisque fermentum dui faucibus.
                                    Venenatis urna cursus eget nunc scelerisque viverra mauris. Odio pellentesque diam volutpat commodo.
                                    Nunc scelerisque viverra mauris in aliquam sem. Sagittis vitae et leo duis ut diam quam nulla.</p>

                            </div>
                        </div>

                    </div>
                </div>
                <div class="container-fluid text-center">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div className='feature'>
                                <h1>Feature</h1>
                                <div className='featuretext'>
                                    <img src="./media/81.svg" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

                                </div>
                                <div className='featuretext'>
                                    <img src="./media/81.svg" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>

                                </div>
                                <div className='featuretext'>
                                    <img src="./media/81.svg" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

                                </div>
                                <div className='featuretext'>
                                    <img src="./media/81.svg" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>

                                </div>
                                <div className='featuretext'>
                                    <img src="./media/81.svg" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

                                </div>
                                <div className='featuretext'>
                                    <img src="./media/81.svg" />
                                    <p>Lorem ipsum dolor sit amet, consectetur </p>

                                </div>
                                <div className='featuretext'>
                                    <img src="./media/81.svg" />
                                    <p>Lorem ipsum dolor sit amet, </p>

                                </div>

                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div className='feature'>
                                <h1>Perks and Benefits</h1>
                                <div className='featuretext'>
                                    <img src="./media/81.svg" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

                                </div>
                                <div className='featuretext'>
                                    <img src="./media/81.svg" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>

                                </div>
                                <div className='featuretext'>
                                    <img src="./media/81.svg" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

                                </div>
                                <div className='featuretext'>
                                    <img src="./media/81.svg" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>

                                </div>
                                <div className='featuretext'>
                                    <img src="./media/81.svg" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

                                </div>
                                <div className='featuretext'>
                                    <img src="./media/81.svg" />
                                    <p>Lorem ipsum dolor sit amet, consectetur </p>

                                </div>
                                <div className='featuretext'>
                                    <img src="./media/81.svg" />
                                    <p>Lorem ipsum dolor sit amet, </p>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div class="container-fluid text-center">
                    <div class="row">
                        <div class="col">
                            <h1 className='head headres'>Price</h1>
                        </div>

                    </div>
                </div>


                <div class="container-fluid text-center">
                    <div class="row">

                        <div class="col medianbaseprice">
                            <div class=" ">

                                <div className='mainbaseprice'>
                                    <div className='mainbaseprice1'>
                                        <h1>Base Price</h1><span>$799.99</span>
                                    </div>
                                    <hr />
                                    <div className='mainbasepricelorem'>
                                        <div className='mainbaseprice2'>
                                            <img src="./media/81.svg" />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        </div>
                                        <div className='mainbaseprice2'>
                                            <img src="./media/81.svg" />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        </div>
                                        <div className='mainbaseprice2'>
                                            <img src="./media/81.svg" />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        </div>
                                    </div>
                                    <div className='mainextendfile'>
                                        <span></span>
                                        <h1>Extend Support to 12 <br />months</h1>
                                        <div className='mainprice'>
                                            <p>$40.32</p>
                                            <h2>$21.99</h2>
                                        </div>

                                    </div>
                                    <button className='purchaseprooductbtn'>
                                        <img src="./media/91.svg" />
                                        <a>Purchase Product</a>
                                    </button>
                                    <h1 className='head'>Seller Information</h1>
                                    <div className='jamesmens'>
                                        <img src="./media/81.png" />
                                        <div className='jamestext'>
                                            <h1>James and Laura</h1>
                                            <h2>Business Growth Firm</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        </div>

                                    </div>
                                    <h1 className='head'>Message</h1>

                                    <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='Leave us a message ...'>

                                    </textarea>
                                    <button className='purchaseprooductbtn'>
                                        <img src="./media/92.svg" />
                                        <a>Drop us a message</a>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div class="container-fluid text-center">
                    <div class="row">
                        <div class="col">
                            <h1 className='reviewhead'>Reviews and Rating</h1>
                        </div>

                    </div>
                </div>
                <div class="container-fluid text-center">
                    <div class="row">
                        <div class="col responsivediv" >
                            <div className='mainjohnsonalex'>
                                <div className='johnsonimagediv'>
                                    <img src="./media/81.png" className='firstimagee' />
                                    <div className='johnsonalex'>
                                        <h1>Johnson Alex</h1>
                                        <p>29 Aug 2020</p>
                                    </div>
                                    <div className='johnsonstar'>
                                        <span>4.2/5</span>
                                        <img src="./media/93.svg" />
                                    </div>
                                </div>
                                <div className='Qsection'>
                                    <img src="./media/96.svg" />
                                    <span>7</span>
                                    <img src="./media/95.svg" />


                                </div>
                                <p className='text'>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the
                                    industry's standard  text ever
                                    since the 1500s, when an unknown printer took a galley of type and scrambled
                                    it to make a type specimen book. It survived not only
                                    five centuries, but also the leap into electronic typesetting, remaining
                                    essentially unchanged. </p>

                            </div>
                            <div className='mainjohnsonalex secondportfolio'>
                                <div className='johnsonimagediv'>
                                    <img src="./media/81.png" className='firstimagee' />
                                    <div className='johnsonalex'>
                                        <h1>Johnson Alex</h1>
                                        <p>29 Aug 2020</p>
                                    </div>
                                    <div className='johnsonstar'>
                                        <span>4.2/5</span>
                                        <img src="./media/93.svg" />
                                    </div>
                                </div>
                                <div className='Qsection'>
                                    <img src="./media/96.svg" />
                                    <span>7</span>
                                    <img src="./media/95.svg" />


                                </div>
                                <p className='text'>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the
                                    industry's standard  text ever
                                    since the 1500s, when an unknown printer took a galley of type and scrambled
                                    it to make a type specimen book. It survived not only
                                    five centuries, but also the leap into electronic typesetting, remaining
                                    essentially unchanged. </p>

                            </div>
                            <div className='mainjohnsonalex thirdportfolio'>
                                <div className='johnsonimagediv'>
                                    <img src="./media/81.png" className='firstimagee' />
                                    <div className='johnsonalex'>
                                        <h1>Johnson Alex</h1>
                                        <p>29 Aug 2020</p>
                                    </div>
                                    <div className='johnsonstar'>
                                        <span>4.2/5</span>
                                        <img src="./media/93.svg" />
                                    </div>
                                </div>
                                <div className='Qsection'>
                                    <img src="./media/96.svg" />
                                    <span>7</span>
                                    <img src="./media/95.svg" />


                                </div>
                                <p className='text'>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the
                                    industry's standard  text ever
                                    since the 1500s, when an unknown printer took a galley of type and scrambled
                                    it to make a type specimen book. It survived not only
                                    five centuries, but also the leap into electronic typesetting, remaining
                                    essentially unchanged. </p>

                            </div>

                        </div>


                    </div>

                </div>
                <div class="pagination">
                    <a href="#">❮</a>
                    <a href="#">1</a>
                    <a href="#" class="active">2</a>
                    <a href="#">3</a>

                    <a href="#">❯</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}
