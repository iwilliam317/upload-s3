const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 3000

require('dotenv').config()
require('./config/db')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp','uploads')))
app.use(require('./routes'))

app.listen(PORT)

module.exports = app