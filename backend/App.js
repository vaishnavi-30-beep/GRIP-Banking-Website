const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const url ='mongodb://localhost/Customers'

const app = express()

app.use(cors());
app.options('*', cors());

const port = 5000

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

app.use(express.json())

con.on('open', () =>{
  console.log('Connected...')
})

// Creating Router
const customerRouter = require('./routes/customers')
const transactionRouter = require('./routes/transactions')

app.use('/customers',customerRouter)

app.use('/transactions',transactionRouter)

//Listening to server
app.listen(port, () =>{
  console.log(`Example app listening at http://localhost:${port}`)
})
