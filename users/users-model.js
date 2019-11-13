const db = require('../database/dbConfig');

module.exports = { 
    add,
    find,
    findBy,
    findById
};

function findById(id) { 
    return db('users')
    .where({ id })
    .first();
}

async function add(user) {
    const [id] = await db('users').insert(user);
    return findById(id);
  }
  
function find() { 
    return db('users')
    .select('id', 'username', 'password', 'departments')
}

function findBy(filter) { 
    return db('users')
    .where(filter);
}

