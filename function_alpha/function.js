const request = require('request')
var ENDPOINT = process.env.SELF_ENDPOINT

exports.handler = (event, context, callback) => {
  console.log('Alpha function called')
  console.log('API address pulled from CloudFormation: '.concat(ENDPOINT))
  callBeta(event, callback)
  callGamma(event, callback)
  console.log('End')
}

var callBeta = (event, callback) => {
  console.log('callBeta function')
  let options = {
    url: ENDPOINT.concat('beta'),
    method: 'POST',
    body: event,
    json: true
  }
  if (process.env.AWS_REGION) { // If I am running on AWS then use aws auth for IAM
    var awsAuth = {
      key: process.env.AWS_ACCESS_KEY_ID,
      secret: process.env.AWS_SECRET_ACCESS_KEY,
      session: process.env.AWS_SESSION_TOKEN,
      sign_version: 4
    }
    options.aws = awsAuth
  }
  send(options, callback)
}

var callGamma = (event, callback) => {
  console.log('callGamma function')
  let options = {
    url: ENDPOINT.concat('gamma'),
    method: 'POST',
    body: event,
    json: true,
    aws: awsAuth
  }
  if (process.env.AWS_REGION) { // If I am running on AWS then use aws auth for IAM
    var awsAuth = {
      key: process.env.AWS_ACCESS_KEY_ID,
      secret: process.env.AWS_SECRET_ACCESS_KEY,
      session: process.env.AWS_SESSION_TOKEN,
      sign_version: 4
    }
    options.aws = awsAuth
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
