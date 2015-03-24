var http = require('http')

urls = [process.argv[2], process.argv[3], process.argv[4]]
results = []

// initialise results array
for (i = 0; i < urls.length; i++) {
  results[i] = null;
}


for (i = 0; i < urls.length; i++) {
  (function(i) {
    http.get(urls[i], function(request) {
      var result = "";
      request.setEncoding("utf8");

      request.on("data", function(data) {
        result += data;
      });
      
      request.on("end", function() {
        results[i] = result;
        var resultCount = 0;
        for (j = 0; j < results.length; j++) {
          if (results[j] != null) resultCount++;
        }
        if (resultCount == results.length) {
          for (j = 0; j < results.length; j++) {
            console.log(results[j]);
          }
        }
      });
    });
  })(i);
}