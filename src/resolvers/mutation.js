const { verifyToken } = require('../utils');
const { profileFragment } = require("../fragments/ProfileFragment");
const { organizationFragment } = require("../fragments/OrganizationFragment");

createProfile = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.createProfile({
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
  }).$fragment(profileFragment)
}

registerProfile = async (_, args, context, info) => {
  return await context.prisma.createProfile({
    account_id: args.accountId,
    userName: args.userName
  }).$fragment(profileFragment)
}

updateProfileCreate = async (_, args, context, info) => {
  const payload = verifyToken(context)

  const profile = await context.prisma.profile({ account_id: payload.accountId })

  if(args.userName != profile.userName) {
    const exists = await context.prisma.$exists.profile({ userName: args.userName })

    if(exists == null) {
      profile.userName = args.userName
    } else {
      throw new Error("Username has already been taken")
    }
  }
  return await context.prisma.updateProfile({
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
  }).$fragment(profileFragment)
}

updateProfileConnect = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.updateProfile({
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
  }).$fragment(profileFragment)
}

removeProfile = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.deleteProfile({ id: args.id }).$fragment(profileFragment)
}

createOrganization = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.createOrganization({
    orgName: args.orgName,
    address: args.address,
    country: args.country,
    orgType: args.orgType
  }).$fragment(organizationFragment)
}

updateOrganization = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.createOrganization({
    where: {
      id: args.orgId
    },
    data: {
      orgName: args.orgName,
      address: args.adress,
      country: args.country,
      orgType: args.orgType
    },
  }).$fragment(organizationFragment)
}

removeOrganization = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.deleteOrganization({ id: args.id }).$fragment(organizationFragment)
}

addNewEmployerToProfile = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.updateProfile({
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
  }).$fragment(profileFragment)
}

addEmployerToProfile = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.updateProfile({
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
  }).$fragment(profileFragment)
}

addStoriesToProfile = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.updateProfile({
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
  }).$fragment(profileFragment)
}

updateFlaggedCount = async (_, args, context, info) => {
  const payload = verifyToken(context);
  const profile = await context.prisma.profile({ id: args.profileId })

  profile.flaggedStories = profile.flaggedStories + 1;

  return await context.prisma.updateProfile({
    where: {
      id: args.profileId
    },
    data: {
      flaggedStories: profile.flaggedStories
    }
  }).$fragment(profileFragment)
}

updatePublishedCount = async (_, args, context, info) => {
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
  }).$fragment(profileFragment)
}

updateReviewedCount = async (_, args, context, info) => {
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
  }).$fragment(profileFragment)
}

addLikedStory = async (_, args, context, info) => {
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
  }).$fragment(profileFragment)
}

removeLikedStory = async (_, args, context, info) => {
  const payload = verifyToken(context);

  const profile = await context.prisma.profile({ account_id: payload.accountId })
  const guid = args.storyId + profile.id
  const likeToRemove = await context.prisma.likes({ guid: guid })

  return await context.prisma.updateProfile({
    where: {
      id: profile.id
    },
    data: {
      storiesLiked: { delete: { id: likeToRemove.id } }
    }
  }).$fragment(profileFragment)
}

setCommunityToProfile = async (_, args, context, info) => {
  const payload = verifyToken(context);
  const profile = await context.prisma.profile({ id: args.id })

  if(profile.communitiesIds !== undefined) {
    const updatedList = profile.communitiesIds
    updatedList.push(args.communityId)

    return await context.prisma.updateProfile({
      where: {
        id: args.id
      },
      data: {
        communitiesIds: {
          set: updatedList
        }
      }
    }).$fragment(profileFragment)
  } else {
    return await context.prisma.updateProfile({
      where: {
        id: args.id
      },
      data: {
        communitiesIds: {
          set: args.communityId
        }
      }
    }).$fragment(profileFragment)
  }
}

removeCommunityFromProfile = async (_, args, context, info) => {
  const payload = verifyToken(context);
  const profile = await context.prisma.profile({ id: args.id })

  if(profile.communitiesIds !== undefined) {
    let updatedList = profile.communitiesIds
    updatedList = updatedList.filter(member => member !== args.communityId)

    return await context.prisma.updateProfile({
      where: {
        id: args.id
      },
      data: {
        communitiesIds: {
          set: updatedList
        }
      }
    }).$fragment(profileFragment)
  }
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
    removeLikedStory,
    setCommunityToProfile,
    removeCommunityFromProfile
}
