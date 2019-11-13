
exports.up = function(knex) {
    return knex.schema.table('users', dept => { 
        dept
        .string('department', 128)
    } )
  
};

exports.down = function(knex) {
    return knex.schema.table('users'), dept => {
        dept
        .dropColumn('department')
    }
};
