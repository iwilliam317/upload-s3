const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/posts', (err, res) => console.log('MongoDB connected!'))

module.exports = mongoose

