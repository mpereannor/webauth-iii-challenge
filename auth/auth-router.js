const express = require('express')
const bcrypt = require('bcryptjs');

// const jwt = require('jsonwebtoken');

const userToken = require('./token');
const router = express.Router();

const Users = require('../users/users-model');

// Creates a `user` using the information sent inside the `body` of the request. **Hash the password** before saving the user to the database.
router.post('/register', (req, res)=> { 
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
   
    Users.add(user) 
    .then(saved => { 
        res.status(201).json(saved);
    })
    .catch(error => { 
        res.status(500).json(error);
    });
});

module.exports = router;