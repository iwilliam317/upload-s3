const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')
const Post = require('./models/Post')

routes.get('/health', (req, res) => res.json({status: 200}))
routes.post('/uploads', multer(multerConfig).single('file'), async (req, res) => {
    const {originalname, size, filename} = req.file
    const name = originalname.split('.')[0]
    const key = filename.split('-')[0]

    try {
        console.log(name, key, size)
        const post = await Post.create({ name, size, key, url: ''})
        return res.status('200').json({'file': req.file, post})
    }
    catch (err){
        throw err
    }

})

module.exports = routes