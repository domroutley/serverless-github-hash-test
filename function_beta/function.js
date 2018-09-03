
exports.handler = async (event, context) => {
  console.log("Beta")
  console.log(event)
  context.succeed('Hello world')
}
