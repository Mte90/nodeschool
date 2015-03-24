function Spy(target, method) {
  var spy_this_target = target[method];
  var spy_count = {
    count: 0
  };

  target[method] = function() {
    spy_count.count++;
    return spy_this_target.apply(target, arguments);
  };

  return spy_count;
}

module.exports = Spy;