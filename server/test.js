import { DB_DATA, DB_HISTORY } from "./db.js";
import yahooFinance from 'yahoo-finance';

let c  = await DB_HISTORY.count()
var SYMBOLS = [
//   'AAPL',
//   'amat',
//   'app',
//   'aple',
//   'agtc',
//   'GOOG',
//   'MSFT',
//   'IBM',
//   'AMZN',
//   'ORCL',
//   'INTC',
//   'QCOM',
//   'FB',
//   'CSCO',
//   'SAP',
//   'TSM',
//   'BIDU',
//   'EMC',
//   'HPQ',
//   'TXN',
//   'ERIC',
//   'ASML',
//   'CAJ',
//   'YHOO',
//   'DIDI',
//   'STNE',
//   'NVDA',
//   'NIO',
//   'DWAC',
//   'KODK',
//   'FDX',
//   'BABA',
//   'GROM',
//   'SOFI',
//   'TIGR',
//   'DOCU',
//   'XH',
//   'RDBX',
//   'CENN',
//   'MRNS',
//   'X',
//   'EDU',
//   'TAL',
//   'OTLY',
//   'ETH-USD',
//   'SQSP',
//   'GME',
//   'DOC.V',
//   'PHUN',
//   'TRZ.TO',
//   'VEON',
//   'MP',
//   'BTC-USD',
//   'CUEN',
//   'S&P 500',
//   'Nasdaq',
//   'Gold',
//   'CSCO',
//   'GOOGL',
"ORCL"
];

let n = 0

for (const e of SYMBOLS) {
        
        await new Promise(async _res=>{
            yahooFinance.historical(
                {symbol:e},
                async(err,quotes)=>{
                    n+=quotes.length
                    let k = 0

                    await quotes.map(async (ee,i,{length:l})=>{
                        
                        const res = await DB_HISTORY.findOne(ee)
                        console.log(e,k,quotes.length)
                        k++
                        if (res){
                            return
                        }
                        const q = new DB_HISTORY(ee)
                        q.save()
                        if (i===l-1){
                            _res()

                        }
                    })
                    if(quotes.length==0){
                        _res()
                    }
                }
            )
        }) 
    
    console.log()
}

  