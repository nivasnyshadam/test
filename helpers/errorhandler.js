const express = require('express');

exports.errorHandler = function(message,req,res){
    console.log(message);
    // res.writeHead(400);
    // res.end(JSON.stringify(message));
    res.status(400).send(JSON.stringify(message));
}