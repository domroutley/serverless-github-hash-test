const aws = require('aws-sdk')

exports.handler = async (event, context) => {
  console.log("Alpha function called")
  var lambda = new aws.Lambda({region: 'eu-central-2'})

  var event = {
    success: true,
    data: 'yup'
  }
  callBeta(lambda, event)
}

var callBeta = (lambda, event) => {
  lambda.invoke({
    FunctionName: 'Dom-DOGAUTO-401-test-beta',
    Payload: JSON.stringify(event)
  },
  (error, data) => {
    if (error) {
      console.log('Beta fail')
      console.log(error)
      context.done('error', error)
    } else {
      context.succeed(data.Payload)
      console.log('Beta called successfully')
      console.log(data.Payload)
      callGamma(lambda, data.Payload)
    }
  })
}

var callGamma = (lambda, event) => {
  lambda.invoke({
    FunctionName: 'Dom-DOGAUTO-401-test-beta',
    Payload: JSON.stringify(event)
  },
  (error, data) => {
    if (error) {
      console.log('Gamma fail')
      console.log(error)
      context.done('error', error)
    } else {
      context.succeed(data)
      console.log('Gamma called successfully')
      console.log(data.Payload)
    }
  })
}
