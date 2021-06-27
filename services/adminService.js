var resHander = require('../helpers/reshandler');
var errorHandler = require('../helpers/errorhandler');
var knex = require('../db/knex');



async function registerAdmin(data){
    return await knex("user").insert(data).then((row)=>{return row[0]})
}

module.exports ={
    registerAdmin
}
