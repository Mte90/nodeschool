var mymodule = require('./learnyounode-6-module.js');

mymodule(process.argv[2], process.argv[3], function (err, files) {
  files.forEach(function (file) {
    console.log(file);
  });
});