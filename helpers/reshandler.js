

exports.resHandler = function(message,req,res){
    console.log(message);
    // res.writeHead(200);
    // res.end(JSON.stringify(message));
    try{
        res.status(200).send(JSON.stringify(message));
    }
    catch(e){
        console.log(e)
    }
    
}