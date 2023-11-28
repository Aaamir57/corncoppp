import React, { useState } from 'react';
import Sidebartwo from '../Components/Sidebartwo';
import ImageUpload from '../Components/ImageUpload';

import Dropzoneer from "../Components/Dropzoneer"
import Switcher from '../Components/Switcher';
import Autocompletes from '../Components/Autocompletes';
import Imageuploadtwo from '../Components/Imageuploadtwo';

export default function Productform() {
    function toggleSidebar() {
        var sidebar = document.getElementById('sidebar');

        sidebar.classList.toggle('open');


    }


    const [previewImage, setPreviewImage] = useState('');
    const [fileInputKey, setFileInputKey] = useState(Date.now()); // To reset the file input

    const handleFileSelect = (event) => {
        const fileInput = event.target;
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                setPreviewImage(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleImageUpload = () => {
        // Here you can handle the image upload logic
        // For simplicity, let's just reset the file input
        setFileInputKey(Date.now());
    };


    return (
        <div>
            <div className='productformmain'>
                <div className='leftproductformsidebar'>
                    <Sidebartwo />
                </div>
                <div className='rightproductform'>
                    <div className='rightproductformone'>
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


                    <div className='rightproductformtwo'>
                        <div className='rightmainproducttwoo'>
                            <button className='arrowbutton'>
                                <img alt=' ' src="./media/75.svg" />
                            </button>
                            <div className='productdetailtexts'>
                                <h1>Back to product list</h1>
                                <h2>Product Details</h2>
                            </div>
                        </div>
                    </div>


                    <div className='rightproductformthree'>
                        <div className='rightproductformthreeleft'>
                            <div className='rightproductformthreeleftonee'>
                                <h1>Product Name</h1>
                                <input type="text" name="" value='' placeholder='Ecommerce Dashboard - Web AI Products' />
                            </div>
                            <div className='rightproductformthreelefttwo'>
                                <h1>Product Description</h1>
                                <textarea></textarea>
                                <h2>0 / 252 Words</h2>
                            </div>
                            <div className='rightproductformthreeleftthree'>
                                <div className='rightproductformthreeleftthreeone'>
                                    <h1>Product Url</h1>
                                    <div >  <Switcher /></div>

                                </div>
                                <input type="text" name="" value='' placeholder='https://' />
                            </div>
                            <div className='rightproductformthreeleftfour'>
                                <h1>Product Catagory</h1>
                                <div className='aaa'>
                                    <Autocompletes />
                                </div>
                                <div className='medianbusi businesssmainpro'>
                                    <div className='businespro1'>
                                        <h1>Business</h1>
                                        <img alt=' ' src="./media/103.svg" />
                                    </div>
                                    <div className='businespro1'>
                                        <h1>Analytic</h1>
                                        <img alt=' ' src="./media/103.svg" />
                                    </div>
                                </div>

                            </div>
                            <div className='rightproductformthreeleftfive'>
                                <h1>Price</h1>
                                <div className='priceinputmain'>
                                    <div className='priceseconddiv'>
                                        <div className='pricefirstdiv'>
                                            <h1>$</h1>
                                        </div>
                                        <img alt=' ' src="./media/0088.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='rightproductformthreeright'>
                            <div className='productlineonediv'>
                                <h1>Product Images</h1>
                                <img alt=' ' src="./media/ei_exclamation.svg" />
                            </div>
                            <div className='imageuploadmainn'> 
                                <Imageuploadtwo />
                            </div>
                          
                            <div className='productlineonediv'>
                                <h1>Product Demo</h1>
                                <img alt=' ' src="./media/ei_exclamation.svg" />
                            </div><br />
                            <Dropzoneer/>
                            <div className='productformbottombtn'>
                                <button className='discord'>
                                    <h1>Discard</h1>
                                </button>
                                <button className='discord1'>
                                    <h1>Publish Product</h1>
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
