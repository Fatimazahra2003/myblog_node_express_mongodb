const express=require('express')
let methodOverride = require('method-override')


const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.locals.moment = require('moment')


app.use('/',require('./routes/postRoutes'))

module.exports = app;


