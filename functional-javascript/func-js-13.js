function repeat(operation, num) {
  // modify this so it can be interrupted
  if (num <= 0) {
    return;
  }
  operation();
  //num is a big iterator
  //is not possible check with <>
  //a division is the best solution
  if (num % 10 === 0) {
    //settimeout without a delay is executed now
    setTimeout(function() {
      repeat(operation, --num);
    });
  } else {
    repeat(operation, --num);
  }
 
}

module.exports = repeat;
