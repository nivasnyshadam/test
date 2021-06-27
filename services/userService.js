var resHander = require('../helpers/reshandler');
var errorHandler = require('../helpers/errorhandler');
var knex = require('../db/knex');



async function registerUser(data){
    return await knex("user").insert(data).then((row)=>{return row[0]})
}

async function selfAssessment(data){
    return await knex("Assessments").insert(data).then((row)=>{return row[0]})
}

async function updateCovidResult(data){
    return await knex("user").update(data).then((row)=>{return row[0]})
}

module.exports ={
    registerUser,
    selfAssessment,
    updateCovidResult
}
