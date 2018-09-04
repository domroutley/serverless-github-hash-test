
exports.handler = (event, context, callback) => {
  console.log('Hello universe')
  console.log(event)
  var giveBack = {
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: {'data': 'Lore sent from Beta'}
  }
  callback(null, giveBack)
}
