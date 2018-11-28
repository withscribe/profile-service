// Author: Austin Howlett
// Description: Server code, responsible for starting the GraphQLServer and set the pathing and port

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

const server = new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers,
    context: req => ({
        ...req,
        prisma
    }),
});

const options = {
    port: process.env.PORT || 43813,
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
