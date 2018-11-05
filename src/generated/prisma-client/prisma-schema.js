module.exports = {
        typeDefs: /* GraphQL */ `type AggregateLikes {
  count: Int!
}

type AggregateOrganization {
  count: Int!
}

type AggregateProfile {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Likes {
  id: ID!
  guid: String
}

type LikesConnection {
  pageInfo: PageInfo!
  edges: [LikesEdge]!
  aggregate: AggregateLikes!
}

input LikesCreateInput {
  guid: String
}

input LikesCreateManyInput {
  create: [LikesCreateInput!]
  connect: [LikesWhereUniqueInput!]
}

type LikesEdge {
  node: Likes!
  cursor: String!
}

enum LikesOrderByInput {
  id_ASC
  id_DESC
  guid_ASC
  guid_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LikesPreviousValues {
  id: ID!
  guid: String
}

type LikesSubscriptionPayload {
  mutation: MutationType!
  node: Likes
  updatedFields: [String!]
  previousValues: LikesPreviousValues
}

input LikesSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LikesWhereInput
  AND: [LikesSubscriptionWhereInput!]
  OR: [LikesSubscriptionWhereInput!]
  NOT: [LikesSubscriptionWhereInput!]
}

input LikesUpdateDataInput {
  guid: String
}

input LikesUpdateInput {
  guid: String
}

input LikesUpdateManyInput {
  create: [LikesCreateInput!]
  update: [LikesUpdateWithWhereUniqueNestedInput!]
  upsert: [LikesUpsertWithWhereUniqueNestedInput!]
  delete: [LikesWhereUniqueInput!]
  connect: [LikesWhereUniqueInput!]
  disconnect: [LikesWhereUniqueInput!]
}

input LikesUpdateWithWhereUniqueNestedInput {
  where: LikesWhereUniqueInput!
  data: LikesUpdateDataInput!
}

input LikesUpsertWithWhereUniqueNestedInput {
  where: LikesWhereUniqueInput!
  update: LikesUpdateDataInput!
  create: LikesCreateInput!
}

input LikesWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  guid: String
  guid_not: String
  guid_in: [String!]
  guid_not_in: [String!]
  guid_lt: String
  guid_lte: String
  guid_gt: String
  guid_gte: String
  guid_contains: String
  guid_not_contains: String
  guid_starts_with: String
  guid_not_starts_with: String
  guid_ends_with: String
  guid_not_ends_with: String
  AND: [LikesWhereInput!]
  OR: [LikesWhereInput!]
  NOT: [LikesWhereInput!]
}

input LikesWhereUniqueInput {
  id: ID
  guid: String
}

scalar Long

type Mutation {
  createLikes(data: LikesCreateInput!): Likes!
  updateLikes(data: LikesUpdateInput!, where: LikesWhereUniqueInput!): Likes
  updateManyLikeses(data: LikesUpdateInput!, where: LikesWhereInput): BatchPayload!
  upsertLikes(where: LikesWhereUniqueInput!, create: LikesCreateInput!, update: LikesUpdateInput!): Likes!
  deleteLikes(where: LikesWhereUniqueInput!): Likes
  deleteManyLikeses(where: LikesWhereInput): BatchPayload!
  createOrganization(data: OrganizationCreateInput!): Organization!
  updateOrganization(data: OrganizationUpdateInput!, where: OrganizationWhereUniqueInput!): Organization
  updateManyOrganizations(data: OrganizationUpdateInput!, where: OrganizationWhereInput): BatchPayload!
  upsertOrganization(where: OrganizationWhereUniqueInput!, create: OrganizationCreateInput!, update: OrganizationUpdateInput!): Organization!
  deleteOrganization(where: OrganizationWhereUniqueInput!): Organization
  deleteManyOrganizations(where: OrganizationWhereInput): BatchPayload!
  createProfile(data: ProfileCreateInput!): Profile!
  updateProfile(data: ProfileUpdateInput!, where: ProfileWhereUniqueInput!): Profile
  updateManyProfiles(data: ProfileUpdateInput!, where: ProfileWhereInput): BatchPayload!
  upsertProfile(where: ProfileWhereUniqueInput!, create: ProfileCreateInput!, update: ProfileUpdateInput!): Profile!
  deleteProfile(where: ProfileWhereUniqueInput!): Profile
  deleteManyProfiles(where: ProfileWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Organization {
  id: ID!
  orgName: String!
  address: String!
  country: String!
  orgType: String!
}

type OrganizationConnection {
  pageInfo: PageInfo!
  edges: [OrganizationEdge]!
  aggregate: AggregateOrganization!
}

input OrganizationCreateInput {
  orgName: String!
  address: String!
  country: String!
  orgType: String!
}

input OrganizationCreateOneInput {
  create: OrganizationCreateInput
  connect: OrganizationWhereUniqueInput
}

type OrganizationEdge {
  node: Organization!
  cursor: String!
}

enum OrganizationOrderByInput {
  id_ASC
  id_DESC
  orgName_ASC
  orgName_DESC
  address_ASC
  address_DESC
  country_ASC
  country_DESC
  orgType_ASC
  orgType_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrganizationPreviousValues {
  id: ID!
  orgName: String!
  address: String!
  country: String!
  orgType: String!
}

type OrganizationSubscriptionPayload {
  mutation: MutationType!
  node: Organization
  updatedFields: [String!]
  previousValues: OrganizationPreviousValues
}

input OrganizationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrganizationWhereInput
  AND: [OrganizationSubscriptionWhereInput!]
  OR: [OrganizationSubscriptionWhereInput!]
  NOT: [OrganizationSubscriptionWhereInput!]
}

input OrganizationUpdateDataInput {
  orgName: String
  address: String
  country: String
  orgType: String
}

input OrganizationUpdateInput {
  orgName: String
  address: String
  country: String
  orgType: String
}

input OrganizationUpdateOneInput {
  create: OrganizationCreateInput
  update: OrganizationUpdateDataInput
  upsert: OrganizationUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: OrganizationWhereUniqueInput
}

input OrganizationUpsertNestedInput {
  update: OrganizationUpdateDataInput!
  create: OrganizationCreateInput!
}

input OrganizationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  orgName: String
  orgName_not: String
  orgName_in: [String!]
  orgName_not_in: [String!]
  orgName_lt: String
  orgName_lte: String
  orgName_gt: String
  orgName_gte: String
  orgName_contains: String
  orgName_not_contains: String
  orgName_starts_with: String
  orgName_not_starts_with: String
  orgName_ends_with: String
  orgName_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  orgType: String
  orgType_not: String
  orgType_in: [String!]
  orgType_not_in: [String!]
  orgType_lt: String
  orgType_lte: String
  orgType_gt: String
  orgType_gte: String
  orgType_contains: String
  orgType_not_contains: String
  orgType_starts_with: String
  orgType_not_starts_with: String
  orgType_ends_with: String
  orgType_not_ends_with: String
  AND: [OrganizationWhereInput!]
  OR: [OrganizationWhereInput!]
  NOT: [OrganizationWhereInput!]
}

input OrganizationWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Profile {
  id: ID!
  account_id: ID
  userName: String
  firstName: String
  lastName: String
  dateOfBirth: String
  storiesPublished: Int
  storiesReviewed: Int
  flaggedStories: Int
  occupation: String
  employer: Organization
  storiesLiked(where: LikesWhereInput, orderBy: LikesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Likes!]
  stories: [ID!]!
}

type ProfileConnection {
  pageInfo: PageInfo!
  edges: [ProfileEdge]!
  aggregate: AggregateProfile!
}

input ProfileCreateInput {
  account_id: ID
  userName: String
  firstName: String
  lastName: String
  dateOfBirth: String
  storiesPublished: Int
  storiesReviewed: Int
  flaggedStories: Int
  occupation: String
  employer: OrganizationCreateOneInput
  storiesLiked: LikesCreateManyInput
  stories: ProfileCreatestoriesInput
}

input ProfileCreatestoriesInput {
  set: [ID!]
}

type ProfileEdge {
  node: Profile!
  cursor: String!
}

enum ProfileOrderByInput {
  id_ASC
  id_DESC
  account_id_ASC
  account_id_DESC
  userName_ASC
  userName_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  dateOfBirth_ASC
  dateOfBirth_DESC
  storiesPublished_ASC
  storiesPublished_DESC
  storiesReviewed_ASC
  storiesReviewed_DESC
  flaggedStories_ASC
  flaggedStories_DESC
  occupation_ASC
  occupation_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProfilePreviousValues {
  id: ID!
  account_id: ID
  userName: String
  firstName: String
  lastName: String
  dateOfBirth: String
  storiesPublished: Int
  storiesReviewed: Int
  flaggedStories: Int
  occupation: String
  stories: [ID!]!
}

type ProfileSubscriptionPayload {
  mutation: MutationType!
  node: Profile
  updatedFields: [String!]
  previousValues: ProfilePreviousValues
}

input ProfileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProfileWhereInput
  AND: [ProfileSubscriptionWhereInput!]
  OR: [ProfileSubscriptionWhereInput!]
  NOT: [ProfileSubscriptionWhereInput!]
}

input ProfileUpdateInput {
  account_id: ID
  userName: String
  firstName: String
  lastName: String
  dateOfBirth: String
  storiesPublished: Int
  storiesReviewed: Int
  flaggedStories: Int
  occupation: String
  employer: OrganizationUpdateOneInput
  storiesLiked: LikesUpdateManyInput
  stories: ProfileUpdatestoriesInput
}

input ProfileUpdatestoriesInput {
  set: [ID!]
}

input ProfileWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  account_id: ID
  account_id_not: ID
  account_id_in: [ID!]
  account_id_not_in: [ID!]
  account_id_lt: ID
  account_id_lte: ID
  account_id_gt: ID
  account_id_gte: ID
  account_id_contains: ID
  account_id_not_contains: ID
  account_id_starts_with: ID
  account_id_not_starts_with: ID
  account_id_ends_with: ID
  account_id_not_ends_with: ID
  userName: String
  userName_not: String
  userName_in: [String!]
  userName_not_in: [String!]
  userName_lt: String
  userName_lte: String
  userName_gt: String
  userName_gte: String
  userName_contains: String
  userName_not_contains: String
  userName_starts_with: String
  userName_not_starts_with: String
  userName_ends_with: String
  userName_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  dateOfBirth: String
  dateOfBirth_not: String
  dateOfBirth_in: [String!]
  dateOfBirth_not_in: [String!]
  dateOfBirth_lt: String
  dateOfBirth_lte: String
  dateOfBirth_gt: String
  dateOfBirth_gte: String
  dateOfBirth_contains: String
  dateOfBirth_not_contains: String
  dateOfBirth_starts_with: String
  dateOfBirth_not_starts_with: String
  dateOfBirth_ends_with: String
  dateOfBirth_not_ends_with: String
  storiesPublished: Int
  storiesPublished_not: Int
  storiesPublished_in: [Int!]
  storiesPublished_not_in: [Int!]
  storiesPublished_lt: Int
  storiesPublished_lte: Int
  storiesPublished_gt: Int
  storiesPublished_gte: Int
  storiesReviewed: Int
  storiesReviewed_not: Int
  storiesReviewed_in: [Int!]
  storiesReviewed_not_in: [Int!]
  storiesReviewed_lt: Int
  storiesReviewed_lte: Int
  storiesReviewed_gt: Int
  storiesReviewed_gte: Int
  flaggedStories: Int
  flaggedStories_not: Int
  flaggedStories_in: [Int!]
  flaggedStories_not_in: [Int!]
  flaggedStories_lt: Int
  flaggedStories_lte: Int
  flaggedStories_gt: Int
  flaggedStories_gte: Int
  occupation: String
  occupation_not: String
  occupation_in: [String!]
  occupation_not_in: [String!]
  occupation_lt: String
  occupation_lte: String
  occupation_gt: String
  occupation_gte: String
  occupation_contains: String
  occupation_not_contains: String
  occupation_starts_with: String
  occupation_not_starts_with: String
  occupation_ends_with: String
  occupation_not_ends_with: String
  employer: OrganizationWhereInput
  storiesLiked_every: LikesWhereInput
  storiesLiked_some: LikesWhereInput
  storiesLiked_none: LikesWhereInput
  AND: [ProfileWhereInput!]
  OR: [ProfileWhereInput!]
  NOT: [ProfileWhereInput!]
}

input ProfileWhereUniqueInput {
  id: ID
  account_id: ID
  userName: String
}

type Query {
  likes(where: LikesWhereUniqueInput!): Likes
  likeses(where: LikesWhereInput, orderBy: LikesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Likes]!
  likesesConnection(where: LikesWhereInput, orderBy: LikesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LikesConnection!
  organization(where: OrganizationWhereUniqueInput!): Organization
  organizations(where: OrganizationWhereInput, orderBy: OrganizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Organization]!
  organizationsConnection(where: OrganizationWhereInput, orderBy: OrganizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrganizationConnection!
  profile(where: ProfileWhereUniqueInput!): Profile
  profiles(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile]!
  profilesConnection(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProfileConnection!
  node(id: ID!): Node
}

type Subscription {
  likes(where: LikesSubscriptionWhereInput): LikesSubscriptionPayload
  organization(where: OrganizationSubscriptionWhereInput): OrganizationSubscriptionPayload
  profile(where: ProfileSubscriptionWhereInput): ProfileSubscriptionPayload
}
`
      }
    