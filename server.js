const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose") 
const requireDir = require("require-dir")

//Start App

const  app = express() 

app.use(express.json())
app.use(cors())

//Start Database
mongoose.connect('mongodb://192.168.99.100:27017/nodeapi', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

requireDir('./src/models')



//Routes

app.use('/api', require("./src/routes"))

app.listen(3001)