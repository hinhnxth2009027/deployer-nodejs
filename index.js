var express = require('express')
var app = express()

app.get('/',(req,res)=>res.send('<h1 style="color: red" align="center">Home page</h1><br><h2 align="center"><a href="/about">about</a></h2>'))
app.get('/about',(req,res)=>res.send('<h1 style="color: green" align="center">About page</h1><br><h2 align="center"><a href="/">home</a></h2>'))

app.listen(process.env.PORT||8080)