const logSession = require('./resolvers/logSession')
const verifyToken = require('./resolvers/verifyToken')

const buildSessionMiddleware = (resolvers) => {
  const queryResolvers = Object.keys(resolvers.Query).reduce((result, item) => {
    result[item] = logSession
    return result
  }, {})

  const mutationResolvers = Object.keys(resolvers.Mutation).reduce((result, item) => {
    result[item] = logSession
    return result
  }, {})

  // Add session logger to middleware
  const sessionMiddleware = {
    Query: {
      ...queryResolvers
    },
    Mutation: {
      ...mutationResolvers
    }
  }

  return sessionMiddleware
}

const buildAuthMiddleware = (resolvers) => {
  const queryResolvers = Object.keys(resolvers.Query).reduce((result, item) => {
    result[item] = verifyToken
    return result
  }, {})

  const mutationResolvers = Object.keys(resolvers.Mutation).reduce((result, item) => {
    result[item] = verifyToken
    return result
  }, {})

  // Add auth resolvers to middleware
  const authMiddleware = {
    Query: {
      ...queryResolvers
    },
    Mutation: {
      ...mutationResolvers
    }
  }

  return authMiddleware
}

module.exports =  { buildSessionMiddleware, buildAuthMiddleware }