const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//local imports
const connectDb = require("./db")
const userRouter = require('./controllers/user.controller')
const {errorHandler} = require('./middlewares')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/api/user',userRouter )
app.use(errorHandler)

const port = process.env.PORT || 4000

connectDb()
    .then(()=> {
        console.log('db connection succeeded')
        app.listen(port,() => console.log('server started at 3000')) 
    })
    .catch(err => console.log(err))