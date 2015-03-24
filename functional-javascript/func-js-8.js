function duckCount() {
  //slice return a new array
  //we use filter for ehm filter :-P
  return Array.prototype.slice.call(arguments).filter(function(obj){
    return Object.prototype.hasOwnProperty.call(obj, 'quack');
  }).length;
  //length for the number
}

module.exports = duckCount
