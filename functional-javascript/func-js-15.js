function loadUsers(userIds, load, done) {
  var users = [];
  var completed = 0;
  //loop the users the best way
  userIds.forEach(function (element, index, array) {
    //load have 2 parameter, respect to the boilerplate
    load(element, function (user) {
      completed++;
      //create a new array associative because done create aonther array associative
      users[index] = user;
      if (completed === userIds.length) {
        return done(users);
      }
    });
  });
  return users;
}

module.exports = loadUsers;
