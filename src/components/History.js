import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Navbar } from './Navbar';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 28,
    textAlign: 'left'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 22,
    textAlign: 'left'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const History = () => {

    const [cardsList,updateCardsList] = useState([])

    useEffect(()=>{
        (async ()=>{
            await axios.get('http://localhost:3000/history')
            .then((res)=>{
                res.data = res.data.reverse()
                updateCardsList(res.data)
            })
            .catch((err)=>{
                console.log(err);
            })
        })()
    },[])

  return (
        <div>
            <Navbar/>
                <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Video ID</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Link</StyledTableCell>
                <StyledTableCell align="right">Played On</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {cardsList.map((row) => (
                <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                    {row.video_id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.link}</StyledTableCell>
                <StyledTableCell align="right">{row.time}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </div>
  );
}