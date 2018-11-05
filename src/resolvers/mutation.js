const { verifyToken } = require('../utils');

async function createProfile(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.createProfile({
        account_id: args.accountId,
        firstName: args.firstName,
        lastName: args.lastName,
        dateOfBirth: args.dob,
        occupation: args.occupation,
        employer: {
            create: {
                orgName: args.orgName,
                country: args.country,
                address: args.address,
                orgType: args.orgType,
            }
        },
    })
}

async function registerProfile(_, args, context, info) {
    return context.prisma.createProfile({
        account_id: args.accountId,
        userName: args.userName
    })
}
async function updateProfileCreate(_, args, context, info) {
    const payload = verifyToken(context);

    const profile = await context.prisma.profile({ account_id: payload.accountId })

    if(args.userName != profile.userName) {
        const exists = await context.prisma.$exists.profile({ userName: args.userName })

        if(exists == null) {
            profile.userName = args.userName
        } else {
            throw new Error("Username has already been taken")
        }
    }
    return updatedProfile = await context.prisma.updateProfile({
        where: {
            id: profile.id
        },
        data: {
            userName: profile.userName,
            firstName: args.firstName,
            lastName: args.lastName,
            dateOfBirth: args.dob,
            occupation: args.occupation,
        }
    })
}

function updateProfileConnect(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.updateProfile({
        where: {
            account_id: payload.accountId
        },
        data: {
            userName: args.userName,
            firstName: args.firstName,
            lastName: args.lastName,
            dateOfBirth: args.dob,
            occupation: args.occupation,
            employer: {
                connect: {
                    id: args.employerId
                }
            },
        }
    })
}

function removeProfile(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.deleteProfile({ id: args.id })
}

function createOrganization(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.createOrganization({
        orgName: args.orgName,
        address: args.address,
        country: args.country,
        orgType: args.orgType
    })
}

function updateOrganization(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.createOrganization({
        where: {
            id: args.orgId
        },
        data: {
            orgName: args.orgName,
            address: args.adress,
            country: args.country,
            orgType: args.orgType
        },
    })
}

function removeOrganization(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.deleteOrganization({ id: args.id })
}

function addNewEmployerToProfile(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.updateProfile({
        where: {
            account_id: payload.accountId
        },
        data: {
            employer: {
                create: {
                    orgName: args.employer.orgName,
                    address: args.employer.address,
                    country: args.employer.country,
                    orgType: args.employer.address
                }
            }
        }
    })
}

function addEmployerToProfile(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.updateProfile({
        where: {
            account_id: payload.accountId
        },
        data: {
            employer: {
                connect: {
                    id: args.employerId
                }
            }
        }
    })
}

function addStoriesToProfile(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.updateProfile({
        where: {
            account_id: accountId
        },
        data: {
            stories: {
                connect: [
                    { id: args.storyIds }
                ]
            }
        }
    })
}

async function updateFlaggedCount(_, args, context, info) {
    const payload = verifyToken(context);
    const profile = await context.prisma.profile({ id: args.profileId })

    profile.flaggedStories = profile.flaggedStories + 1;

    return context.prisma.updateProfile({
        where: {
            id: args.profileId
        },
        data: {
            flaggedStories: profile.flaggedStories
        }
    })
}

async function updatePublishedCount(_, args, context, info) {
    const payload = verifyToken(context);
    const profile = await context.prisma.profile({ id: args.profileId })

    profile.storiesPublished = profile.storiesPublished + 1;

    return context.prisma.updateProfile({
        where: {
            id: args.profileId
        },
        data: {
            storiesPublished: profile.storiesPublished
        }
    })
}

async function updateReviewedCount(_, args, context, info) {
    const payload = verifyToken(context);
    const profile = await context.prisma.profile({ id: args.profileId })

    profile.storiesReviewed = profile.storiesReviewed + 1;

    return context.prisma.updateProfile({
        where: {
            id: args.profileId
        },
        data: {
            storiesReviewed: profile.storiesReviewed
        }
    })
}

async function addLikedStory(_, args, context, info) {
    const payload = verifyToken(context);

    const profile = await context.prisma.profile({ account_id: payload.accountId })
    const like = await context.prisma.createLikes({ guid: args.storyId + profile.id })

    return await context.prisma.updateProfile({
        where: {
            id: profile.id
        },
        data: {
            storiesLiked: { connect: { id: like.id } }
        }
    })
}

async function removeLikedStory(_, args, context, info) {
    const payload = verifyToken(context);

    const profile = await context.prisma.profile({ account_id: payload.accountId })
    const like = await context.prisma.createLikes({ guid: args.storyId + profile.id })

    return await context.prisma.updateProfile({
        where: {
            id: profile.id
        },
        data: {
            storiesLiked: { delete: { id: like.id } }
        }
    })
}

module.exports = { 
    addStoriesToProfile,
    addEmployerToProfile,
    addNewEmployerToProfile,
    removeProfile,
    createOrganization,
    updateOrganization,
    removeOrganization,
    updateProfileCreate,
    updateProfileConnect,
    createProfile,
    registerProfile,
    updateReviewedCount,
    updatePublishedCount,
    updateFlaggedCount,
    addLikedStory,
    removeLikedStory    
}
