import { DB_USER, DB_DATA, DB_HISTORY } from "./db.js";
import fs from "fs"

export const checkAuth = async(token)=>{
    return await DB_USER.findOne({token})
}




export const  getTop=async ()=>{
    const items = JSON.parse(fs.readFileSync("./top.json"))
    return {
        items
    }
}

export const search = async(name,type, offset=0)=>{
    const count = await DB_DATA.count()
    const items =  [...await DB_DATA.find({
        search: {$regex: name.toLocaleLowerCase()}
    }).skip(offset).limit(5)]
    const data = []
    if (type=="search"){
        return items.map(e=>{
            return {
                name:e.name,
                _id:e._id
            }
        })
    }
    for (let i = 0; i<items.length; i++){
        let e = items[i]
        const start = new Date()
        start.setMonth(start.getMonth()-1)
        const history = [...await DB_HISTORY.find({symbol:e.symbol,date:{$gte:start}}).sort({date:1})]

        data.push(
            {
                ...e.toJSON(),
                history
            }
        )
    }
    
    return {
        data,
        count
    }
}

export const getDataID = async(_id)=>{
    const item = (await DB_DATA.findById(_id)).toJSON()
    const start = new Date()
    start.setMonth(start.getMonth()-3)
    const items = [...await DB_HISTORY.find({symbol:item.symbol,date:{$gte:start}}).sort({date:1})]
    item.history = items
   
    return item
}