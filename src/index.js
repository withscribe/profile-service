const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const ora = require('ora')
require('dotenv').config()

const Query = require('./resolvers/query')
const Mutation = require('./resolvers/mutation')

const resolvers = {
  Query,
  Mutation,
}

const { buildSessionMiddleware, buildAuthMiddleware } = require('./middleware/middlewareBuilder')
const errorMiddleware = require('./middleware/errorMiddleware')
const loggingSessionMiddleware = buildSessionMiddleware(resolvers)
const authMiddleware =  buildAuthMiddleware(resolvers)

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    prisma
  }),
  middlewares: [
    // authMiddleware,
    loggingSessionMiddleware,
    errorMiddleware
  ]
});

const options = {
  port: process.env.PORT,
  endpoint: '/profile',
  subscriptions: '/sub/profile',
  playground: '/profile/playground'
}

server.start(options, ({ port }) => {
  const spinner = ora().start()
  setTimeout(function() {
    console.log(`Profile service has started! Open on port: ${port}`)
    spinner.stop()
  }, 1000);
});
