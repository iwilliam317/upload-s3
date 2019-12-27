const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')
const Post = require('./models/Post')

routes.get('/health', (req, res) => res.json({status: 200}))
routes.post('/uploads', multer(multerConfig).single('file'), async (req, res) => {
    const {originalname: name, size, key} = req.file
    try {
        const post = await Post.create({ name, size, key, url: ''})
        return res.status('200').json({'file': req.file, post})
    }
    catch (err){
        throw err
    }

})

module.exports = routes