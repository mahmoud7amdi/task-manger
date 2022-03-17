
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const morgan = require('morgan')
require('dotenv').config()
const notFound = require('./middleware/not-found')


app.use(express.static('./public'))
app.use(express.json())


app.use(tasks)
app.use(morgan('tiny'))
app.use(notFound)


const port = process.env.PORT || 3000;

const start = async()=>{
    try {
        await connectDB(process.env.DATABASE)
        app.listen(port, console.log(`server is running up in port ${port}`))
    } catch (error) {
       console.log(error)
    }
}
start()