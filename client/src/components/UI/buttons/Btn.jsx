import React from 'react'
import classes from './Btn.module.scss'

const Btn = ({children, ...props}) => {  
    return (
        <a {...props} className={classes.Btn} type='button'>
            {children}
        </a>
    )
}
export default Btn