
exports.handler = async (event, context, callback) => {
  console.log('Hello world')
  console.log(event)
  return callback(null, {data: 'Beta'})
}
