function repeat(operation, num) {
  for (var i = 0, max = num; i < max; i++) {
    operation();
  }
}

// Do not remove the line below
module.exports = repeat;
