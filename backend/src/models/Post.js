const mongoose = require('mongoose')
const aws = require('aws-sdk')
const s3 = new aws.S3()
const fs = require('fs')
const path = require('path')

const PostSchema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

PostSchema.pre('save', function () {
    if (!this.url) {
        this.url = `${process.env.APP_URL}/files/${this.key}`
    }
})

PostSchema.pre('remove', function () {
    if(process.env.STORAGE_TYPE === 's3'){
        const params = {Bucket: process.env.BUCKET_NAME, Key: this.key}
        s3.deleteObject(params).promise()
    } else{
        fs.unlink(path.resolve(__dirname, '..', '..', 'tmp', 'uploads', this.key), function(err){
            if (err) return err
            console.log('removed from local')
        })
    }
})

module.exports = mongoose.model('Post', PostSchema)