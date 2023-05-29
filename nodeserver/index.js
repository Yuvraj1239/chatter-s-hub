const io = require('socket.io')(8000, {
  cors: {
    origin: '*',
  },
});

const users = {};

io.on('connection', function (socket) {
  socket.on('new-user-joined', (name) => {
    console.log("New user");
    users[socket.id] = name;
    socket.broadcast.emit('user-joined', name);
  });

  socket.on('send', function (message) {
    socket.broadcast.emit('receive', {
      message: message,
      name: users[socket.id]
    });
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('left', users[socket.id]);
    delete users[socket.id];
  });
});
