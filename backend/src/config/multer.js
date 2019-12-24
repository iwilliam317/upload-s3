const multer = require('multer')
const crypto = require('crypto')
const path = require('path')

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: multer.diskStorage({

    }),
    limits: {
        fileSize: 2 * 1024 + 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimeTypes = [
            'image/jpeg',
            'image/pjpeg',
            'image.gif',
            'image.png'
        ]

        if(allowedMimeTypes.includes(file.mimetype)){
            cb(null, true)
        }
        else {
            cb(new Error('Invalid file extension'))
        }
    }

}