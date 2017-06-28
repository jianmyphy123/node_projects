var express = require('express');
app = express();
server = require('http').createServer(app),
io = require('socket.io').listen(server);

usernames = [];

var port = process.env.PORT || 3001;
server.listen(port);
console.log('Server is running at port '+port);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket) {
  socket.on('new user', function(data, callback) {
    if(usernames.indexOf(data) != -1) {
      callback(false);
    } else {
      callback(true);
      socket.username = data;
      usernames.push(socket.username);
      updateUsername();
    }
  });
  function updateUsername() {
    io.sockets.emit('usernames', usernames);
  }
  // Send Message
  socket.on('send message', function(data) {
    io.sockets.emit('new message', { msg: data, user: socket.username });
  });
  socket.on('disconnect', function(data) {
    if(!socket.username) return;
    usernames.splice(usernames.indexOf(socket.username), 1);
    updateUsername();
  });
})
