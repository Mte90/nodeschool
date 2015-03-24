function getDependencies(tree, all_deps) {
  if (!all_deps) {
    all_deps = [];
  }
  var deps = tree.dependencies;
  if (!deps) {
    deps = {};
  }
  //object are not array
  //object get all the index and return as an array, perfect to foreach
  Object.keys(deps).forEach(function (deps_element) {
    var actual = tree.dependencies[deps_element];
    var package = deps_element + '@' + actual.version;
    //check if the index exist is not the correct solution
    //we have sub package so we get error on the search
    // search the string is the best solution
    if (all_deps.indexOf(package) === -1) {
      all_deps.push(package);
    }
    getDependencies(actual, all_deps);
  });
  return all_deps.sort();
}

module.exports = getDependencies
