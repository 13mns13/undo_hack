import img6 from '../../img/6.gif'
import classes from '../Qr/Qr.css'
import ScrollAnimation from 'react-animate-on-scroll';

const Qr = () => {
    return (
        <section className={classes.Qr} >
            <div className="container">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <div  style={{transform: 'translateX(40%)'}} className={classes.Qr_style}>
                    <div style={{marginRight: '100px',marginBottom:'30px'}}  className={classes.Qr_myteam}>
                    <h2>Сканируйте,чтобы начать</h2>
                    </div>
                        <div  className={classes.Qr_text}>
                            
                            <img style={{width:'300px'}}  src={img6}/>

                            
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}
export default Qr