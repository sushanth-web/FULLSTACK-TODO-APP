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
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://sushanthvaddi123_db_user:4gGhW1JOcN3L1h2D@cluster0.8heh50z.mongodb.net/')
  .then(() => {
    app.listen(process.env.PORT || 5000, () =>{
      console.log(`server is running on port ${process.env.PORT || 5000}`)})
  }).catch((error)=>console.log('error:',error))
