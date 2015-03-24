function checkUsersValid(goodUsers) {
  return function (submittedUsers) {
    return submittedUsers.every(function (element, index, array) {
      return goodUsers.some(function (user) {
        if (user.id === element.id) {
          return true;
        }
      });
    });
  };
}

module.exports = checkUsersValid;