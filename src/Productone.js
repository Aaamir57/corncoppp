import React from 'react'
import Productonespeific from './Productonespeific'

export default function Productone() {
    return (
        <div>
            <div class="row maintotalbuyers median-total-remove">
                <div class="col  maintotalbuyers1">

                    <Productonespeific imageUrl="./media/Line 7.svg" h1text="Total Buyerssss" imageurl2="./media/Vector(22).svg"
                        image1="./media/Group 203.svg"

                    />
                    <Productonespeific imageUrl="./media/Line 7(1).svg" h1text="Total Buyers" imageurl2="./media/Vector(23).svg"
                        image1="./media/Group 203(3).svg"
                    />
                    <Productonespeific imageUrl="./media/Line 7(2).svg" h1text="Total Buyers" imageurl2="./media/Vector(23).svg"
                        image1="./media/Group 203(2).svg"
                    />
                    <Productonespeific imageUrl="./media/Line 7.svg" h1text="Total Buyerssss" imageurl2="./media/Vector(22).svg"
                        image1="./media/Group 203(3).svg"
                    />

                </div>

            </div>




            <div class="row maintotalbuyers median-main-total">
                <div class="col  maintotalbuyers1">
                    <div className='totalbuyerdivfirsttwo'>
                        <Productonespeific imageUrl="./media/Line 7.svg" h1text="Total Buyerssss" imageurl2="./media/Vector(22).svg"
                            image1="./media/Group 203.svg"

                        />
                        <Productonespeific imageUrl="./media/Line 7(1).svg" h1text="Total Buyers" imageurl2="./media/Vector(23).svg"
                            image1="./media/Group 203(3).svg"
                        />
                    </div>

                    <div className='totalbuyerdivlasttwo'>
                        <Productonespeific imageUrl="./media/Line 7(2).svg" h1text="Total Buyers" imageurl2="./media/Vector(23).svg"
                            image1="./media/Group 203(2).svg"
                        />
                        <Productonespeific imageUrl="./media/Line 7.svg" h1text="Total Buyerssss" imageurl2="./media/Vector(22).svg"
                            image1="./media/Group 203(3).svg"
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}
