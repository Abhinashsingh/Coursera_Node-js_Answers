const express=require('express');
const bodyParser=require('body-parser');

const leaderRouter=express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')

.all((req,res,next)=>

{
res.statusCode=200;
res.setHeader('Content-Type','Text/Plain');
next();

})

.get((req,res,next)=>
{
    res.end("Will send all the leaders to you!!");

})

.post((req,res,next)=>
{
    res.end("Will send you data of "+req.body.name+" with description: "+req.body.description);
})

.put((req,res,next)=>
{
    res.statusCode=403
    res.end('put method not supported');
})
.delete((req,res,next)=>
{
    res.end("deleting all the leaders");
})

leaderRouter.route('/:leaderId')

.all((req,res,next)=>

{
res.statusCode=200;
res.setHeader('Content-Type','Text/Plain');
next();

})

.get((req,res,next)=>
{
    res.end("Will send dish from leaderId number:-" +req.params.leaderId+" to you");
})

.post((req,res,next)=>
{
    res.statusCode=403;
    res.end("post operation not supported on leaderId:-" +req.params.leaderId); 
})

.put((req,res,next)=>
{
    res.write('Put operation on:-' +req.params.leaderId);
    res.end('will update the leader: '+req.body.name+'with details: '+req.body.description);

})

delete((req,res,next)=>
{
    res.end("Deleting the leader ! "+req.params.leaderId);
})

module.exports=leaderRouter;
