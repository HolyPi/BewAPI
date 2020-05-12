const Idea = require("../models/ideas");

const express = require('express');
module.exports = function (app) {



app.post('/ideas/new', (req, res) => {
    let ideas = new Idea(req.body);

    ideas.save((err, post) => {
        return res.redirect('/');
    })
    
});

app.get('/', (req, res) => {
    Idea.find({}).lean().then(ideas => {
        res.send({ ideas });
    })
    .catch(err => {
        console.log(err.message);
    })
})


// app.put('/:ideaId', (req, res) => {
//     Idea.findByIdAndUpdate(req.params.ideasId, req.body).then((ideas) => {
//         return res.json({ideas})
//     }).catch((err) => {
//         throw err.message
//     })
// })

app.delete('/:ideaId', (req, res) => {
    Idea.findByIdAndDelete(req.params.ideasId).then(() => {
        return res.send({
            'message': 'Successfully deleted.',
            '_id': req.params.ideasId
        })
    })
    .catch((err) => {
        throw err.message
    })

})
}