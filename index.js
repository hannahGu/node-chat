var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(8000);

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

app.use('/',express.static(__dirname +'/'));


var list = [];
io.on("connection",function(socket){
  socket.on("news",function(data){
    list.push(data);
    console.log(data);
    socket.emit("toClient",list);
  });
});
