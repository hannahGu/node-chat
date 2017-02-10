
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(8000);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });



io.on("connection",function(socket){
  socket.on("news",function(data){
    console.log(data);
    socket.emit("other event",{oo:"other"});
  });
});