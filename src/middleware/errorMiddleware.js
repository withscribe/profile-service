const errorMiddleware = async (resolve, root, args, context, info) => {
  try {
    return await resolve(root, args, context, info)
  }
  catch (err) {
    const sessionId = args.sessionId
    // remove session ID from args
    delete args.sessionId
    context.prisma.createLogError({
      args,
      error: err,
      LogSession: {
        connect: {
          id: sessionId
        }
      }
    })
    // Throw error to communicate error to browser.
    throw new Error(err)
  }
}

module.export = { errorMiddleware }