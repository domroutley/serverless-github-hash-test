const request = require('request')
var ENDPOINT = 'https://XXX.execute-api.eu-central-1.amazonaws.com/test/'

exports.handler = (event, context, callback) => {
  console.log('Alpha function called')
  callBeta(event, callback)
  callGamma(event, callback)
  console.log('End')
}

var callBeta = (event, callback) => {
  console.log('Calling beta')
  var awsAuth = {
    key: process.env.AWS_ACCESS_KEY_ID,
    secret: process.env.AWS_SECRET_ACCESS_KEY,
    session: process.env.AWS_SESSION_TOKEN,
    sign_version: 4
  }
  let options = {
    url: ENDPOINT.concat('beta'),
    method: 'POST',
    body: event,
    json: true,
    aws: awsAuth
  }
  send(options, callback)
}

var callGamma = (event, callback) => {
  console.log('Calling gamma')
  var awsAuth = {
    key: process.env.AWS_ACCESS_KEY_ID,
    secret: process.env.AWS_SECRET_ACCESS_KEY,
    session: process.env.AWS_SESSION_TOKEN,
    sign_version: 4
  }
  let options = {
    url: ENDPOINT.concat('gamma'),
    method: 'POST',
    body: event,
    json: true,
    aws: awsAuth
  }
  send(options, callback)
}

const send = (options, callback) => {
  request(options,
    (error, body) => {
      console.log(error)
      console.log(body.body)
      callback(error, body)
    }
  )
}
