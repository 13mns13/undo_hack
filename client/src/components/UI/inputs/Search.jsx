import React,{useState} from 'react'
import close from '../../../img/close.svg'
import classes from './Search.module.scss'
import {search} from "../../../config"
import {Link} from "react-router-dom";


let index = 0 
const Search = ({...props}) => {
    const [items,setItems] = useState([])
    const [state, setState] = useState("")
    return (
        <div className={classes.wrapper}>
            <div className={classes.Search}>
                <box-icon name='search-alt-2' color='#a7a7a7' ></box-icon>
                <input value={state} type="text" onChange={(e)=>{
                    index++
                    setState(e.target.value)
                    if(e.target.value.length==0){
                        return setItems([])
                    }
                    search(e.target.value, index).then(ee=>{
                        if(ee.state && index ==ee.index){
                            setItems(ee.items)
                        }
                    })
                }} {...props}/>
                {state.length>0&&<img src={close} onClick={()=>{
                    index++
                    setItems([])
                    setState('')
                }} />}
            </div>
            <div className={`${classes.dropdown} ${items.length==0&&classes.hidden}`}>
                {items.map( (item, i) => <Link to={"/stock/"+item._id} onClick={()=>{
                     setItems([])
                     setState('')
                }} key={i} className={classes.item}>{item.name}</Link> )}
            </div>
        </div>
    )
}
export default Search