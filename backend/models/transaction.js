const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    cust1 : {
        type: String,
        required: true
    },
    acc1 : {
        type:Number,
        required: true
        

    },
    cust2 : {
        type:String,
        required: true

    },
    acc2 : {
        type:Number,
        required: true

    },
    amount : {
        type:Number,
        required: true

    },
})

module.exports = mongoose.model('Transaction', transactionSchema)