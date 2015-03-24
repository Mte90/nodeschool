function getShortMessages(messages) {
  var new_n = messages.filter(function (item) {
    if (item.message.length < 50) {
      return item.message;
    }
  });
  return new_n;
}

module.exports = getShortMessages;