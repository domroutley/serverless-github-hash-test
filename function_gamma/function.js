
exports.handler = (event, context, callback) => {
  console.log('Hello universe')
  console.log(event)
  var giveBack = {
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({'data': 'Lore sent from Gamma'})
  }
  callback(null, giveBack)
}
