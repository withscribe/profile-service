const jwt = require('jsonwebtoken')
const { AuthError } = require('../../errorHandling/customerrors')

const permissionlessQueries = ["allProfiles", "profileById", "communitiesMembers"]

const verifyToken = async (resolve, parent, args, context, info) => {
  if(permissionlessQueries.indexOf(info.fieldName) > -1) {
    return await resolve(parent, args, context, info)
  } else {
    const Authorization = context.request.headers['Authorization']
    if (Authorization) {
      const token = Authorization.replace('Bearer ', '')
      const payload = jwt.verify(token, process.env.TOKEN_SECRET);
      return payload
    }

    throw new AuthError("401 User Not Authorized.", context)
  }
}

module.exports = verifyToken