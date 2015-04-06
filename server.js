'use strict';

var express = require ('express'),
    http    = require ('http'),
    https   = require ('https'),
    twilioClient = require ('twilio')('AC81ad44693623c3e90fb6579df9383319', '949a6fc06ca42a974f2d06e1750f6b3c');

var app = express();
var httpport = process.env.port || 9000;

var server = app.listen(httpport, function() {
    console.log('Listening on port %d', '|', server.address().port, '|' + typeof(server.address().port));
});

app.all('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
 });

// Serve up content from public directory
app.use('/', express.static(__dirname + '/app'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/app/index.html');
});

// data interface accepts get and post
app.get('/data', function(req, res){

})

// twilio interface

app.get('/sendtext', function(req, res){
  twilioClient.sendMessage({
    to: '+16179904963',
    from: '+16173133386',
    body: 'fo shizzle'
  },
  function(err, responseData){
    if(err){
      console.log('error');
      console.log(err);
    }
    console.log(responseData);
  })
  res.send('hello world');
})




// /addmessage with message to add

app.post('/addmessage', function(req, res){
  
})

// /removemessage with message to remove
// /addnumber with number to add
// /removenumber with number to remove

// / with index that shows lists of numbers and messages
// /getmessages returns a list of all messages
// /getnumbers returns a list of all numbers