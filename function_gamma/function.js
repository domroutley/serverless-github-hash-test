
exports.handler = async (event, context) => {
  console.log("Gamma")
  console.log(event)
  context.succeed('Hello universe')
}
