const { verifyToken } = require('../utils');


function profileById(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.query.profile(
        {
            where: {
                id: args.id,
            },
        },
        info,
    )
}
function profileByAccountId(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.query.profile(
        {
            where: {
                account_id: args.accountId
            },
        },
        info,
    )
}
function profileByUsername(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.query.profiles(
        {
            where: {
                OR: [
                    { userName_contains: args.userName }
                ]
            }
        }
    )
}
function orgById(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.query.organization(
        {
            where: {
                id: args.id
            },
        },
        info
    )
}

function accredById(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.query.organization(
        {
            where: {
                id: args.id
            },
        },
        info
    )
}

function searchProfiles(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.query.profiles(
        {
            where: {
                OR: [
                    { userName_contains: args.searchString },
                    { firstName_contains: args.searchString },
                    { lastName_contains: args.searchString },
                    { dateOfBirth_contains: args.searchString },
                    { occupation_contains: args.searchString }
                ],
            },
        },
    )
}
function searchOrganizations(_, args, context, info)  {
    const payload = verifyToken(context);
    return context.prisma.query.organizations(
        {
            where: {
                OR: [
                    { orgName_contains: args.searchString },
                    { orgType_contains: args.searchString },
                    { address_contains: args.searchString },
                    { country_contains: args.searchString },
                ]
            }
        }
    )
}

function searchAccreds(_, args, context, info)  {
    const payload = verifyToken(context);
    return context.prisma.query.organizations(
        {
            where: {
                OR: [
                    { accredsName_contains: args.searchString },
                    { accredsDesc_contains: args.searchString },
                    { accredsType_contains: args.searchString },
                    { dateReceived_contains: args.searchString },
                ]
            }
        }
    )
}
function allProfiles(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.query.profiles(
        _, info
    )

}
function allOrganizations(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.query.organizations(
        _, info
    )
}

function allAccreds(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.query.accredidations(
        _, info
    )
}

async function userNameExists(_, args, context, info) {
    return await context.prisma.query.profiles(
        {
            where:  {
                OR: [
                    {userName_contains: args.userName}
                ]
            }
        }, 
        info
    )
}


module.exports = {
    searchProfiles,
    searchAccreds,
    allProfiles,
    profileById,
    profileByAccountId,
    profileByUsername,
    allOrganizations,
    searchOrganizations,
    orgById,
    allAccreds,
    accredById,
    userNameExists
}
