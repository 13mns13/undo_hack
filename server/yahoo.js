import { DB_DATA,DB_HISTORY  } from "./db.js";
import yahooFinance from 'yahoo-finance';
import { method } from "./getP.js";

var SYMBOLS = [
  'AAPL',
  'amat',
  'app',
  'aple',
  'agtc',
  'GOOG',
  'MSFT',
  'IBM',
  'AMZN',
  'ORCL',
  'INTC',
  'QCOM',
  'FB',
  'CSCO',
  'SAP',
  'TSM',
  'BIDU',
  'EMC',
  'HPQ',
  'TXN',
  'ERIC',
  'ASML',
  'CAJ',
  'YHOO',
  'DIDI',
  'STNE',
  'NVDA',
  'NIO',
  'DWAC',
  'KODK',
  'FDX',
  'BABA',
  'GROM',
  'SOFI',
  'TIGR',
  'DOCU',
  'XH',
  'RDBX',
  'CENN',
  'MRNS',
  'X',
  'EDU',
  'TAL',
  'OTLY',
  'ETH-USD',
  'SQSP',
  'GME',
  'DOC.V',
  'PHUN',
  'TRZ.TO',
  'VEON',
  'MP',
  'BTC-USD',
  'CUEN',
  'S&P 500',
  'Nasdaq',
  'Gold',
  'CSCO',
  'GOOGL'
];

const getD=async(item)=>{
  const start = new Date()
    start.setMonth(start.getMonth()-3)
    const items = [...await DB_HISTORY.find({symbol:item.symbol,date:{$gte:start}}).sort({date:1})]
    const result = {}
    const res = []
    result[item.symbol] = []
    let datas = []
    const datetime =[]
    items.reverse().map(e=>{
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
    let s = null
    let _max_ = null
    await res.map(e=>{
        const max = Math.max(...e.map(e=>e.close))
        _max_ = max
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
        s =item_max.date
        result[item.symbol].push({
            gap,
            diffInDays,
            date:_items[_items.length-1].date
        })
    })
    item.gaps = result[item.symbol][0]
    item.s = s
    item.max = _max_
    item.p = (await method(items.reverse().map(e=>e.close))).data
    return item
}
const items = []
for (let i = 10; i < SYMBOLS.length+10; i += 10) {
  items.push(SYMBOLS.filter((e, ii) => i-10 <= ii  && i > ii))
}

for (let e of items)
 {
  await new Promise(async ressss=>{
  await yahooFinance.quote({
    symbols: e,
    from: '2022-03-17',
    to: '2022-03-17',
    modules: ['price', 'summaryDetail', 'calendarEvents','financialData',"summaryProfile"]
  }, async (err, quotes) => {
    if (err) {
      return console.log(e)
    }
    let keys = Object.keys(quotes);
    for (let ee of keys) {
    
        let data = quotes[ee].price
        let data2 = quotes[ee].calendarEvents?.earnings?.earningsDate
        let data3 = quotes[ee].summaryDetail
        let data4 = quotes[ee].financialData
        let data5 = quotes[ee].summaryProfile
        let data6 = quotes[ee]?.calendarEvents?.dividendDate  || new Date()

        let res = await DB_DATA.findOne({ symbol: data.symbol })
        if (!data2 || !data2[0] | !data2[1]) {
          continue
        }
        const obj = {
          name: data.longName,
          symbol: data.symbol,
          currency: data.currency,
          currencySymbol: data.currencySymbol,
          start: data2[0] * 1000,
          stop: data2[1] * 1000,
          search: data.longName.toLocaleLowerCase(),
          dividendYield:data3.dividendYield?(data3.dividendYield*100).toFixed(2):0,
          previousClose:data3.previousClose,
          targetMeanPrice:data4.targetMeanPrice,
          info:data5,  
          exDividendDate:data3.exDividendDate,
          dividendDate:data6
        }

        const dd__ = await getD(obj)

        


        if (res) {
          await DB_DATA.findByIdAndUpdate(res._id, dd__)
        }
        else {
          let dd = new DB_DATA(obj)
          dd.save()
        }
        
    }
    console.log(e)

  ressss()
    
  })
}
  )
}


