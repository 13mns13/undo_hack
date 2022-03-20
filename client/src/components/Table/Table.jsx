import React,{useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Skeleton from '@mui/material/Skeleton';
import { getTop } from '../../config';
import Chart from 'react-apexcharts'
import classes from './Table.module.scss'
import ScrollAnimation from 'react-animate-on-scroll';
import {Animated} from "react-animated-css";

const Row = ({row,star,setStar})=> {
    const [open, setOpen] = React.useState(false);
    const state = {
          
      series: [{
        name:row.name,
        data:  row.history.map(e=>e.close)
      }],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: row.history.map(e=>e.date)
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },
    
    
    };

    const click = ()=>{
      if (star.includes(row._id)){
        let index = star.findIndex(e=>e==row._id)
        star.splice(index,1)
      }else{
        star.push(row._id)
      }
      setStar([...star])
      localStorage.setItem("star",JSON.stringify(star))
    }
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row" style={{color:'#1A81FF', fontWeight:600}}><Link style={{textDecoration:'none'}} to={"/stock/"+row._id}>{row.name}</Link></TableCell>
          <TableCell align="right">{ new Date(row.start).toLocaleDateString()}</TableCell>
          <TableCell align="right">{ new Date(row.stop).toLocaleDateString()}</TableCell>
          <TableCell align="right">{row.targetMeanPrice}</TableCell>
          <TableCell align="right">{row.previousClose}</TableCell>
          <TableCell align="right">{row.dividendYield}</TableCell>
          <TableCell align="right">{row.items.gap.toFixed(2)}</TableCell>
          <TableCell align="right">{Math.round(row.items.asg.toFixed(2))}</TableCell>
          <TableCell align="center">
              {star.includes(row._id)&&<box-icon onClick={click} name='star' style={{cursore:'pointer'}}  type='solid' color='#ffe991' ></box-icon>}
              {!star.includes(row._id)&&<box-icon onClick={click} name='star' style={{cursore:'pointer'}}  color='#ffe991' ></box-icon>}
          </TableCell>
        </TableRow>
        <TableRow>
       
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  История
                </Typography>
                {open&&<Chart options={state.options} series={state.series} type="area" height={350} width="100%" />}
              </Box>
            </Collapse>

          </TableCell>
        </TableRow>
      </React.Fragment>
    )
  }




  const _Table = () => {
    const [star, setStar] = useState(JSON.parse(localStorage.getItem("star")||"[]"))
    const [items, setItems] = useState([])

    useEffect(()=>{
    
      getTop().then(e=>{
        if(e.state){
          setItems([...items,...e.items])
        }
      })
    },[])
   
    const items_ = items.sort((a,b)=>{
        return a.items.asg - b.items.asg
    })
  
    return (
        <section className={classes.Table} id='Start'>
            <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
            <div className='container'>
                <div className={classes.col}>
                    <h2 className='title'>Дивидендный календарь</h2>
                
                    <div className={classes.table_wrap}>
                        <TableContainer component={Paper}>
                            <Table aria-label="collapsible table">
                                <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell>Наименование</TableCell>
                                    <TableCell align="right">Последний день для покупки акций</TableCell>
                                    <TableCell align="right">Дата закрытия реестра под дивиденды</TableCell>
                                    <TableCell align="right">Размер дивиденда</TableCell>
                                    <TableCell align="right">Цена акции на закрытие</TableCell>
                                    <TableCell align="right">Дивидентная доходность, %</TableCell>
                                    <TableCell align="right">ГЭП, %</TableCell>
                                    <TableCell align="right">Среднее время возвращения к цене реестра, день</TableCell>
                                    <TableCell align="right">Избранное</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    {items_.map((row) => <Row star={star} setStar={setStar} key={row.name} row={row} />)}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        
                        {items.length==0&&<Box sx={{ width:'100%'}}>
                            <Skeleton style={{height:'100px'}} />
                            <Skeleton animation="wave" style={{height:'100px'}} />
                            <Skeleton animation={false} style={{height:'100px'}} />
                            <Skeleton animation="wave" style={{height:'100px'}} />
                            <Skeleton animation={false} style={{height:'100px'}} />
                            <Skeleton animation="wave" style={{height:'100px'}} />
                        </Box>}
                    </div>

                

                </div>
            </div>
            </ScrollAnimation>
        </section>
    )
}
export default _Table