const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const userToken = require('./token');
const Users = require('../users/users-model');


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

router.post('/login', (req, res) => { 
    let { username, password } = req.body;

    Users.findBy({username})
    .first()
    .then(user => { 
        if (user && bcrypt.compareSync(password, user.password)) { 
            userToken(user);
            res.status(200).json({ 
                message: `welcome ${user.username}!`,
                token: userToken,
            });
        }
        else { 
            res.status(401).json({
                message: `you shall not pass`
            })
        }
    })
    .catch(error => { 
        res.status(500).json(error);
    })
})

module.exports = router;