import { useState } from 'react'
import {Link} from "react-router-dom";
import menu from '../../img/menu.svg'
import Search from '../UI/inputs/Search'
import Btn from '../UI/buttons/Btn'
import classes from './Nav.module.scss'


const Nav = () => {
    const [open, setOpen] = useState(false)
   return (
       <div className={classes.nav_wrapper}>
           <div className='container'>
                <nav className={classes.Nav}>
                    <Link to="/" className={classes.logo}>UNDO</Link>
                    <Search placeholder='Введите запрос...' />
                    <Btn>Начать</Btn>
                    <img className={classes.menu} src={menu} onClick={() => {
                        setOpen(e=>!e)
                    }}/>
                </nav>
                <div className={[classes.dropdown, open&&classes.active].join(' ')}>
                    <Search placeholder='Введите запрос...' />
                    <Btn>Начать</Btn>
                </div>
           </div>
       </div>
    )
}
export default Nav