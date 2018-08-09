const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const resolvers = require('./resolvers')

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'http://localhost:4467',
    }),
  }),
});

const options = {
  port: 3000,
  endpoint: '/profile',
  subscriptions: '/sub/profile',
  playground: '/profile/playground'
}

server.start(options, ({ port }) => console.log(`GraphQL server is running on PORT: ${port}`));