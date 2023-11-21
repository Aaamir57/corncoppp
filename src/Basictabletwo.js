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
        <TableContainer component={Paper} className='maincontain'>
            <Table aria-label="simple table" sx={{ borderCollapse: 'collapse' }} className='contain'>
                <TableHead>
                    <TableRow>

                        <TableCell className='leftproductlist headicon'></TableCell>
                        <TableCell className='leftproductlist headicon'>
                            <div className='headicon'>
                                <h1>Title</h1> <img alt='' src="./media/100.svg" />
                            </div></TableCell>
                        <TableCell className='leftproductlist headicon'>
                            <div className='headicon'>
                                <h1>Purchase on</h1> <img alt='' src="./media/100.svg" />
                            </div></TableCell>
                        <TableCell className='leftproductlist headicon'>
                            <div className='headicon'>
                                <h1>Catagory</h1> <img alt='' src="./media/100.svg" />
                            </div></TableCell>
                        <TableCell className='leftproductlist headicon'>
                            <div className='headicon'>
                                <h1>Price</h1> <img alt='' src="./media/100.svg" />
                            </div>
                        </TableCell>
                        <TableCell className='leftproductlist headicon'>
                            <div className='headicon'>
                                <h1>Reviews</h1>
                                <img alt='' src="./media/100.svg" />
                            </div>

                        </TableCell>
                        <TableCell className='leftproductlist headicon'>
                            <div className='headicon'>
                                <h1>Status</h1>
                                <img alt='' src="./media/100.svg" />
                            </div>

                        </TableCell>
                        

                        <TableCell className='rightpro'><h1>Action</h1></TableCell>
                    </TableRow>
                </TableHead>
                {rows.map((row) => (
                <TableBody>
                    

                        <TableRow key={row.name} className='tablecontainerss'>

                            <TableCell className='leftproductlistf'>
                                <img alt=' ' src="./media/111.png" className='firsttableimg' />
                            </TableCell>
                            <TableCell className='producttitle leftproductlist'><h1>{row.Title}</h1> </TableCell>
                            <TableCell className='purchaseon leftproductlist'><h1>{row.Purchaseon}</h1></TableCell>
                            <TableCell className='catagory leftproductlist'><h1>{row.Catagory}</h1></TableCell>
                            <TableCell className='price leftproductlist'><h1>{row.Price}</h1></TableCell>
                            <TableCell className='totalreviews leftproductlist'><h1>{row.totalreviews}</h1></TableCell>
                            <TableCell className='totalreviews leftproductlist'><h1>256</h1>
                            </TableCell>
                           

                            <TableCell><div className='tableicons'>
                                        <img alt=' ' src="./media/110.svg" />
                                        <img alt=' ' src="./media/113.svg" />
                                        <img alt=' ' src="./media/112.svg" />
                                        
                                       
                                    </div></TableCell>
                            
                        </TableRow>
                        <br/>
                        
                       
                   
                </TableBody>
                ))}
            </Table>
        </TableContainer>
    );
}