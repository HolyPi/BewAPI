const app = require('../index.js')
const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const Idea = require('../models/ideas.js')
chai.config.includeStack = true
const expect = chai.expect
const should = chai.should()
chai.use(chaiHttp)

after((done) => {
    mongoose.models = {}
    mongoose.modelSchemas = {}
    mongoose.connection.close()
    done()
  })

const sample_idea_id = 'tttttttttttt'
const sample_idea_id2 = 'aaaaaaaaaaaa'
const sample_idea_id3 = 'oooooooooooo'

    describe('Idea sample', () => {
        beforeEach((done) => {
            const sampleIdea = new Idea({
                idea_by: "Noel",
                idea: "Play cards",
                _id: sample_idea_id
            })
            sampleIdea.save()
            .then(() => {
                done()
            })
        })

      
    afterEach((done) => {
        Idea.deleteMany({ idea_by: ['Noel', 'Alicia', 'Tori'] })
        .then(() => {
            done()
        })
    })
    it('Should get ideas on /', (done) => {
        chai.request(app)
        .get('/')
        .then((res) => {
            res.status.should.be.equal(200);
            return done();
        })
        .catch((err) => {
            return done(err)
        });
    });

    it('Should post a new idea', (done) => {

        const newIdea2 = {
            idea_by: "Alicia",
            idea: "Jump rope in a room",
            id: sample_idea_id2
        }
        chai.request(app)
        .post('/ideas/new')
        .send(newIdea2)
        .then((res) => {
            res.status.should.be.equal(200);
            res.should.be.json
             return done();
        })
        .catch((err) => {
            return done(err)
        });
    });

    it('Should update an idea', (done) => {
        const newIdea3 = {
            idea_by: "Tori",
            idea: "Bake a cake",
            id: sample_idea_id3,
        }
        chai.request(app)
        let idea = new Idea(newIdea3);
        let updatedidea = {idea_by: "Tori", idea: "Make Ice Cream"}
        .put(`/${sample_idea_id3}`)
        .send({updatedidea})
        .then((err, res) => {
            if (err) { done(err) }
            expect(res.body.idea).to.be.an('object')
            console.log(res.body)
            res.status.should.be.equal(200);
            return done();
            })
            .catch((err) => {
                return done(err)
            });
        });

    it('should delete an idea', (done) => {
        chai.request(app)
        .delete(`/idea/${sample_idea_id}`)
        .send((err, res) => {
            if (err) { done(err) }
            expect(res.body.message).to.equal('Successfully deleted.')
            expect(res.body._id).to.equal(sample_idea_id)
            res.status.should.be.equal(200);
            return done()
        })
        .catch((err) => {
            return done(err)
        });

         
        });
    })


    
