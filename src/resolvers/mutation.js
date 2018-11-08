const { verifyToken } = require('../utils');

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
  })
}

registerProfile = async (_, args, context, info) => {
  return await context.prisma.createProfile({
    account_id: args.accountId,
    userName: args.userName
  })
}

updateProfileCreate = async (_, args, context, info) => {
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

updateProfileConnect = async (_, args, context, info) => {
  const payload = verifyToken(context);
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
  })
}

removeProfile = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.deleteProfile({ id: args.id })
}

createOrganization = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.createOrganization({
    orgName: args.orgName,
    address: args.address,
    country: args.country,
    orgType: args.orgType
  })
}

updateOrganization = async (_, args, context, info) => {
  const payload = verifyToken(context);
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
  })
}

removeOrganization = async (_, args, context, info) => {
  const payload = verifyToken(context);
  return await context.prisma.deleteOrganization({ id: args.id })
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
  })
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
  })
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
  })
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
  })
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
  })
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
  })
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
  })
}

removeLikedStory = (_, args, context, info) => {
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

setCommunityToProfile = async (_, args, context, info) => {
    const payload = verifyToken(context)
    const profile = await context.prisma.profile({ id: args.id })

    const updatedList = community.communitiesIds
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
    })
    // add profile fragment
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
    setCommunityToProfile    
}
