import React,{useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import classes from './Stock.module.scss'
import { getDataID } from '../../config';
import Chart from 'react-apexcharts'

const Stock = () => {
    const [item, setItem] = useState(null)
    const _id = useParams()._id
    useEffect(()=>{
        getDataID(_id).then(e=>{
            if (e.state){
                setItem(e.item)
            }
        })
    },[_id])
    if (!item){
        return <div></div>
    }
    const state = {
          
        series: [{
          name:item.name,
          data:  item.history.map(e=>e.close)
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
            categories: item.history.map(e=>e.date)
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
      
      
      };
      console.log(item.p.map(e=>e[0]))
      const state2 = {
          
        series: [
          {
            name:"Прогнозированное число",
            data:  item.p.map(e=>e[0].toFixed(2))
          },
          {
            name:"Ожидаемое число",
            data:  item.p.map(e=>e[1].toFixed(2))
          }
        ],
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
            categories: item.p.map((e,i)=> new Date(new Date().getTime()+86400000*(i+1)).toISOString())
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
      
      
      };
    return (
        <section className={classes.Stock}>
            <div className='container'>
                <div className={classes.col}>
                    <div className='bage'>{item.name}</div>
                    <div className={classes.info}>
                        <div className={classes.col}>
                            <p className='disc'>{item.info.address1}</p>
                            <p className='disc'>{item.info.city}, {item.info.state} {item.info.zip}</p>
                            <p className='disc'>{item.info.country}</p>
                            <p className='disc'>{item.info.phone}</p>
                            <a href={item.info.website}>{item.info.website}</a>
                        </div>
                        <div className={classes.col}>
                            <p>Sector(s): <b>{item.info.sector}</b></p>
                            <p>Industry: <b>{item.info.industry}</b></p>
                            <p>Full Time Empoloyees: <b>{item.info.fullTimeEmployees}</b></p>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.col}>
                            <h5>Дата отсечки: <b>{new Date(item.s).toLocaleDateString()}</b></h5>
                            <p className='disc'>Цена: <b>{item.currencySymbol}{item.max?.toFixed(2)}</b></p>
                        </div>
                        {item.gaps&& <div className={classes.col}>                         
                            <h5>На: <b>{new Date(item.gaps?.date).toLocaleDateString()}</b></h5>
                            <p className='disc'>Цена: <b>{item.currencySymbol}{(item.max-item.max*item.gaps.gap/100).toFixed(2)}</b></p>
                            <p className='disc'>Гэп <b>{item.gaps.gap.toFixed(2)}%</b></p>
                        </div>}
                        <div className={classes.col}>
                            <h5>Завтра: <b>{(()=>{
                                const d = new Date()
                                d.setDate(d.getDate()+1)
                                return d.toLocaleDateString()
                            })()}</b></h5>
                            <p className='disc'>Прогноз цены: <b>91$</b></p>
                            <p className='disc'>Прогноз ГЭП: <b>1.2$</b></p>
                        </div>
                    </div>
                    <h2 className='title'>Котировки</h2>
                    <Chart className={classes.Chart}  options={state.options} series={state.series} type="area" height={350} width="100%" />
                    <h2 className='title'>Прогнозирование</h2>
                    <Chart className={classes.Chart}  options={state2.options} series={state2.series} type="area" height={350} width="100%" />
                    {/* ТУТ ГРАФИК ПРОГНОЗА И ВЫВОДЫ ПО НЕМУ */}
                    <p>Исходя из прогносзов, акция достигнит своего максимального значения через 13 дней</p>
                    <p>Исходя из истории находим 3 участок графика и в начале этого участка дату принимаем за благовременную для вложения в акцию</p>


                    <p>Тут расчет по Камневой</p>

                </div>
            </div>
        </section>
    )
}
export default Stock