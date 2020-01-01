const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGO_URL}/posts`, (err, res) => {
    if (err) throw err
    console.log('MongoDB connected!')
})

module.exports = mongoose

