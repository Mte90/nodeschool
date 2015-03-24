function countWords(inputWords) {
  var count = {};
  return inputWords.reduce(function (previousValue, currentValue, index, array) {
    //http://stackoverflow.com/questions/1098040/checking-if-an-array-key-exists-in-a-javascript-object-or-array
    if (count.hasOwnProperty(currentValue)) {
      count[currentValue]++;
    } else {
      count[currentValue] = 1;
    }
    return count;
  }, {});
}

module.exports = countWords