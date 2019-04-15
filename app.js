var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/box', function(req, res) {
    res.sendFile(path.join(__dirname, 'public') + '/box.html');
});

app.get('/box2', function (req, res) {
    res.sendFile(path.join(__dirname, 'public') + '/box2.html');
});

app.get('/line', function(req, res) {
    res.sendFile(path.join(__dirname, 'public') + '/line.html');
});

app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname, 'public') + '/index.html');
});

app.get('/endless', function(req, res) {
    res.sendFile(path.join(__dirname, 'public') + '/endless.html');
});

server.listen(port, function() {
	console.log(`listening to port ${port}...`)
});

module.exports = app;