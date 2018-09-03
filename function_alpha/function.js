const request = require('request')
var ENDPOINT = 'https://gdi972osy5.execute-api.eu-central-1.amazonaws.com/test/'

exports.handler = (event, context, callback) => {
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
    body: event,
    json: true
  }
  send(options, callback)
}

var callGamma = (event, callback) => {
  console.log('Calling gamma')
  let options = {
    url: ENDPOINT.concat('gamma'),
    method: 'POST',
    body: event,
    json: true
  }
  send(options, callback)
}

const send = (options, callback) => {
  request(options,
    (error, body) => {
      callback(error, body)
    }
  )
}
