// const { getUserId } = require('./utils');

// module.exports = {
//     Query: {
//         profileById: (_, args, context, info) => {
//           const userId = getUserId(context);
//           return context.prisma.query.profile(
//               {
//                   where: {
//                       id: args.id,
//                   },
//               },
//               info,
//           )
//         },
//         profileByUserId: (_, args, context, info) => {
//             const userId = getUserId(context);
//             return context.prisma.query.profile(
//                 {
//                     where: {
//                         user_id: args.user_id
//                     },
//                 },
//                 info,
//             )
//         },
//         profileByUserName: (_, args, context, info) => {
//             const userId = getUserId(context);
//             return context.prisma.query.profile(
//                 {
//                     where: {
//                         userName: args.userName
//                     }
//                 }
//             )
//         },
//         orgById: (_, args, context, info) => {
//             const userId = getUserId(context);
//             return context.prisma.query.organization(
//                 {
//                     where: {
//                         id: args.id
//                     },
//                 },
//                 info
//             )
//         },
//         searchProfiles: (_, args, context, info) => {
//             const userId = getUserId(context);
//             return context.prisma.query.profiles(
//                 {
//                     where: {
//                         OR: [
//                             { firstName_contains: args.searchString },
//                             { lastName_contains: args.searchString },
//                             { dateOfBirth_contains: args.searchString },
//                             { occupation_contains: args.searchString }
//                         ],
//                     },
//                 },
//             )
//         },
//         searchOrganizations: (_, args, context, info) => {
//             const userId = getUserId(context);
//             return context.prisma.query.organizations(
//                 {
//                     where: {
//                         OR: [
//                             { orgName_contains: args.searchString },
//                             { orgType_contains: args.searchString },
//                             { address_contains: args.searchString },
//                             { country_contains: args.searchString },
//                         ]
//                     }
//                 }
//             )
//         },
//         allProfiles: (_, args, context, info) => {
//             const userId = getUserId(context);
//             return context.prisma.query.profiles(
//                 _, info
//             )
        
//         },
//         allOrganizations: (_, args, context, info) => {
//             const userId = getUserId(context);
//             return context.prisma.query.organizations(
//                 _, info
//             )
//         }
//     },
//     Mutation: {
//         createProfile: (_, args, context, info) => {
//             const userId = getUserId(context);
//             return context.prisma.mutation.createProfile(
//                 {
//                     data: {
//                         user_id: args.user_id,
//                         firstName: args.firstName,
//                         lastName: args.lastName,
//                         dateOfBirth: args.dob,
//                         occupation: args.occupation,
//                         employer: {
//                             create: {
//                                 orgName: args.orgName,
//                                 country: args.country,
//                                 address: args.address,
//                                 orgType: args.orgType,
//                             }
//                         },
//                         accredidations: {
//                             create: [
//                                 {
//                                     accredsName: args.accredsName,
//                                     accredsDesc: args.accredsDesc,
//                                     accredsType: args.accredsType,
//                                     dateReceived: args.dateReceived,
//                                     accreditorOrg: {
//                                         create: {
//                                             orgName: args.orgName,
//                                             country: args.country,
//                                             address: args.address,
//                                             orgType: args.orgType,
//                                         }
//                                     }
//                                 }
//                             ]
//                         }

//                     },
//                     info
//                 }
//             )
//         },
//         updateProfile: (_, args, context, info) => {
//             const userId = getUserId(context);
//             return context.prisma.mutation.updateProfile(
//                 {
//                     where: {
//                         id: args.profileId
//                     },
//                     data: {
//                         userName: args.userName,
//                         firstName: args.firstName,
//                         lastName: args.lastName,
//                         dateOfBirth: args.dob,
//                         occupation: args.occupation,
//                         employer: {
//                             create: {
//                                 orgName: args.orgName,
//                                 country: args.country,
//                                 address: args.address,
//                                 orgType: args.orgType,
//                             }
//                         },
//                     }
//                 }
//             )
//         },
//         createAccredidation: (_, args, context, info) => {
//           const userId = getUserId(context);
//           return context.prisma.mutation.createAccredidations(
//               {
//                   data: {
//                       accreds_name: args.accreds_name,
//                       accreds_desc: args.accreds_desc,
//                       accreds_type: args.accreds_type,
//                       date_received: args.date_received,
//                       accreditor_org: {
//                           connect: {
//                               id: args.organizationId
//                           },
//                       },
//                   },
//               },
//               info,
//           )
//         },
//         createOrganization: (_, args, context, info) => {
//             const userId = getUserId(context);
//             return context.prisma.mutation.createOrganization(
//                 {
//                     data: {
//                         org_name: args.org_name,
//                         address: args.adress,
//                         country: args.country,
//                         org_type: args.org_type
//                     },
//                 },
//                 info
    
//             )
//         },
//         setAccredsToProfile: (_, args, context, info) => {
//             const userId = getUserId(context);
//             return context.prisma.mutation.updateProfile(
//                 {
//                     where: {
//                         id: args.profileId
//                     },
//                     data: {
//                         accredidations: 
//                             {
//                                 connect: {
//                                     id: args.accredidationIds
//                                 }
//                             }
//                     }
//                 }
//             )
//         },
//         setEmployerToProfile: (_, args, context, info) => {
//             const userId = getUserId(context);
//             return context.prisma.mutation.updateProfile(
//                 {
//                     where: {
//                         id: args.profileId
//                     },
//                     data: {
//                         employer: {
//                             connect: {
//                                 id: args.employerId
//                             }
//                         }
//                     }
//                 }
//             )
//         },
//         addStoriesToProfile: (_, args, context, info) => {
//             const userId = getUserId(context);
//             return context.prisma.mutation.updateProfile(
//                 {
//                     where: {
//                         id: args.profileId
//                     },
//                     data: {
//                         stories: {
//                             connect: {
//                                 id: args.storyIds
//                             }
//                         }
//                     }
//                 }
//             )
//         }
//     }
// }