var express = require('express');
var router = express.Router();
var resHander = require('../helpers/reshandler');
var errorHandler = require('../helpers/errorhandler');

var zoneController = require('../controllers/zoneController');

/* GET users listing. */


// router.post('/addZone', async function( req,res){
  
//     var result = await zoneController.addZone(req,res);
//     resHander.resHandler(result);
//   })

router.get('/', async function( req,res){
  
    var result = await zoneController.getZone(req,res);
    res.status(200).send(result);
    //resHander.resHandler(result);
  })

module.exports = router;
