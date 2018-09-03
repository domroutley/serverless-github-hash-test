
exports.handler = async (event, context, callback) => {
  console.log('Hello world')
  console.log(event)
  return {statusCode: 200, data: 'some data'}
}
