
exports.handler = async (event, context, callback) => {
  console.log('Hello universe')
  console.log(event)
  callback(null, {data: 'Gamma'})
}
