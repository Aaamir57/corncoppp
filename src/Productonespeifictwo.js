import React from 'react'

export default function Productonespeifictwo({ imageUrl, h1text, imageurl2, image1 }) {
    return (
        <div className='maintotalbuyerdivs'>
            <div className='totalbuyerdivs'>
                <div className='linediv'>
                    <img alt=' ' src={imageUrl} />
                    <div className='linetext'>
                        <h1>{h1text}</h1>
                        <h2>1,456</h2>
                    </div>
                    <img alt=' ' src={image1} />
                </div>
                <div className='arowseccc'>
                    <img alt=' ' src={imageurl2} />
                    <span>+6.57%</span>
                    <p>since last month</p>
                </div>
            </div>
            <div className='januarymain'>
                <div className='januarytext'>
                    <h1>January</h1>
                    <h2>$ 1223</h2>
                </div>
                <img alt=' ' src="./media/000.svg" />
            </div>
            <div className='januarymain'>
                <div className='januarytext'>
                    <h1>February</h1>
                    <h2>$ 1223</h2>
                </div>
                <img alt=' ' src="./media/001.svg" />
            </div>
        </div>
    )
}
