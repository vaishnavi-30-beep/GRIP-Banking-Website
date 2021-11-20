const express = require('express')
const router = express.Router()

const Transaction = require('../models/transaction')

router.get('/', async(req,res) =>{
    try{
        const transaction = await Transaction.find()
        res.json(transaction)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req, res) =>{
    const trans = Transaction({
        cust1 : req.body.cust1,
        acc1 : req.body.acc1,
        cust2 : req.body.cust2,
        acc2 : req.body.acc2,
        amount : req.body.amount,
    })
    try{
        const a1 = await trans.save()
        res.send(a1)
    }catch(err){
        res.send('Error')
    }

})
module.exports = router