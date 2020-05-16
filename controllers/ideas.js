const Idea = require("../models/ideas");

const express = require('express');
module.exports = function (app) {



app.post('/ideas/new', (req, res) => {

    let ideas = new Idea(req.body);
    if (req.user) {
    ideas.save((err, post) => {
        console.log(post)
        return res.redirect('/');
    })
} else {
    res.status(401).send({message: 'Unauthorized'})
}
});

app.get('/', (req, res) => {
    Idea.find({}).lean().then(ideas => {
        res.send({ ideas });
    })
    .catch(err => {
        console.log(err.message);
    })
})


app.put('/:id', (req, res) => {
    Idea.findOneAndUpdate({_id: req.params.id}, {idea: req.body.idea}).then(ideas => {
        return res.redirect(`ideas/${req.params.id}`)
    }).catch((err) => {
        throw err.message
    })
})

app.delete('/ideas/:id', (req, res) => {
    Idea.deleteOne({_id: req.params.id}).then(() => {
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