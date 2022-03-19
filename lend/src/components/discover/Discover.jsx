import React from 'react'
import img1 from '../../img/1.png'
import img2 from '../../img/2.png'
import img3 from '../../img/3.png'
import img4 from '../../img/4.png'
import img5 from '../../img/5.png'
import classes from "./Discover.module.css"
import ScrollAnimation from 'react-animate-on-scroll';
const Disсover = () => {
    return (
        <div className={classes.disсover} id='About'>
            <div className="container">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} >
                    <div className={classes.disсover_coll}>
                        <h2 className={classes.title}>Что делает данное приложение?</h2>
                        
                        Показывает дату закрытия реестра,рассчитывает не только гэп, но и время возвращения цены акции,которая была до дивидентной отсечки.<br></br>
                        <p>Помогает инвестору принять верное решение на основе проведённых исследований.</p>
                        <div className={classes.disc}></div>
                        <div  style={{transform: 'translateX(23%)'}} className={classes.img_wrapp}>
                            <img src={img1}/>
                            <img src={img2}/>
                            <img src={img3}/>
                            <img src={img4}/>
                            <img src={img5}/>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}
export default Disсover