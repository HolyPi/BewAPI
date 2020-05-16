const app = require('../index.js')
const Idea = require('../models/ideas.js')
const User = require('../models/user.js')
const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const should = chai.should()
chai.use(chaiHttp)

const agent = chai.request.agent(app)

const user = {
    username: 'Hannah',
    password: 'test'
}

describe('Testing Authentication', function(){
    after(function() {
        agent
            .get('/logout')
            .end(function(err, res){
                if (err) {
                    console.log(err)
                }
                console.log('Logged out')
            })
        User.findOneAndDelete({username: user.username}, (err, user) => {
            if (err) {
                console.error(err)
            } else {
                console.log('Deleted user')
            }
        })
    })

    it('should sign up new user', function(done){
        agent
            .post('/signup')
            .set("content-type", "application/x-www-form-urlencoded")
            .send(user)
            .end(function(err, res){
                if (err) {
                    done(err)
                }
                expect(res.status).to.be.equal(200)
                expect(res.body).to.be.an('object')
                agent.should.have.cookie("api_token")
                
                done();
            })
    })

    it('should logout a user', function(done){
        agent
            .get('/logout')
            .end(function(err, res){
                if (err) {
                    done(err)
                }
                expect(res.status).to.be.equal(200)
                expect(res.body).to.be.an('object')
                
                done()
            })
    })


})
