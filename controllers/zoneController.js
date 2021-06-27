const express = require('express');
const userService = require('../services/zoneService');
var resHander = require('../helpers/reshandler');
var errorHandler = require('../helpers/errorhandler');

//registerUser: 
// Sample request - {"name":"A","phoneNumber":"9999999999","pinCode":"111111"}
// Sample response - {"userId": "1"}
// selfAssessment:


exports.addZone = async function(req,res){
    try{
        //validations 
        var data = req.body;
        //insert
        var result = await userService.addZone(data)
        if(result.length==0)
            throw "data insert failed";
        return result;
    }
    catch(e){
        errorHandler.errorHandler(e);
    }
}
exports.getZone = async function(req,res){
    try{
        //validations 
        var data = req.body;
        //insert
        var result = await userService.getZone(data)
        if(result.length==0)
            throw "data insert failed";
        return result;
    }
    catch(e){
        return e;
        //errorHandler.errorHandler(e);
    }
}