const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')

router.get('/', async(req,res) => {
    
    try{
        const customers = await Customer.find()
        res.json(customers)
    }catch(err){
        res.send('Error' + err)
    }
})
router.patch('/:id', async(req,res) => {
    
    try{
        const id = req.params.id
        const updates = req.body
        const options = {new : true}

        const result = await Customer.findByIdAndUpdate(id,updates,options)
        res.send(result)
       // Customer.updateOne({'id' : req.params.id},{$set:{'currentBalance':req.params.currentBalance}})
       
    }catch(err){
        res.send('Error' + err)
    }
})
router.get('/:id', async(req,res) => {
    
    try{
        const customer = await Customer.findById(req.params.id)
        res.json(customer)
    }catch(err){
        res.send('Error' + err)
    }
})
router.post('/', async(req, res) =>{
    const cust = Customer({
        name : req.body.name,
        email: req.body.email,
        currentBalance: req.body.currentBalance,
        accountNo: req.body.accountNo,

    })
    try{
        const a1 = await cust.save()
        res.send(a1)
    }catch(err){
        res.send('Error')
    }

})
module.exports = router