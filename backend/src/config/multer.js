const multer = require('multer')
const crypto = require('crypto')
const path = require('path')
const multerS3 = require('multer-s3')
const aws = require('./aws')

const storageTypes= {
    local: multer.diskStorage({
        destination: (req, file, cb) => cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads')),
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(err)

                file.key = `${hash.toString('hex')}-${file.originalname}`
                cb(null, file.key)
            })
        }
    }),
    s3: multerS3({
        s3: new aws.S3(),
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        bucket: process.env.BUCKET_NAME,
        key: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(err)

                const fileName = `${hash.toString('hex')}-${file.originalname}`
                cb(null, fileName)
            })
        }
    })
}

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: storageTypes['s3'],
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimeTypes = [
            'image/jpeg',
            'image/pjpeg',
            'image/gif',
            'image/png'
        ]

        if(allowedMimeTypes.includes(file.mimetype)){
            cb(null, true)
        }
        else {
            cb(new Error('Invalid file extension'))
        }
    }

}