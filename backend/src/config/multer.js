const multer = require('multer')
const crypto = require('crypto')
const path = require('path')

const storage = {
    local: multer.diskStorage({
        destination: (req, file, cb) => cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads')),
        filename: (req, file, cb) => {
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
    storage: storage['local'],
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