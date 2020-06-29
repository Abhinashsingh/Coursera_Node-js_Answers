const express=require('express');
const bodyParser=require('body-parser');

const promoRouter=express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')

.all((req,res,next)=>

{
res.statusCode=200;
res.setHeader('Content-Type','Text/Plain');
next();

})

.get((req,res,next)=>
{
    res.end("Will send all the promos to you!!");

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
    res.end("deleting all the promotions");
});

promoRouter.route('/:promoId')

.all((req,res,next)=>

{
res.statusCode=200;
res.setHeader('Content-Type','Text/Plain');
next();

})

.get((req,res,next)=>
{
    res.end("Will send dish from promoId number:-" +req.params.promoId+" to you");
})

.post((req,res,next)=>
{
    res.statusCode=403;
    res.end("post operation not supported on promoId:-" +req.params.promoId); 
})

.put((req,res,next)=>
{
    res.write('Put operation on:-' +req.params.promoId);
    res.end('will update the dish: '+req.body.name+'with details: '+req.body.description);

})

delete((req,res,next)=>
{
    res.end("Deleting the dishe! "+req.params.promoId);
})

module.exports=promoRouter;
