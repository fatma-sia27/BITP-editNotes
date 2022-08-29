const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')

const app = express();

dotenv.config({path:'./config.env'})
require('./db/conn')
app.use(express.json())



app.use(require('./router/auth'))
 const middleware = (req , res, next) =>{
     console.log("my middleware")
    next()
     } 

    // middleware()
     
app.get('/' , (req,res) => {
    res.send("u can signin")
}
)

const PORT = process.env.PORT || 5000



app.listen(5000 , ()=>{
 console.log(`server is running at ${PORT}`)   
})
