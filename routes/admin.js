var express = require('express');
var router = express.Router();
var resHander = require('../helpers/reshandler');
var errorHandler = require('../helpers/errorhandler');

var adminController = require('../controllers/adminController');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//registerUser: 
// Sample request - {"name":"A","phoneNumber":"9999999999","pinCode":"111111"}
// Sample response - {"userId": "1"}
// selfAssessment:
// Sample request - {"userId":"1","symptoms":["fever","cold","cough"],"travelHistory":true,"contactWithCovidPatient":true}
// Sample response - {"riskPercentage": 95}

router.post('/registerAdmin', async function( req,res){
  
 
    console.log("reached reg user");
    var result = await adminController.adminRegister(req.body);
    res.status(200).send(result);
  
 
})


//admin
router.get('/getUser/:id', async function(req,res){
  var adminid= req.header.adminid;
  var result = await adminController.updateCovidResult(adminid,req,res)
  res.status(200).send(result);
})


module.exports=router;