const express=require('express');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');


const Leaders = require('../models/leaders');

const leaderRouter=express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.get((req,res,next)=>
{   
    Leaders.find({})
    .then((leaders)=>
    {
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(leaders);
    },(err)=>next(err))
    .catch((err)=>next(err));

})

.post((req,res,next)=>
{
    Leaders.create(req.body)
    .then((lead)=>
    {
        console.log('Leaders created ', lead)
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(lead);
    },(err)=>next(err))
    .catch((err)=>next(err));
})

.put((req,res,next)=>
{
    res.statusCode=403
    res.end('put method not supported');
})
.delete((req,res,next)=>
{
    Leaders.remove({})
    .then((resp)=>
    {
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },(err)=>next(err))
    .catch((err)=>next(err));
});

leaderRouter.route('/:leaderId')
.get((req,res,next)=>
{
    Leaders.findById(req.params.leaderId)
    .then((lead)=>
    {
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(lead);
    },(err)=>next(err))
    .catch((err)=>next(err));
})

.post((req,res,next)=>
{
    res.statusCode=403;
    res.end("post operation not supported on leaderId:-" +req.params.leaderId); 
})

.put((req,res,next)=>
{
    Leaders.findByIdAndUpdate(req.params.leaderId, {
        $set: req.body
    }, { new: true })
    .then((lead) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(lead);
    }, (err) => next(err))
    .catch((err) => next(err));

})

.delete((req,res,next)=>
{
    Leaders.findByIdAndRemove(req.params.leaderId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports=leaderRouter;