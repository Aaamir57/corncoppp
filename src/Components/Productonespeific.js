import React from 'react'

export default function Productonespeific({ imageUrl,h1text,imageurl2,image1 }) {
    return (
        <div>
            <div className='totalbuyerdiv'>
                <div className='linediv'>
                    <img alt=' ' src={imageUrl} />
                    <div className='linetext'>
                        <h1>{h1text}</h1>
                        <h2>1,456</h2>
                    </div>
                    <img alt=' '  src={image1} />
                </div>
                <div className='arowseccc'>
                    <img alt=' ' src={imageurl2} />
                    <span>+6.57%</span>
                    <p>since last month</p>
                </div>
            </div>
        </div>
    )
}
