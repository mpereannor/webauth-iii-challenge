const jwt = require('jsonwebtoken');

// const findPassword = username =>
//   db("users")
//     .where({ username })
//     .select("password")
//     .first();

const generateToken = user => {

    const payload = {
        subject: user.id,
        username: user.username,
        departments: user.departments
    }
    const options = { 
        expiresIn: '1d',
    }
    const result =  jwt.sign(
        payload,
        'SECRET SECRET',
        options
        )
        return result;
}
        

module.exports = generateToken;