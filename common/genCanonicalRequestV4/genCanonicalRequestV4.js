const strictUriEncode = require('strict-uri-encode')

module.exports = (method, path, payload, callback) => {
  var canonicalRequest = ''
  const validMethods = ['POST', 'GET'] // Expand as needs be
  if (validMethods.includes(method.toUpperCase())) {
    canonicalRequest = canonicalRequest.concat(method.toUpperCase() + '\n')
  } else {
    callback(true,
      'ERROR: Method `' + method +
      '` not in validMethods list:' + validMethods.toString())
  }

  canonicalRequest = canonicalRequest.concat(strictUriEncode(path))

  // TODO add support for query parameters

  // TODO add canonical headers


}
