const { verifyToken } = require('../utils');


async function createProfile(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.mutation.createProfile(
        {
            data: {
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
                accredidations: {
                    create: [
                        {
                            accredsName: args.accredsName,
                            accredsDesc: args.accredsDesc,
                            accredsType: args.accredsType,
                            dateReceived: args.dateReceived,
                            accreditorOrg: {
                                create: {
                                    orgName: args.orgName,
                                    country: args.country,
                                    address: args.address,
                                    orgType: args.orgType,
                                }
                            }
                        }
                    ]
                }

            },
            info
        }
    )
}

async function registerProfile(_, args, context, info) {

    const exists = await context.prisma.query.profile(
        {
            where:  {
                userName: args.userName
            }
        }, 
        info
    )
    console.log(exists)

    return context.prisma.mutation.createProfile(
        {
            data: {
                account_id: args.accountId,
                userName: args.userName
            }
        }
    )
}
async function updateProfileCreate(_, args, context, info) {
    const payload = verifyToken(context);

    const profile = await context.prisma.query.profile(
        {
            where: {
                account_id: payload.accountId
            }
        }
    )

    if(args.userName != profile.userName) {
        const exists = await context.prisma.query.profile(
            {
                where:  {
                    userName: args.userName
                }
            }, 
            info
        )

        if(exists == null) {
            profile.userName = args.userName
        } else {
            throw new Error("Username has already been taken")
        }
    }
    const updatedProfile = await context.prisma.mutation.updateProfile(
        {
            where: {
                id: profile.id
            },
            data: {
                userName: profile.userName,
                firstName: args.firstName,
                lastName: args.lastName,
                dateOfBirth: args.dob,
                occupation: args.occupation,
                // employer: {
                //     create: {
                //         orgName: args.employer.orgName,
                //         orgType: args.employer.orgType,
                //         country: args.employer.country,
                //         address: args.employer.address,
                //     }
                // },
                // accredidations: {
                //     create: {
                //         accredsName: args.accreds.accredsName,
                //         accredsDesc: args.accreds.accredsDesc,
                //         accredsType: args.accreds.accredsType,
                //         dateReceived: args.accreds.dateReceived,
                //         accreditorOrg: {
                //             create: {
                //                 orgName: args.accreds.orgName,
                //                 orgType: args.accreds.accreditorOrge,
                //                 country: args.accreds.accreditorOrg,
                //                 address: args.accreds.accreditorOrg,
                //             },
                //         },
                //     }
                // }
            }
        }
    )
    return updatedProfile
}

function updateProfileConnect(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.mutation.updateProfile(
        {
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
                accredidations: {
                    connect: [{
                        id: args.accredsIds
                    }]
                }
            }
        }
    )
}

function removeProfile(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.mutation.deleteProfile(
        {
            where: {
                id: args.id
            }
        }
    )
}

function createAccredsConnect(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.mutation.createAccredidation(
        {
            data: {
                accredsName: args.name,
                accredsDesc: args.desc,
                accredsType: args.type,
                dateReceived: args.dateReceived,
                accreditorOrg: {
                    connect: {
                        id: args.accreditorId
                    },
                },
            },
        },
        info,
    )
}

function createAccredsCreate(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.mutation.createAccredidation(
        {
            data: {
                accredsName: args.name,
                accredsDesc: args.desc,
                accredsType: args.type,
                dateReceived: args.dateReceived,
                accreditorOrg: {
                    create: {
                        orgName: args.accreditor.orgName,
                        country: args.accreditor.country,
                        address: args.accreditor.address,
                        orgType: args.accreditor.orgType

                    },
                },
            },
        },
        info,
    )
}

function updateAccreds(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.mutation.updateAccredidation(
        {
            where: {
                id: args.accredId
            },
            data: {
                accredsName: args.name,
                accredsDesc: args.desc,
                accredsType: args.type,
                dateReceived: args.dateReceived,
                accreditorOrg: {
                    connect: {
                        id: args.accreditorId
                    },
                },
            },
        },
        info,
    )
}

function removeAccreds(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.mutation.deleteAccredidation(
        {
            where: {
                id: args.id
            }
        }
    )
}

function createOrganization(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.mutation.createOrganization(
        {
            data: {
                orgName: args.orgName,
                address: args.address,
                country: args.country,
                orgType: args.orgType
            },
        },
        info

    )
}

function updateOrganization(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.mutation.createOrganization(
        {
            where: {
                id: args.orgId
            },
            data: {
                orgName: args.orgName,
                address: args.adress,
                country: args.country,
                orgType: args.orgType
            },
        },
        info

    )
}

function removeOrganization(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.mutation.deleteOrganization(
        {
            where: {
                id: args.id
            }
        }
    )
}

function addAccredsToProfile(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.mutation.updateProfile(
        {
            where: {
                account_id: payload.accountId
            },
            data: {
                accredidations: 
                    {
                        connect: {
                            id: args.accredidationIds
                        }
                    }
            }
        }
    )
}

function addNewEmployerToProfile(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.mutation.updateProfile(
        {
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
        }
    )
}

function addEmployerToProfile(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.mutation.updateProfile(
        {
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
        }
    )
}

function addStoriesToProfile(_, args, context, info) {
    const payload = verifyToken(context);
    return context.prisma.mutation.updateProfile(
        {
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
        }
    )
}

async function updateFlaggedCount(_, args, context, info) {
    const payload = verifyToken(context);
    const profile = await context.prisma.query.profile(
        {
            where: {
                id: args.profileId
            }
        }, ` { flaggedStories } `
    )

    profile.flaggedStories = profile.flaggedStories + 1;

    return context.prisma.mutation.updateProfile(
        {
            where: {
                id: args.profileId
            },
            data: {
                flaggedStories: profile.flaggedStories
            }
        }
    )
}

async function updatePublishedCount(_, args, context, info) {
    const payload = verifyToken(context);
    const profile = await context.prisma.query.profile(
        {
            where: {
                id: args.profileId
            }
        }, ` { storiesPublished } `
    )

    profile.storiesPublished = profile.storiesPublished + 1;

    return context.prisma.mutation.updateProfile(
        {
            where: {
                id: args.profileId
            },
            data: {
                storiesPublished: profile.storiesPublished
            }
        }
    )
}

async function updateReviewedCount(_, args, context, info) {
    const payload = verifyToken(context);
    const profile = await context.prisma.query.profile(
        {
            where: {
                id: args.profileId
            }
        }, ` { storiesReviewed } `
    )

    profile.storiesReviewed = profile.storiesReviewed + 1;

    return context.prisma.mutation.updateProfile(
        {
            where: {
                id: args.profileId
            },
            data: {
                storiesReviewed: profile.storiesReviewed
            }
        }
    )
}

module.exports = { 
    addStoriesToProfile,
    addEmployerToProfile,
    addNewEmployerToProfile,
    addAccredsToProfile,
    removeProfile,
    createOrganization,
    updateOrganization,
    removeOrganization,
    createAccredsConnect,
    createAccredsCreate,
    updateAccreds,
    removeAccreds,
    updateProfileCreate,
    updateProfileConnect,
    createProfile,
    registerProfile,
    updateReviewedCount,
    updatePublishedCount,
    updateFlaggedCount    
}
