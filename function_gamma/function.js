
exports.handler = async (event, context, callback) => {
  console.log('Hello universe')
  console.log(event)
  return callback(null, {statusCode: 200, data: 'some data'})
}
