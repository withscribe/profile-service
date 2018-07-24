module.exports = {
    Query: {
        findProfileById: (_, args, context, info) => {
          return context.prisma.query.profile(
              {
                  where: {
                      id: args.id,
                  },
              },
              info,
          )
        },
        findProfileByUserId: (_, args, context, info) => {
            return context.prisma.query.profile(
                {
                    where: {
                        user_id: args.user_id
                    },
                },
                info,
            )
        },
        findOrgById: (_, args, context, info) => {
            return context.prisma.query.organization(
                {
                    where: {
                        id: args.id
                    },
                },
                info
            )
        },
        searchProfiles: (_, args, context, info) => {
            return context.prisma.query.profiles(
                {
                    where: {
                        OR: [
                            { first_name_contains: args.searchString },
                            { last_name_contains: args.searchString },
                            { date_of_birth_contains: args.searchString },
                            { occupation_contains: args.searchString }
                        ],
                    },
                },
            )
        },
        searchOrgs: (_, args, context, info) => {
            return context.prisma.query.organizations(
                {
                    where: {
                        OR: [
                            { org_name_contains: args.searchString },
                            { org_type_contains: args.searchString },
                            { address_contains: args.searchString },
                            { country_contains: args.searchString },
                        ]
                    }
                }
            )
        },
        profiles: (_, args, context, info) => {
            return context.prisma.query.profiles(
                _, info
            )
        
        },
        allOrganizations: (_, args, context, info) => {
            return context.prisma.query.organizations(
                _, info
            )
        }
    },
    Mutation: {
        createProfile: (_, args, context, info) => {
            return context.prisma.mutation.createProfile(
                {
                    data: {
                        user_id: args.user_id,
                        first_name: args.first_name,
                        last_name: args.last_name,
                        date_of_birth: args.date_of_birth,
                        occupation: args.occupation
                    },
                    info
                }
            )
        },
        createAccredidation: (_, args, context, info) => {
          return context.prisma.mutation.createAccredidations(
              {
                  data: {
                      accreds_name: args.accreds_name,
                      accreds_desc: args.accreds_desc,
                      accreds_type: args.accreds_type,
                      date_received: args.date_received,
                      accreditor_org: {
                          connect: {
                              id: args.organizationId
                          },
                      },
                  },
              },
              info,
          )
        },
        createOrganization: (_, args, context, info) => {
            return context.prisma.mutation.createOrganization(
                {
                    data: {
                        org_name: args.org_name,
                        address: args.adress,
                        country: args.country,
                        org_type: args.org_type
                    },
                },
                info
    
            )
        },
        setAccredsToProfile: (_, args, context, info) => {
            return context.prisma.mutation.updateProfile(
                {
                    where: {
                        id: args.profileId
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
        },
        setEmployerToProfile: (_, args, context, info) => {
            return context.prisma.mutation.updateProfile(
                {
                    where: {
                        id: args.profileId
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
    }
}