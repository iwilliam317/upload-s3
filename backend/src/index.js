const express = require('express')
const app = express()
const morgan = require('morgan')

require('dotenv').config()
require('./config/db')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use(require('./routes'))


app.listen(3000)