module.exports = function arrayMap(arr, fn) {
  //reduce call the callback once for every item
  return arr.reduce(function(acc, item, index, arr) {
    //map create a new array so return the new array
    return acc.concat(fn(item, index, arr));
  }, []);
};