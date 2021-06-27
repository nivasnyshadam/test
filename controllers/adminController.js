const express = require('express');
const userService = require('../services/userService');
var resHander = require('../helpers/reshandler');
var errorHandler = require('../helpers/errorhandler');

//registerUser: 
// Sample request - {"name":"A","phoneNumber":"9999999999","pinCode":"111111"}
// Sample response - {"userId": "1"}
// selfAssessment:


exports.userRegister = async function(req,res){
    try{
        //validations 
        var data = req.body;
        //insert
        var result = await adminService.registerUser(data)
        if(result.length==0)
            throw "data insert failed";
        return result;
    }
    catch(e){
        errorHandler.errorHandler(e);
    }
}

exports.updateCovidResult = async function(req,res){
    try{
        //validations 
        var data = req.body;
        //insert
        var result = await userService.updateCovidResult(data)
        if(result.length==0)
            throw "data insert failed";
        return result;
    }
    catch(e){
        errorHandler.errorHandler(e);
    }
}
