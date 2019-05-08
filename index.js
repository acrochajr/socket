var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/mapa', function(req, res){
  res.sendFile(__dirname + '/public/mapa.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', socket.id);
    console.log(io.emit('chat message', msg));

  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
