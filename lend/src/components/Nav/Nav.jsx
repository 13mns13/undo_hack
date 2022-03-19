import React,{useState} from "react"
import logo_mob from '../../img/logo_mob.png'
import classes from './Nav.module.css'

const Nav = () => {
    const [menu, setMenu]= useState(false)
    return (
        <>
            <nav className={classes.nav}>
                <div className='container'>
                    <div className={classes.nav_row}>
                    <a href="/" className={classes.logo}>UNDO</a>
                        <ul className={classes.nav__list}>
                            <li className={classes.nav__list_item}><a href='/'>Домой</a></li>
                            <li className={classes.nav__list_item}><a href='#About'>О нас</a></li>
                        </ul>
                        <a className={classes.nav_btn} href='//dev.xox.su'>Попробовать
                        </a>
                    </div>
                </div>
            </nav>
            <nav className={classes.nav_mobile} style={{background:"#EFF6FF", height:50}}>
                <div className='container'>
                    <div className={classes.nav_row}>
                        <div className={classes.logo} style={{cursor:"pointer"}}>
                            <img className={classes.logo_mob} src={logo_mob} />
                        </div>
                        <div className={classes.menu} onClick={()=>setMenu(e=>!e)} >                        
                            {!menu?<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.667 8.00008C26.667 7.2637 26.07 6.66675 25.3337 6.66675H5.33366C4.59728 6.66675 4.00032 7.2637 4.00032 8.00008C4.00032 8.73646 4.59728 9.33341 5.33366 9.33341H25.3337C26.07 9.33341 26.667 8.73646 26.667 8.00008Z" fill="#3A3A3A"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.667 16.0001C26.667 15.2637 26.07 14.6667 25.3337 14.6667H12.0003C11.2639 14.6667 10.667 15.2637 10.667 16.0001C10.667 16.7365 11.2639 17.3334 12.0003 17.3334H25.3337C26.07 17.3334 26.667 16.7365 26.667 16.0001Z" fill="#3A3A3A"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.667 24.0001C26.667 23.2637 26.07 22.6667 25.3337 22.6667H17.3337C16.5973 22.6667 16.0003 23.2637 16.0003 24.0001C16.0003 24.7365 16.5973 25.3334 17.3337 25.3334H25.3337C26.07 25.3334 26.667 24.7365 26.667 24.0001Z" fill="#3A3A3A"/>
                            </svg>
                            :
                            <svg className={classes.close} width="32" height="32" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5 1.5L1.5 16.5" stroke="#3A3A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.5 16.5L1.5 1.5" stroke="#3A3A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>}
                        </div>
                    </div>
                    
                </div>
            </nav>
        </>
    )
}
export default Nav;