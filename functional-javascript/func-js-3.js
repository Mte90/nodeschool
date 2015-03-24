function doubleAll(numbers) {
  var new_n = numbers.map(function(item){ 
    return item * 2;
  });
  return new_n;
}

module.exports = doubleAll;