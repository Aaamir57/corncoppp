
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';



function createData(name, Title, Purchaseon, Catagory, Price, totalreviews, icons) {
    return { name, Title, Purchaseon, Catagory, Price, totalreviews, icons };
}

const rows = [
    createData('1', '#235742', '29/09/2021', 'Business', '$ 9984', "4568"),
    createData('2', '#235742', '29/09/2021', 'Business', '$ 9984', "4568"),
    createData('3', '#235742', '29/09/2021', 'Business', '$ 9984', "4568"),
    createData('4', '#235742', '29/09/2021', 'Business', '$ 9984', "4568"),
    createData('4', '#235742', '29/09/2021', 'Business', '$ 9984', "4568"),

];

export default function Graph() {
   
    return (
        <TableContainer component={Paper} >
            <Table aria-label="simple table" sx={{ borderCollapse: 'collapse' }}  className='tableee'>
                <TableHead>
                    <TableRow>


                        <TableCell className=''>
                            <div className='headicon'>
                                <h1>No.</h1>
                            </div></TableCell>
                        <TableCell className=' '>
                            <div className='headicon'>
                                <h1>Id Customers</h1>
                            </div></TableCell>
                        <TableCell className=''>
                            <div className='headicon'>
                                <h1>Customers Name</h1>
                            </div></TableCell>
                        <TableCell className=''>
                            <div className='headicon'>
                                <h1>Items Name</h1>
                            </div>
                        </TableCell>
                        <TableCell className=''>
                            <div className='headicon'>
                                <h1>Order Date</h1>

                            </div>

                        </TableCell>
                        <TableCell className=''>
                            <div className='headicon'>
                                <h1>Status</h1>

                            </div>

                        </TableCell>
                        <TableCell className=''>
                            <div className='headicon'>
                                <h1>Price</h1>

                            </div>

                        </TableCell>




                    </TableRow>
                </TableHead>
                {rows.map((row,index) => (
                    <TableBody>


                        <TableRow key={row.name} className='tablecontainerss text'  style={{ backgroundColor: index % 2 === 0 ? 'rgba(245, 221, 251, 0.21)' : 'white' }}>

                            <TableCell className=''>
                                <h1>{row.name}</h1>
                            </TableCell>
                            <TableCell ><h1>{row.Title}</h1></TableCell>
                            <TableCell >
                                <div className='loremmaindiv'>
                                    <img alt=' ' src="./media/Ellipse 23.svg" /><h1>James Alison</h1>
                                </div> </TableCell>

                            <TableCell >
                                <div className='loremmaindiv'>
                                    <img alt=' ' src="./media/Ellipse 23.svg" /><h1>Lorem ipsum dolor sit amet</h1>
                                </div>
                            </TableCell>
                            <TableCell ><h1>12/02/2023 08:23</h1></TableCell>
                            <TableCell><button className='btnlorem'><a>paid</a></button></TableCell>
                            <TableCell ><h1>$ 458</h1></TableCell>




                        </TableRow>
                     



                    </TableBody>
                ))}
            </Table>
        </TableContainer>
    );
}