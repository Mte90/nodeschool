function reduce(arr, fn, initial) {
  //fn is the array.#reduce function so same parameters
  return (function reduce_(index, value) {
    //add the last return for get the value, check if the last element
    if (index > arr.length - 1) {
      return value;
    }
    //index++ if index is zero remain zero
    var i = index + 1;
    return reduce_(i, fn(value, arr[index], index, arr));
  })(0, initial);
}

module.exports = reduce