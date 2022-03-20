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
    // const result = {}
    // const res = []
    // result[item.symbol] = []
    // let datas = []
    // const datetime =[]
    // items.reverse().map(e=>{
    //     const d = new Date(e.date)
    //     const ch = datetime.includes(d.getMonth()+""+d.getFullYear())
    //     if (d.getMonth()%3==0 && !ch &&datas.length>0){
    //         res.push([...datas])
    //         datas = []
    //     }else{
    //         if(!ch){
    //             datetime.push(d.getMonth()+""+d.getFullYear())
    //         }
    //         datas.push(e)
    //     }
    //     })
    // res.push([...datas])
    // let s = null
    // let _max_ = null
    // await res.map(e=>{
    //     const max = Math.max(...e.map(e=>e.close))
    //     _max_ = max
    //     const item_max = e.find(ee=>ee.close==max)
    //     const _items = e.filter((ee,ii)=>ii>e.findIndex(ee=>ee.close==max))
    //     const _max = Math.max(..._items.map(ee=>ee.close))
    //     const item_day = _items.find(ee=>ee.close==_max)
    //     if(_items.length==0){
    //         return
    //     }
    //     const item_day_one =_items[_items.length-1].close
    //     const gap = 100*(max-item_day_one)/max
    //     const oneDay = 1000 * 60 * 60 * 24;
    //     const diffInTime = new Date(item_max.date).getTime() - new Date(item_day.date).getTime();
    //     const diffInDays = Math.round(diffInTime / oneDay);
    //     s =item_max.date
    //     result[item.symbol].push({
    //         gap,
    //         diffInDays,
    //         date:_items[_items.length-1].date
    //     })
    // })
    // item.gaps = result[item.symbol][0]
    // item.s = s
    // item.max = _max_
    // item.p = (await method(items.reverse().map(e=>e.close))).data
    return item
}