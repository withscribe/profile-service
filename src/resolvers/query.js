const { verifyToken } = require('../utils');

async function profileById(_, args, context, info) {
    const payload = verifyToken(context);
    return profile = await context.prisma.profile({ id: args.id })
}

function profileByAccountId(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.profile({ account_id: args.accountId })
}

function profileByUsername(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.profiles({
        where: {
            OR: [
                { userName_contains: args.userName }
            ]
        }
    })
}
function orgById(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.organization({ id: args.id })
}

function searchProfiles(_, args, context, info) {
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

function searchOrganizations(_, args, context, info)  {
    const payload = verifyToken(context);
    return context.prisma.organizations({
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

function allProfiles(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.profiles(_)

}
function allOrganizations(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.organizations(_)
}


async function userNameExists(_, args, context, info) {
    return await context.prisma.profile({ userName: args.userName })
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
    userNameExists
}
