const { verifyToken } = require('../utils');

profileById = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return profile = await context.prisma.profile({ id: args.id })
}

profileByAccountId = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.profile({ account_id: args.accountId })
}

profileByUsername = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.profiles({
    where: {
      OR: [
        { userName_contains: args.userName }
      ]
    }
  })
}

orgById = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.organization({ id: args.id })
}

searchProfiles = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return context.prisma.profiles({
    where: {
      OR: [
        { userName_contains: args.searchString },
        { firstName_contains: args.searchString },
        { lastName_contains: args.searchString },
        { dateOfBirth_contains: args.searchString },
        { occupation_contains: args.searchString }
      ],
    },
  })
}

searchOrganizations = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.organizations({
    where: {
      OR: [
        { orgName_contains: args.searchString },
        { orgType_contains: args.searchString },
        { address_contains: args.searchString },
        { country_contains: args.searchString },
      ]
    }
  })
}

allProfiles = async(_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.profiles({})
}

allOrganizations = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.organizations({})
}

userNameExists = async (_, args, context, info) => {
  return await context.prisma.profile({ userName: args.userName })
}

communitiesMembers = (_, args, context, info) => {
  const payload = verifyToken(context)
  return context.prisma.profiles({where: { id_in: args.membersIds }})
}

module.exports = {
  searchProfiles,
  allProfiles,
  profileById,
  profileByAccountId,
  profileByUsername,
  allOrganizations,
  searchOrganizations,
  orgById,
  userNameExists,
  profilesByCommunityId,
  communitiesMembers
}
