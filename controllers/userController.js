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
        console.log(req.body);
        data ={
            name:req.body.name,
            phone: req.body.phone,
            pincode:req.body.pincode,
            userrole:req.body.userrole,
            result: 0
        }
        //insert
        var result = await userService.registerUser(data)

        if(result.length==0)
            throw "data insert failed";
        return result;
    }
    catch(e){
        errorHandler.errorHandler(e);
    }
}

exports.selfAssessment = async function(req,res){
    try{
        //validations 
        //req.body.risk =0 by default
        var data = req.body;
        data ={
            assessmentid: req.body.assessmentid,
            userid : req.body.userid,
            risk : 0
        }
        if(req.body.symptoms.length==0 && req.body.travelHistory==0 && req.body.noContact==0)
            data.risk=5;
        if(req.body.symptoms.length==1 &&( req.body.travelHistory==1 || req.body.noContact==0))
            data.risk =50;
        if(req.body.symptoms.length==2 &&( req.body.travelHistory==1 || req.body.noContact==0))
            data.risk =75;
        if(req.body.symptoms.length>2 &&( req.body.travelHistory==1 || req.body.noContact==0))
            data.risk =95;
            //assessment
       
        //insert
        var result = await userService.selfAssessment(data)
        if(result.length==0)
            throw "data insert failed";
        return result;
    }
    catch(e){
        errorHandler.errorHandler(e);
    }
}