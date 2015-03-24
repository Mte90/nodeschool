//Remove first 2 parameter
delete process.argv[0];
delete process.argv[1];
//Loop with sum
var i = 0;
process.argv.forEach(function(element, index, array) {
  i += parseInt(element);
});
console.log(i);