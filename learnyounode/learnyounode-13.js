var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
  var api = url.parse(req.url, true);
  var path = api.pathname;
  var date = new Date(api.query.iso);

  if(path === '/api/unixtime'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({"unixtime": date.getTime()}));
  }else if(path === '/api/parsetime'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ "hour": date.getHours(), "minute": date.getMinutes(), "second": date.getSeconds()}));
  }else{
    res.writeHead(404);
    res.end();
  }
});
server.listen(process.argv[2]);
