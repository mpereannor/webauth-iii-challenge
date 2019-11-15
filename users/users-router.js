const express = require('express');

const router = express.Router();

const Users = require('./users-model');

const restricted = require('../auth/restricted-middleware');


router.get('/', restricted, (req, res) => {

    if (req.decodedToken) { 
        Users.find()
        .then(users => { 
            res.json(users);
        })
        .catch(error => { 
            res.send(error)
        })
    } else { 
        res.json({ 
            message: 'You shall not pass'
        })
    }

})

module.exports = router; 