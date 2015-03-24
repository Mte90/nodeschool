var http = require('http');

http.get(process.argv[2], function (result) {
  var output = '';
  result.setEncoding('utf8');
  result.on('data', function (data) {
    output += data;
  });
  result.on('end', function () {
    console.log(output.length);
    console.log(output);
  });
}).on('error', function (err) {
  console.log(err);
});