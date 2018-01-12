const express =require('express')
const http=require('http')
var postsapi=require('./routes/posts.js')
var index=   require('./routes/index.js')
var storeArray = require('./routes/store.js')
const bodyParser = require('body-parser')
var logger =require('morgan')
//const PORT=3000;
var app=express()
 

app.use(logger('short'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/',index)





http.createServer(app).listen(3000)