import mongoose from "mongoose"
const connect = mongoose.connect('mongodb://localhost:27017/db');

export const DB_DATA =  mongoose.model("db_data",
    new mongoose.Schema({
        symbol:String,
        name:String,
        currency:String,
        currencySymbol:String,
        start:Number,
        stop:Number,
        search:String,
        dividendYield:String,
        previousClose:String,
        targetMeanPrice:String,
        info:Object,
        exDividendDate:Date,
        dividendDate:Date
    })
)

export const DB_USER =  mongoose.model("db_user",
    new mongoose.Schema({
        password:String,
        email:String,
        token:String,
        name:String,
    })
)

export const DB_HISTORY = mongoose.model("db_history",
    new mongoose.Schema({
        adjClose:Number,
        close:Number,
        date:Date,
        high:Number,
        low:Number,
        open:Number,
        symbol:String,
        volume:Number
    })
)