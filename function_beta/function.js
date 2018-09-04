
exports.handler = (event, context, callback) => {
  console.log('Hello world')
  console.log(event)
  callback(null, {statusCode: 200, data: 'Some data sent from Beta'})
}
