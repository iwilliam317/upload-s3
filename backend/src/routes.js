const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

routes.get('/health', (req, res) => res.json({status: 200}))
routes.post('/uploads', multer(multerConfig).single('file'), (req, res) => { res.send({body: req.body})})

module.exports = routes