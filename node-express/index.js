const express=require('express');
const http=require('http');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const dishRouter=require('./Routes/dishRouter');
const promoRouter=require('./Routes/promoRouter');
const leaderRouter=require('./Routes/leaderRouter');

const hostname='localhost';
const port='3000';
  
const app=express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes',dishRouter);
app.use('/leaders',leaderRouter);
app.use('/promotions',promoRouter);
app.use(express.static(__dirname+'/public'));

app.use((req, res, next)=>
{
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-type','Html/text');
    res.end('<html><body><h1>This is an express server</h1></body></html>');
})

const server=http.createServer(app);
server.listen(port, hostname, ()=>
{
    console.log(`running on http://${hostname}:${port}`);
})