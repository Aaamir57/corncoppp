
import Header from './Header'
import Footer from './Footer'

import React from 'react';

export default function Myproducts() {
    // const [data, setData] = useState([
    //     { id: 1, name: 'Item 1', price: 10 },
    //     { id: 2, name: 'Item 2', price: 20 },
    //     // Add more data items as needed
    //   ]);
    return (
        <div>
            <Header />
             {/* <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table> */}
            <div className='alignmentmyproduct'>
                <div class="container-fluid text-center">
                    <div class="row">
                        <div class="col">
                            <div className=' mainmyproductshead'>
                                <h1>My Products</h1>
                                <div className='activearchive'>
                                    <h2>Active</h2>
                                    <h2>Archive</h2>
                                    <div className='relevencediv'>
                                        <img alt=' ' src="./media/100.svg" />
                                        <img alt=' ' src="./media/101.svg" />
                                        <h2>Relevance</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid text-center">
                    <div class="row">
                        <div class="col">
                            <div className='searchforproduct'>
                                <div className='leftsearchpro'>
                                    <div className='Qsearch'>
                                        <img alt=' ' src="./media/105.svg" />
                                        <img alt=' ' src="./media/104.svg" />
                                    </div>
                                    <input placeholder='Search for products'></input>
                                </div>
                                <div className='rightsearchpro'>


                                    <img alt=' ' src="./media/105.svg" />
                                    <img alt=' ' src="./media/104.svg" />

                                    <h1>Filter</h1>
                                    <img alt=' ' src="./media/102.svg" />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="container-fluid text-center">
                    <div class="row">
                        <div class="col">
                            <div className='productbusinessmain'>
                                <div className='leftbusinesspro'>
                                    <div className='medianbusi'>
                                        <div className='businespro1'>
                                            <h1>Business</h1>
                                            <img alt=' ' src="./media/103.svg" />
                                        </div>
                                        <div className='businespro1'>
                                            <h1>Analytics</h1>
                                            <img alt=' ' src="./media/103.svg" />
                                        </div>
                                    </div>
                                    <div className='medianbusi'>
                                        <div className='businespro1'>
                                            <h1>Learning</h1>
                                            <img alt=' ' src="./media/103.svg" />
                                        </div>
                                        <div className='businespro1'>
                                            <h1>Sales  </h1>
                                            <img alt=' ' src="./media/103.svg" />
                                        </div>
                                    </div>

                                </div>
                                <div className='rightbusinesspro'>
                                    <div className='rightbtnbuss1'>
                                        <h6>From</h6>
                                        <input type="text" class="form-control" id="date" name="date" placeholder="29/02/2013" />
                                    </div>
                                    <div className='rightbtnbuss1'>
                                        <h6>To</h6>
                                        <input type="text" class="form-control" id="date" name="date" placeholder="29/02/2013" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid text-center ">
                    <div class="row">
                        <div class="col">
                            <div className='maintableproduct'>

                                <div className='tablecontainers'>

                                    <div className='textsect'>
                                        <span className='firsttableimgs'></span>
                                        <div className='headmyproo'>
                                            <h1>Title</h1>
                                            <img alt=' ' src="./media/100.svg" />
                                        </div>
                                        <div className='headmyproo purchase'>
                                            <h1>Purchase on</h1>
                                            <img alt=' ' src="./media/100.svg" />
                                        </div>
                                        <div className='headmyproo catagory'>
                                            <h1>Catagory</h1>
                                            <img alt=' ' src="./media/100.svg" />
                                        </div>
                                        <div className='headmyproo price' >
                                            <h1>Price</h1>
                                            <img alt='' src="./media/100.svg" />
                                        </div>
                                        <div className='headmyproo total'>
                                            <h1>Total Reviews</h1>
                                            <img alt=' ' src="./media/100.svg" />
                                        </div>

                                    </div>

                                    <div className='tableicon action'>
                                        <h1>Action</h1>
                                    </div>
                                </div>
                                <div className='tablecontainer'>

                                    <div className='textsect'>
                                        <img alt=' ' src="./media/111.png" className='firsttableimg'  />
                                        <h1>Product Title</h1>
                                        <h2>29/09/2021</h2>
                                        <h3>Business</h3>
                                        <h4>$ 9984</h4>
                                        <h5>4568</h5>
                                    </div>

                                    <div className='tableicon'>
                                        <img alt=' ' src="./media/110.svg" />
                                        <img alt=' ' src="./media/113.svg" />
                                        <img alt=' ' src="./media/112.svg" />
                                        <img alt=' ' src="./media/113.svg" />
                                        <img alt=' ' src="./media/111.svg" />
                                    </div>
                                </div>
                                <div className='tablecontainer'>

                                    <div className='textsect'>
                                        <img alt=' ' src="./media/111.png" className='firsttableimg' />
                                        <h1>Product Title</h1>
                                        <h2>29/09/2021</h2>
                                        <h3>Business</h3>
                                        <h4>$ 9984</h4>
                                        <h5>4568</h5>
                                    </div>

                                    <div className='tableicon'>
                                        <img alt=' ' src="./media/110.svg" />
                                        <img alt=' ' src="./media/113.svg" />
                                        <img alt=' ' src="./media/112.svg" />
                                        <img alt=' ' src="./media/113.svg" />
                                        <img alt=' ' src="./media/111.svg" />

                                    </div>
                                </div>
                                <div className='tablecontainer'>

                                    <div className='textsect'>
                                        <img alt=' ' src="./media/111.png" className='firsttableimg' />
                                        <h1>Product Title</h1>
                                        <h2>29/09/2021</h2>
                                        <h3>Business</h3>
                                        <h4>$ 9984</h4>
                                        <h5>4568</h5>
                                    </div>

                                    <div className='tableicon'>
                                        <img alt=' ' src="./media/110.svg" />
                                        <img alt=' ' src="./media/113.svg" />
                                        <img alt=' ' src="./media/112.svg" />
                                        <img alt=' ' src="./media/113.svg" />
                                        <img alt=' ' src="./media/111.svg" />
                                    </div>
                                </div>
                                <div className='tablecontainer'>

                                    <div className='textsect'>
                                        <img alt=' ' src="./media/111.png" className='firsttableimg' />
                                        <h1>Product Title</h1>
                                        <h2>29/09/2021</h2>
                                        <h3>Business</h3>
                                        <h4>$ 9984</h4>
                                        <h5>4568</h5>
                                    </div>

                                    <div className='tableicon'>
                                        <img alt=' ' src="./media/110.svg" />
                                        <img alt=' ' src="./media/113.svg" />
                                        <img alt=' ' src="./media/112.svg" />
                                        <img alt=' '  src="./media/113.svg" />
                                        <img alt=' ' src="./media/111.svg" />
                                    </div>
                                </div>
                                <div className='tablecontainer'>

                                    <div className='textsect'>
                                        <img alt=' ' src="./media/111.png" className='firsttableimg' />
                                        <h1>Product Title</h1>
                                        <h2>29/09/2021</h2>
                                        <h3>Business</h3>
                                        <h4>$ 9984</h4>
                                        <h5>4568</h5>
                                    </div>

                                    <div className='tableicon'>
                                        <img alt=' ' src="./media/110.svg" />
                                        <img alt=' ' src="./media/113.svg" />
                                        <img alt=' ' src="./media/112.svg" />
                                        <img alt=' ' src="./media/113.svg" />
                                        <img alt=' ' src="./media/111.svg" />
                                    </div>
                                </div>
                                <div className='tablecontainer'>

                                    <div className='textsect'>
                                        <img alt=' ' src="./media/111.png" className='firsttableimg' />
                                        <h1>Product Title</h1>
                                        <h2>29/09/2021</h2>
                                        <h3>Business</h3>
                                        <h4>$ 9984</h4>
                                        <h5>4568</h5>
                                    </div>

                                    <div className='tableicon'>
                                        <img alt=' ' src="./media/110.svg" />
                                        <img alt=' ' src="./media/113.svg" />
                                        <img alt=' ' src="./media/112.svg" />
                                        <img alt=' ' src="./media/113.svg" />
                                        <img alt=' ' src="./media/111.svg" />
                                    </div>
                                </div>
                                <div className='tablecontainer'>

                                    <div className='textsect'>
                                        <img alt=' ' src="./media/111.png" className='firsttableimg' />
                                        <h1>Product Title</h1>
                                        <h2>29/09/2021</h2>
                                        <h3>Business</h3>
                                        <h4>$ 9984</h4>
                                        <h5>4568</h5>
                                    </div>

                                    <div className='tableicon'>
                                        <img alt=' ' src="./media/110.svg" />
                                        <img alt=' ' src="./media/113.svg" />
                                        <img alt=' ' src="./media/112.svg" />
                                        <img alt=' ' src="./media/113.svg" />
                                        <img alt=' ' src="./media/111.svg" />
                                    </div>
                                </div>
                                <div className='tablecontainer'>

                                    <div className='textsect'>
                                        <img alt=' ' src="./media/111.png" className='firsttableimg' />
                                        <h1>Product Title</h1>
                                        <h2>29/09/2021</h2>
                                        <h3>Business</h3>
                                        <h4>$ 9984</h4>
                                        <h5>4568</h5>
                                    </div>

                                    <div className='tableicon'>
                                        <img alt=' ' src="./media/110.svg" />
                                        <img alt=' ' src="./media/113.svg" />
                                        <img alt=' ' src="./media/112.svg" />
                                        <img alt=' ' src="./media/113.svg" />
                                        <img alt=' '  src="./media/111.svg" />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div class="container-fluid text-center">
                    <div class="row">
                        <div class="col">
                            <div className='mainpagination'>
                                <h1>Showing 1 to  7 of 132 entries</h1>
                                <div className='pag'>
                                    <div class="pagination">
                                        <a href="#">❮</a>
                                        <a href="#">1</a>
                                        <a href="#" class="active">2</a>
                                        <a href="#">3</a>

                                        <a href="#">❯</a>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>



            

            <Footer />

        </div>
    )
}
