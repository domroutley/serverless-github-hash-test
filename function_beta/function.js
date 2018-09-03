
exports.handler = async (event, context, callback) => {
  console.log('Hello world')
  console.log(event)
  callback(null, {data: 'Beta'})
}
