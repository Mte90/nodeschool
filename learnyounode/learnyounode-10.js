var net = require('net');

function zero(i) {
  return (i < 10 ? '0' : '') + i
}

var server = net.createServer(function (socket) {
  var time = new Date();
  socket.write(time.getFullYear() + "-" + zero((time.getMonth() + 1)) + "-" + zero(time.getDate()) + " " + zero(time.getHours()) + ":" + zero(time.getMinutes()));
  socket.write('\n').end();
});
server.listen(process.argv[2]);