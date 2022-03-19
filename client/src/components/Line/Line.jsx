import React from 'react'

import p1 from '../../img/p1.png'
import p2 from '../../img/p2.png'
import p4 from '../../img/p4.png'
import p3 from '../../img/p3.png'
import Btn from '../UI/buttons/Btn'
import classes from './Line.module.scss'

const Line = () => {
    return (
        <section className={classes.Line}>
            <div className={classes.blur}>
                <div className='container'>
                    <div className={classes.row}>
                        <h3>Начни торговать на лидирующих биржах прямо сейчас</h3>
                        <Btn data-main style={{marginRight:60}}>Начать!</Btn>
                        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                            <div className="carousel-inner" style={{width:100, heigth:100}}>
                                <div className="carousel-item" >
                                    <img src={p1} className="d-block w-100" />
                                </div>
                                <div className="carousel-item active" >
                                    <img src={p2} className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src={p4} className="d-block w-100" />
                                </div>
                                <div className="carousel-item" >
                                    <img src={p3} className="d-block w-100" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Line