const routes = require('express').Router()

routes.get('/', (req, res) => res.json({"message": "Upload to S3"}))

module.exports = routes