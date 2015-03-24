module.exports = function (namespace) {
  //bind add the parameter of the class automatically
  return console.log.bind(console, namespace)
}
