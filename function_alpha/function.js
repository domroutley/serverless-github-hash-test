const requests = require('requests')
var ENDPOINT = 'https://XXX.execute-api.eu-central-1.amazonaws.com/test/'

exports.handler = async (event, context, callback) => {
  console.log('Alpha function called')
  callBeta(event, callback)
  callGamma(event, callback)
  console.log('End')
}

var callBeta = (event, callback) => {
  console.log('Calling beta')
  let options = {
    url: ENDPOINT.concat('beta'),
    method: 'POST',
    body: event
  }
  send(options, callback)
}

var callGamma = (event, callback) => {
  console.log('Calling gamma')
  let options = {
    url: ENDPOINT.concat('gamma'),
    method: 'POST',
    body: event
  }
  send(options, callback)
}

const send = (options, callback) => {
  requests(options,
    (error, body) => {
      if (error) {
        callback(error, null)
      } else {
        callback(null, body)
      }
    }
  )
}
