var slice = Array.prototype.slice;

function logger(namespace) {
  //namespace is used as a paramter for the class 
  //the function is the function that is called after the inizialitation
  return function () {
    //slice remove the index
    //concat transform the array in a string
    console.log.apply(console, [namespace].concat(slice.call(arguments)));
  };
}

module.exports = logger;
