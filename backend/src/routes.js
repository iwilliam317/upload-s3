const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')
const Post = require('./models/Post')

routes.get('/health', (req, res) => res.json({status: 200}))
routes.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find({})
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).send(error)
    }
})

routes.delete('/posts/:id', async (req,res) => {
    try {
        const post = await Post.findById(req.params.id)
        await post.remove()
        res.status(200).json({message: 'Post deleted!'})
    } catch (error) {
        
    }
})
routes.post('/posts', multer(multerConfig).single('file'), async (req, res) => {
    const {originalname: name, size, key} = req.file
    try {
        const post = await Post.create({ name, size, key, url: ''})
        return res.status('200').json({post: post.toObject()})
    }
    catch (err){
        return res.status('500').json(err)
    }
})

module.exports = routes