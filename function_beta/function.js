
exports.one = (event, context, callback) => {
  console.log('Hello world')
  console.log(event)
  var giveBack = {
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({'data': 'Lore sent from Beta one'})
  }
  callback(null, giveBack)
}

exports.two = (event, context, callback) => {
  console.log('Hello world')
  console.log(event)
  var giveBack = {
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({'data': 'Lore sent from Beta two'})
  }
  callback(null, giveBack)
}
