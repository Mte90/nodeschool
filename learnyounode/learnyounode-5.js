var fs = require('fs');

var file = fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (element, index, array) {
    //or us path module with extname 
    if (element.split('.').length > 1) {
      if (element.split('.').pop() === process.argv[3]) {
        console.log(element);
      }
    }
  });
});
