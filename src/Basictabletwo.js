import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



function createData(name, Title, Purchaseon, Catagory, Price, totalreviews, icons) {
    return { name, Title, Purchaseon, Catagory, Price, totalreviews, icons };
}

const rows = [
    createData('Frozen yoghurt', 'Product Title', '29/09/2021', 'Business', '$ 9984', "4568"),
    createData('Frozen yoghurt', 'Product Title', '29/09/2021', 'Business', '$ 9984', "4568"),
    createData('Frozen yoghurt', 'Product Title', '29/09/2021', 'Business', '$ 9984', "4568"),
    createData('Frozen yoghurt', 'Product Title', '29/09/2021', 'Business', '$ 9984', "4568"),
    createData('Frozen yoghurt', 'Product Title', '29/09/2021', 'Business', '$ 9984', "4568"),
    createData('Frozen yoghurt', 'Product Title', '29/09/2021', 'Business', '$ 9984', "4568"),
    createData('Frozen yoghurt', 'Product Title', '29/09/2021', 'Business', '$ 9984', "4568"),
];

export default function Basictabletwo() {
    return (
        <TableContainer component={Paper} >
            <Table aria-label="simple table" sx={{ borderCollapse: 'collapse' }} className='tablebig'>
                <TableHead>
                    <TableRow className='headtable'>

                        <TableCell ></TableCell>
                        <TableCell >
                            <div >
                                <h1>Title</h1> 
                            </div></TableCell>
                        <TableCell >
                            <div>
                                <h1>Product id</h1>
                            </div></TableCell>
                        <TableCell >
                            <div >
                                <h1>Catagory</h1> 
                            </div></TableCell>
                            <TableCell >
                            <div >
                                <h1>URL</h1> 
                            </div></TableCell>
                        <TableCell >
                            <div>
                                <h1>Price</h1> 
                            </div>
                        </TableCell>
                        <TableCell >
                            <div >
                                <h1>Reviews</h1>
                                
                            </div>

                        </TableCell>
                        <TableCell >
                            <div >
                                <h1>Sales</h1>
                               
                            </div>

                        </TableCell>
                        

                        <TableCell ><h1>Action</h1></TableCell>
                    </TableRow>
                </TableHead>
               
                <TableBody>
                {rows.map((row) => (

                        <TableRow key={row.name} className='mainrowtable'>

                            <TableCell className=''>
                                <img alt=' ' src="./media/111.png" className='firsttableimg' />
                            </TableCell>
                            <TableCell ><h2>{row.Title}</h2> </TableCell>
                            <TableCell ><h1>#A86DZds</h1></TableCell>
                            <TableCell ><h1>{row.Catagory}</h1></TableCell>
                            <TableCell ><h1>www.titile.com</h1></TableCell>
                            <TableCell >
                            <div className='pricesection'>
                            <h4>{row.Price}</h4>
                           
                            </div>
                            
                            </TableCell>
                            <TableCell><h1>{row.totalreviews}</h1></TableCell>
                            <TableCell ><h3>$ 256</h3>
                            </TableCell>                           
                           <TableCell><div className='tableicons'>
                                        <img alt=' ' src="./media/900.svg" />
                                        <img alt=' ' src="./media/113.svg" />
                                        <img alt=' ' src="./media/901.svg" />
                                    </div></TableCell>
                        </TableRow>
                       
                        ))}
                </TableBody>
                
               
            </Table>
        </TableContainer>
    );
}