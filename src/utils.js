const jwt = require('jsonwebtoken')
const { AuthError } = require('./errorHandling/customerrors')

function verifyToken(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const payload = jwt.verify(token, process.env.TOKEN_SECRET);
    return payload
  }

  throw new AuthError("401 User Not Authorized.", context)
}

module.exports = {
  verifyToken,
}