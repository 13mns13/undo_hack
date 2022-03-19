import { DB_DATA } from "./db.js";
import yahooFinance from 'yahoo-finance';

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
const items = []
for (let i = 0; i < SYMBOLS.length; i += 10) {
  items.push(SYMBOLS.filter((e, ii) => i < ii + 10 && i >= ii))
}
await items.map(e => {
  yahooFinance.quote({
    symbols: e,
    from: '2022-03-17',
    to: '2022-03-17',
    modules: ['price', 'summaryDetail', 'calendarEvents','financialData',"summaryProfile"]
  }, async (err, quotes) => {
    if (err) {
      return console.log(e)
    }
    let keys = Object.keys(quotes);
    await keys.map(async ee => {
      let data = quotes[ee].price
      let data2 = quotes[ee].calendarEvents?.earnings?.earningsDate
      let data3 = quotes[ee].summaryDetail
      let data4 = quotes[ee].financialData
      let data5 = quotes[ee].summaryProfile
      let data6 = quotes[ee]?.calendarEvents?.dividendDate  || new Date()
    console.log(data.symbol,e)

      let res = await DB_DATA.findOne({ symbol: data.symbol })
      if (!data2 || !data2[0] | !data2[1]) {
        return
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


      


      if (res) {
        await DB_DATA.findByIdAndUpdate(res._id, obj)
      }
      else {
        let dd = new DB_DATA(obj)
        dd.save()
      }

    })

  })
})


