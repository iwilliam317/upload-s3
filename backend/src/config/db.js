const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/upload', (err, res) => console.log('MongoDB connected!'))

module.exports = mongoose

