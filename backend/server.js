const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const dotenv =require('dotenv')
dotenv.config()

const todoRoutes = require('./routes/todoRoutes')

const app = express()

app.use(express.json())
app.use(cors())
// routes
app.use('/api/todos',todoRoutes)

//connect to svrer
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen( 5000, () =>{
      console.log(`server is running on port 5000`)})
  }).catch((error)=>console.log('error:',error))
