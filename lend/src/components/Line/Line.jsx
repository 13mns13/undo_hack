import React from 'react'
import classes from "./Line.module.css"
import ScrollAnimation from 'react-animate-on-scroll';
import _ from '../../img/_.png'
const Line = () => {
    
    return (
        <div className={classes.line}>
            <div className="container">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <div className={classes.line_coll}>
                        <div className={classes.qq}></div>
                        <p>Мой основной принцип капиталовложений - идти против общего мнения на том основании, что, если все согласны с их достоинствами, инвестиции неизбежно будут дорогими и, стало быть, непривлекательными.</p>
                        <p>Джон Мейнард Кейнс (1883–1946) — британский экономист.</p>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}
export default Line