const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const app = require('../src/index')
const Post = require('../src/models/Post')

describe('API', () => {
    beforeEach(async () => {
        try {
            await Post.remove({})
        } catch (error) {
            throw error
        }
    }) 

    describe('GET /posts', () => {
        it('should return all posts', async () => {
            try {
                const response = await chai.request(app).get('/posts')
                expect(response.statusCode).to.be.equal(200)
                expect(response.body).to.be.a('array')
                expect(response.body).to.be.empty
            } catch (error) {
                throw error
            }
        })
    })

    describe('GET /health', () => {
        it('should return status code 200', async () => {
            try {
                const res = await chai.request(app).get('/health')
                expect(res.statusCode).to.be.equal(200)
                expect(res.body.message).to.be.equal('This is working ;)')
            } catch (error) {
                throw error
            }
        })
    })
})