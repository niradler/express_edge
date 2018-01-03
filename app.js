var express = require('express');
var edge = require('edge.js');
const path = require('path')
var app = express();

app.use(express.static('public'));


edge.registerViews(path.join(__dirname, './view'))

//use https://bulma.io/ write css only if you dont have choose, check design in mobile view F12, css file in public folder
//design reference use instagram.com
// use http://edge.adonisjs.com/docs/getting-started to create components and use slot etc  
app.get('/', function (req, res) {
   res.send(edge.render('profile'));
})
app.get('/create', function (req, res) { //create new task (all fields are like create new post in instagram and date + time to post)
   res.send(edge.render('create'));
})
app.get('/mytask', function (req, res) { //list of task with edit icon (use this https://bulma.io/documentation/layout/media-object/)
   res.send(edge.render('mytask'));
})
app.get('/istagram', function (req, res) { //connect button and profile details post like etc profile pic
   res.send(edge.render('instagram'));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://localhost:%s", port)
})