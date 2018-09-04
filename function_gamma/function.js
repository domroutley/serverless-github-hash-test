
exports.handler = (event, context, callback) => {
  console.log('Hello universe')
  console.log(event)
  callback(null, {statusCode: 200, data: 'Some data from Gamma'})
}
