var resHander = require('../helpers/reshandler');
var errorHandler = require('../helpers/errorhandler');
var knex = require('../db/knex');



async function addZone(data){
    return await knex("zone").insert(data).then((row)=>{return row[0]})
}

async function getZone(data){
    return await knex("zone").select("*")
}
module.exports ={
    addZone,
    getZone
}
