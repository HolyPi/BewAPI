const User = require("../models/user");
const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');


module.exports = (app) => {
  app.post('/signup', (req, res) => {
    const { username, password } = req.body
    const user = new User({ username, password })

    user.save()
        .then(user => {
            let payload = { user: user.username }
            let secret = process.env.SECRET
            let options = { expiresIn: '1d' }
            let token = jwt.sign(payload, secret, options)
            res.cookie('api_token', token, { maxAge: 900000, httpOnly: true })
            res.redirect('/')
        }).catch(err => {
            console.log(err)
        })
})


app.post('/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password

  User.findOne({name}).then(user => {
          bcrypt.compare(password, user.password).then(match => {
            if (match) {
              status = 200;
              const payload = { user: user.name };
              const options = { expiresIn: '2d', issuer: 'IdeaIn' };
              const secret = process.env.JWT_SECRET;
              const token = jwt.sign(payload, secret, options);
              res.cookie('api_token', token, {maxAge: 1000000, httpOnly: true })
              res.redirect('/')
          } else {
            res.status(401).send({message: "Authenticated"})
       
          }
        })
      })
    })

  app.get('/logout'), (req, res) => {
      res.clearCookie('nToken');
      res.redirect('/')
    }
  }
