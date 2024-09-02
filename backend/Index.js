
require('dotenv').config()
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
mongoose.connect('mongodb://127.0.0.1:27017/ClothDB').then(()=>console.log('DB connect'))

const Myroute=require('./routes/route')


app.use(cors())

app.use('/api',Myroute,)



app.listen(process.env.PORT|| 8000,()=>{
    console.log('Server is running')
})

