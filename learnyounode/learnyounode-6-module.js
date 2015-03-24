module.exports = function (directory, ext, callback) {
  var fs = require('fs');
  var file = fs.readdir(directory, function (err, list) {
    if (err)
      return callback(err, [])
    
    var results = [];
    list.forEach(function (element, index, array) {
      //or us path module with extname 
      if (element.split('.').length > 1) {
        if (element.split('.').pop() === ext) {
          results.push(element);
        }
      }
    });
    
    callback(null, results);
  });
}
