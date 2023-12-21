require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const taskRouter = require('./routes/task')

const app = express()
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
 next()   
})

app.use('/api/tasks', taskRouter)

mongoose.connect(process.env.MONGO_URL)
    .then(() => { 
        app.listen(process.env.PORT, () => {
            console.log(" connecting db and  listensing on  port ", process.env.PORT)
        })  
    })
    .catch((error) => {
    console.log(error)
})
