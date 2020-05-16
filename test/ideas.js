const User = require('../models/user.js')
const app = require('../index.js')
const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const Idea = require('../models/ideas.js')
const expect = chai.expect
const should = chai.should()
chai.use(chaiHttp)
const agent = chai.request.agent(app);




const user = {
    username: 'Hannah1',
    password: 'mockpassword'
}



const sample_idea_id = 'tttttttttttt'

const sampleIdea = {
                idea_by: "Noel",
                idea: "Play cards",
}

let newIdea;

describe('Ideas route', function() {
    before(function (done) {
        agent
            .post('/signup')
            .set("content-type", "application/x-www-form-urlencoded")
            .send(user)
            .end(function (err, res) {
                if (err) {
                    done(err)
                }
                done()
            })
    
        })

    it('Should get ideas on /', function(done) {
        agent
            .get('/')
            .end(function(err, res) {
                if (err) {
                    done(err)
                }
                expect(res.status).to.be.equal(200)
                expect(res.body).to.be.an('object')
                done()
        })
    })
    it('Should post a new idea', function(done) {
            agent
                .post('/ideas/new')
                .set("content-type", "application/x-www-form-urlencoded")
                .send(sampleIdea)
                .end(function(err, res) {
                    if (err) {
                        done(err)
                    }
                    newIdea = res.body[0]
                    done()
                })
                

    })

        after(function (done) {
            agent
                .get('/logout')
                .end(function(err, res) {
                    if (err) {
                        console.log(err)
                }
                console.log('Logged out')
                })
                User.findOneAndDelete({username: user.username}, (err, user) => {
                    if (err) {
                        done(err)
                    } else {
                        done()
                }
            
                
            })
        })
    })
        
   

 

   

