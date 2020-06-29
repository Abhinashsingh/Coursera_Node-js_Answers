const express=require('express');
const bodyParser=require('body-parser');

const dishRouter=express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')

.all((req,res,next)=>

{
res.statusCode=200;
res.setHeader('Content-Type','Text/Plain');
next();

})
.get((req,res,next)=>
{
    res.end("Will send all the dishes to you!!");
})

.post((req,res,next)=>
{
    res.end('Will add the dish: '+ req.body.name + ' With details: '+ req.body.description); 
})

.put((req,res,next)=>
{
    res.statusCode=403;
    res.end('Put operation not supported on /dishes');

})

.delete((req,res,next)=>
{
    res.end("Deleting all the dishes! ");
});

dishRouter.route('/:dishid')

.all((req,res,next)=>

{
res.statusCode=200;
res.setHeader('Content-Type','Text/Plain');
next();

})

.get((req,res,next)=>
{
    res.end("Will send dish from DishId number:-" +req.params.dishid+" to you");
})

.post((req,res,next)=>
{
    res.statusCode=403;
    res.end("post operation not supported on dishid:-" +req.params.dishid); 
})

.put((req,res,next)=>
{
    res.write('Put operation on:-' +req.params.dishid);
    res.end('will update the dish: '+req.body.name+'with details: '+req.body.description);

})

delete((req,res,next)=>
{
    res.end("Deleting the dishe! "+req.params.dishid);
})




module.exports=dishRouter;