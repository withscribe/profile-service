const logSession = async (resolve, parent, args, context, info) => {
  const session = await context.prisma.createLogSession({
    args: args,
    ipAddress: context.request.headers['IPAddress'],
    origin: context.request.headers['Origin']
      ? context.request.headers['Origin']
      : "no origin (temp msg)",
    resolver: info.fieldName
  }, `{ id }`)
  // Important: notice how we’re adding the session ID as a new arg.
  // Later it gets passed into the error logging middleware
  const argsWithSession = { ...args, sessionId: session.id }
  return await resolve(parent, argsWithSession, context, info)
}

module.exports = logSession