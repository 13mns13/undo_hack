import { DB_HISTORY, DB_DATA } from "./db.js";

const stock = [...await DB_DATA.find()].map(e=>e.toJSON())
const result = {}
for (let item_e of stock){
    await new Promise(async res_r=>{
        const start = new Date()
        start.setMonth(start.getMonth()-12)
        const items = [...await  DB_HISTORY.find({symbol:item_e.symbol,date:{$gte:start}}).sort({date:1})].map(e=>e.toJSON()).reverse()
        const res = []
        result[item_e.symbol] = []
        let datas = []
        const datetime =[]
        items.map(e=>{
        const d = new Date(e.date)
        const ch = datetime.includes(d.getMonth()+""+d.getFullYear())
        if (d.getMonth()%3==0 && !ch &&datas.length>0){
            res.push([...datas])
            datas = []
        }else{
            if(!ch){
                datetime.push(d.getMonth()+""+d.getFullYear())
            }
            datas.push(e)
        }
        })
        res.push([...datas])
        await res.map(e=>{
            const max = Math.max(...e.map(e=>e.close))
            const item_max = e.find(ee=>ee.close==max)
            const _items = e.filter((ee,ii)=>ii>e.findIndex(ee=>ee.close==max))
            const _max = Math.max(..._items.map(ee=>ee.close))
            const item_day = _items.find(ee=>ee.close==_max)
            if(_items.length==0){
                return
            }
            const item_day_one =_items[_items.length-1].close
            const gap = 100*(max-item_day_one)/max
            const oneDay = 1000 * 60 * 60 * 24;
            const diffInTime = new Date(item_max.date).getTime() - new Date(item_day.date).getTime();
            const diffInDays = Math.round(diffInTime / oneDay);
            result[item_e.symbol].push({
                gap,
                diffInDays
            })
        })
        res_r()
    })
  
}
const items = []
for (let key in result){
    if(result[key].length==0){
        continue 
    }
    items.push({
        symbol:key,
        asg: result[key].map(e=>e.diffInDays).reduce((a,b)=>a+b,0)/result[key].length,
        gap: result[key].map(e=>e.gap)[result[key].length-1]

    })

}
