import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import classes from './About.module.css'
import p4 from '../../img/about_mob.png'
const About = () => {
    return (
        <section className={classes.about} id='About'>
            <div className="container">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} >
                    <div className={classes.about_row}>
                        <div className={classes.about_img}>
                        <img style={{width:'400px'}} src={p4}/>
                        </div>
                        <div className={classes.about_text}>
                            <h2>Наша команда</h2><br/>
                            <p>Skipper - креативный, одаренный, богатым воображением, неортодоксальный.</p>
                            <p>Rico - неординарный, добросовестный, беспокойный.</p>
                            <p>Kowalski - дисциплинированный, надежный, предусмотрительный и квалифицированный.</p>
                            <p>Prapor-искренний, самостоятельный, преданный, обладает редкими знаниями и навыками.</p></div>
                    
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}
export default About