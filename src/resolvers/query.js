// Author: Austin Howlett
// Description: Responsible for resolving all query (in relation to REST this would GET endpoints) schema endpoints (business logic)

const { verifyToken } = require('../utils');
const { profileFragment } = require("../fragments/ProfileFragment");
const { organizationFragment } = require("../fragments/OrganizationFragment");

profileById = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return profile = await context.prisma.profile({ id: args.id }).$fragment(profileFragment)
}

profileByAccountId = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.profile({ account_id: args.accountId }).$fragment(profileFragment)
}

profileByUsername = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.profiles({
    where: {
      OR: [
        { userName_contains: args.userName }
      ]
    }
  }).$fragment(profileFragment)
}

orgById = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.organization({ id: args.id }).$fragment(organizationFragment)
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
  }).$fragment(profileFragment)
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
  }).$fragment(organizationFragment)
}

allProfiles = async(_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.profiles({}).$fragment(profileFragment)
}

allOrganizations = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.organizations({}).$fragment(organizationFragment)
}

userNameExists = async (_, args, context, info) => {
  return await context.prisma.profile({ userName: args.userName }).$fragment(profileFragment)
}

communitiesMembers = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.profiles({where: { id_in: args.membersIds }}).$fragment(profileFragment)
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
  communitiesMembers
}
