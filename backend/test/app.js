const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const app = require('../src/index')

describe('API', () => {
    describe('GET /health', () => {
        it('should return status code 200', done => {
            chai.request(app)
                .get('/health')
                .end((error, res) => {
                    expect(res.statusCode).to.be.equal(200)
                    expect(res.body.message).to.be.equal('This is working ;)')
                    done()
                })
        })
    })
})