function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) {
    return;
  }
  //return the function because trampoline require a function
  return function () {
    operation();
    return repeat(operation, --num);
  };
}

function trampoline(fn) {
  // You probably want to implement a trampoline!
  // check every time in a loop the fn
  while (fn && typeof fn === 'function') {
    fn = fn();
  }
}

module.exports = function (operation, num) {
  // You probably want to call your trampoline here!
  trampoline(function () {
    return repeat(operation, num);
  });
}