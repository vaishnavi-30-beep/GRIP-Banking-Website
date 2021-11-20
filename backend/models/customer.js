const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    currentBalance: {
        type: Number,
        required: true
    },
    accountNo: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Customer', customerSchema)
