var express = require('express')
var app = express()
var ejs = require('ejs')
app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views", "views");


app.get('/',(req,res)=>res.render('home.ejs'))
app.get('/about',(req,res)=>res.render('aboutpage.ejs'))

app.listen(process.env.PORT||8080)