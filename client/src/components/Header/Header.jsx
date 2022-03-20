import React from 'react'

import c from '../../img/c.svg'
import chart from '../../img/chart.mp4'
import russ from '../../img/russ.svg'
import europ from '../../img/europ.svg'
import Btn from '../UI/buttons/Btn'
import classes from './Header.module.scss'
import ScrollAnimation from 'react-animate-on-scroll';


const Header = () => {
    return (
        <>

        <header className={classes.Header}>
            <div className={classes.blure}>
                <div className='container'>
                    
                    <div className={classes.col}>
                        <h1 className={classes.title}>Начни инвистировать прямо сейчас вместе с нами!</h1>
                        <div className={classes.row}>
                            <video className={classes.chart} autoPlay loop preload>
                                <source src={chart}/>
                            </video>
                            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{width:'100%', maxHeight:'', margin:'10px 0'}}>
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={europ} className="d-block w-50" style={{transform:'translate(50%)'}} />
                                        <div className="carousel-caption d-none d-md-block" style={{background:'#1A81FF', borderRadius:15}}>
                                            <h5 style={{fontWeight:600}}>Зарубежные рынки</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={russ} className="d-block w-50"  style={{transform:'translate(50%)'}} />
                                        <div className="carousel-caption d-none d-md-block" style={{background:'#1A81FF', borderRadius:15}}>
                                            <h5 style={{fontWeight:600}}>Российские рынки</h5>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className={classes.row} style={{justifyContent:'flex-end'}}>
                            <div className={classes.animation}>
                                <img id={classes.coin1} src={c} />
                                <img id={classes.coin2} src={c} />
                                <img id={classes.coin3} src={c} />
                                <img id={classes.coin4} src={c} />
                                <img id={classes.coin5} src={c} />
                                <img id={classes.coin6} src={c} />
                                <img id={classes.coin7} src={c} />
                                <img id={classes.coin8} src={c} />
                                <img id={classes.coin9} src={c} />
                                <img id={classes.coin10} src={c} />
                            </div>
                            <div className={classes.hero}>
                                <p className={classes.disc}>Не задумывайтесь о времени покупки. Мы подскажем когда и что будет выгодным. Начинай вкладывать и зарабатывать на инвестициях уже сейчас!</p>
                                <Btn href='#Start' data-main style={{maxWidth:250}}>
                                    Попробовать сейчас
                                    <box-icon name='right-arrow-circle' color='#0084FF'></box-icon>
                                </Btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        </>
    )
}
export default Header