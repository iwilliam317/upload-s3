const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')

require('dotenv').config()
require('./config/db')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp','uploads')))
app.use(require('./routes'))

app.listen(3000)