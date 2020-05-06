const Idea = require("../models/ideas");

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    Idea.find().then((ideas) => {
        return res.json({ideas})
    })
    .catch((err) => {
        throw err.message
    });
})

router.get('/', (req, res) => {
    Idea.findById(req.params.ideaId).then((idea) => {
        return res.json({idea})
    })
    .catch((err) => {
        throw err.message
    });
})

router.post('/', (req, res) => {
    let idea = new Idea(req.body)
    idea.save().then(ideaResult => {
        return res.json({idea: ideaResult})
    }).catch((err) => {
        throw err.message
    })
})

router.put('/:ideaId', (req, res) => {
    Idea.findByIdAndUpdate(req.params.ideaId, req.body).then((idea) => {
        return res.json({idea})
    }).catch((err) => {
        throw err.message
    })
})

router.delete('/:ideaId', (req, res) => {
    Idea.findByIdAndDelete(req.params.ideaId).then(() => {
        return res.json({
            'message': 'Successfully deleted.',
            '_id': req.params.ideaId
        })
    })
    .catch((err) => {
        throw err.message
    })
})