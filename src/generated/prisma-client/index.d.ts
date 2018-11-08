// Code generated by Prisma (prisma@1.19.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  likes: (where?: LikesWhereInput) => Promise<boolean>;
  organization: (where?: OrganizationWhereInput) => Promise<boolean>;
  profile: (where?: ProfileWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  likes: (where: LikesWhereUniqueInput) => Likes;
  likeses: (
    args?: {
      where?: LikesWhereInput;
      orderBy?: LikesOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<LikesNode>;
  likesesConnection: (
    args?: {
      where?: LikesWhereInput;
      orderBy?: LikesOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => LikesConnection;
  organization: (where: OrganizationWhereUniqueInput) => Organization;
  organizations: (
    args?: {
      where?: OrganizationWhereInput;
      orderBy?: OrganizationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<OrganizationNode>;
  organizationsConnection: (
    args?: {
      where?: OrganizationWhereInput;
      orderBy?: OrganizationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => OrganizationConnection;
  profile: (where: ProfileWhereUniqueInput) => Profile;
  profiles: (
    args?: {
      where?: ProfileWhereInput;
      orderBy?: ProfileOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<ProfileNode>;
  profilesConnection: (
    args?: {
      where?: ProfileWhereInput;
      orderBy?: ProfileOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ProfileConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createLikes: (data: LikesCreateInput) => Likes;
  updateLikes: (
    args: { data: LikesUpdateInput; where: LikesWhereUniqueInput }
  ) => Likes;
  updateManyLikeses: (
    args: { data: LikesUpdateInput; where?: LikesWhereInput }
  ) => BatchPayload;
  upsertLikes: (
    args: {
      where: LikesWhereUniqueInput;
      create: LikesCreateInput;
      update: LikesUpdateInput;
    }
  ) => Likes;
  deleteLikes: (where: LikesWhereUniqueInput) => Likes;
  deleteManyLikeses: (where?: LikesWhereInput) => BatchPayload;
  createOrganization: (data: OrganizationCreateInput) => Organization;
  updateOrganization: (
    args: { data: OrganizationUpdateInput; where: OrganizationWhereUniqueInput }
  ) => Organization;
  updateManyOrganizations: (
    args: { data: OrganizationUpdateInput; where?: OrganizationWhereInput }
  ) => BatchPayload;
  upsertOrganization: (
    args: {
      where: OrganizationWhereUniqueInput;
      create: OrganizationCreateInput;
      update: OrganizationUpdateInput;
    }
  ) => Organization;
  deleteOrganization: (where: OrganizationWhereUniqueInput) => Organization;
  deleteManyOrganizations: (where?: OrganizationWhereInput) => BatchPayload;
  createProfile: (data: ProfileCreateInput) => Profile;
  updateProfile: (
    args: { data: ProfileUpdateInput; where: ProfileWhereUniqueInput }
  ) => Profile;
  updateManyProfiles: (
    args: { data: ProfileUpdateInput; where?: ProfileWhereInput }
  ) => BatchPayload;
  upsertProfile: (
    args: {
      where: ProfileWhereUniqueInput;
      create: ProfileCreateInput;
      update: ProfileUpdateInput;
    }
  ) => Profile;
  deleteProfile: (where: ProfileWhereUniqueInput) => Profile;
  deleteManyProfiles: (where?: ProfileWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  likes: (
    where?: LikesSubscriptionWhereInput
  ) => LikesSubscriptionPayloadSubscription;
  organization: (
    where?: OrganizationSubscriptionWhereInput
  ) => OrganizationSubscriptionPayloadSubscription;
  profile: (
    where?: ProfileSubscriptionWhereInput
  ) => ProfileSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type LikesOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "guid_ASC"
  | "guid_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type OrganizationOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "orgName_ASC"
  | "orgName_DESC"
  | "address_ASC"
  | "address_DESC"
  | "country_ASC"
  | "country_DESC"
  | "orgType_ASC"
  | "orgType_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type ProfileOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "account_id_ASC"
  | "account_id_DESC"
  | "userName_ASC"
  | "userName_DESC"
  | "firstName_ASC"
  | "firstName_DESC"
  | "lastName_ASC"
  | "lastName_DESC"
  | "dateOfBirth_ASC"
  | "dateOfBirth_DESC"
  | "storiesPublished_ASC"
  | "storiesPublished_DESC"
  | "storiesReviewed_ASC"
  | "storiesReviewed_DESC"
  | "flaggedStories_ASC"
  | "flaggedStories_DESC"
  | "occupation_ASC"
  | "occupation_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface LikesUpdateInput {
  guid?: String;
}

export type LikesWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  guid?: String;
}>;

export type ProfileWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  account_id?: ID_Input;
  userName?: String;
}>;

export interface OrganizationUpdateInput {
  orgName?: String;
  address?: String;
  country?: String;
  orgType?: String;
}

export interface OrganizationUpsertNestedInput {
  update: OrganizationUpdateDataInput;
  create: OrganizationCreateInput;
}

export interface OrganizationCreateInput {
  orgName: String;
  address: String;
  country: String;
  orgType: String;
}

export interface ProfileWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  account_id?: ID_Input;
  account_id_not?: ID_Input;
  account_id_in?: ID_Input[] | ID_Input;
  account_id_not_in?: ID_Input[] | ID_Input;
  account_id_lt?: ID_Input;
  account_id_lte?: ID_Input;
  account_id_gt?: ID_Input;
  account_id_gte?: ID_Input;
  account_id_contains?: ID_Input;
  account_id_not_contains?: ID_Input;
  account_id_starts_with?: ID_Input;
  account_id_not_starts_with?: ID_Input;
  account_id_ends_with?: ID_Input;
  account_id_not_ends_with?: ID_Input;
  userName?: String;
  userName_not?: String;
  userName_in?: String[] | String;
  userName_not_in?: String[] | String;
  userName_lt?: String;
  userName_lte?: String;
  userName_gt?: String;
  userName_gte?: String;
  userName_contains?: String;
  userName_not_contains?: String;
  userName_starts_with?: String;
  userName_not_starts_with?: String;
  userName_ends_with?: String;
  userName_not_ends_with?: String;
  firstName?: String;
  firstName_not?: String;
  firstName_in?: String[] | String;
  firstName_not_in?: String[] | String;
  firstName_lt?: String;
  firstName_lte?: String;
  firstName_gt?: String;
  firstName_gte?: String;
  firstName_contains?: String;
  firstName_not_contains?: String;
  firstName_starts_with?: String;
  firstName_not_starts_with?: String;
  firstName_ends_with?: String;
  firstName_not_ends_with?: String;
  lastName?: String;
  lastName_not?: String;
  lastName_in?: String[] | String;
  lastName_not_in?: String[] | String;
  lastName_lt?: String;
  lastName_lte?: String;
  lastName_gt?: String;
  lastName_gte?: String;
  lastName_contains?: String;
  lastName_not_contains?: String;
  lastName_starts_with?: String;
  lastName_not_starts_with?: String;
  lastName_ends_with?: String;
  lastName_not_ends_with?: String;
  dateOfBirth?: String;
  dateOfBirth_not?: String;
  dateOfBirth_in?: String[] | String;
  dateOfBirth_not_in?: String[] | String;
  dateOfBirth_lt?: String;
  dateOfBirth_lte?: String;
  dateOfBirth_gt?: String;
  dateOfBirth_gte?: String;
  dateOfBirth_contains?: String;
  dateOfBirth_not_contains?: String;
  dateOfBirth_starts_with?: String;
  dateOfBirth_not_starts_with?: String;
  dateOfBirth_ends_with?: String;
  dateOfBirth_not_ends_with?: String;
  storiesPublished?: Int;
  storiesPublished_not?: Int;
  storiesPublished_in?: Int[] | Int;
  storiesPublished_not_in?: Int[] | Int;
  storiesPublished_lt?: Int;
  storiesPublished_lte?: Int;
  storiesPublished_gt?: Int;
  storiesPublished_gte?: Int;
  storiesReviewed?: Int;
  storiesReviewed_not?: Int;
  storiesReviewed_in?: Int[] | Int;
  storiesReviewed_not_in?: Int[] | Int;
  storiesReviewed_lt?: Int;
  storiesReviewed_lte?: Int;
  storiesReviewed_gt?: Int;
  storiesReviewed_gte?: Int;
  flaggedStories?: Int;
  flaggedStories_not?: Int;
  flaggedStories_in?: Int[] | Int;
  flaggedStories_not_in?: Int[] | Int;
  flaggedStories_lt?: Int;
  flaggedStories_lte?: Int;
  flaggedStories_gt?: Int;
  flaggedStories_gte?: Int;
  occupation?: String;
  occupation_not?: String;
  occupation_in?: String[] | String;
  occupation_not_in?: String[] | String;
  occupation_lt?: String;
  occupation_lte?: String;
  occupation_gt?: String;
  occupation_gte?: String;
  occupation_contains?: String;
  occupation_not_contains?: String;
  occupation_starts_with?: String;
  occupation_not_starts_with?: String;
  occupation_ends_with?: String;
  occupation_not_ends_with?: String;
  employer?: OrganizationWhereInput;
  storiesLiked_every?: LikesWhereInput;
  storiesLiked_some?: LikesWhereInput;
  storiesLiked_none?: LikesWhereInput;
  AND?: ProfileWhereInput[] | ProfileWhereInput;
  OR?: ProfileWhereInput[] | ProfileWhereInput;
  NOT?: ProfileWhereInput[] | ProfileWhereInput;
}

export interface OrganizationSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: OrganizationWhereInput;
  AND?:
    | OrganizationSubscriptionWhereInput[]
    | OrganizationSubscriptionWhereInput;
  OR?:
    | OrganizationSubscriptionWhereInput[]
    | OrganizationSubscriptionWhereInput;
  NOT?:
    | OrganizationSubscriptionWhereInput[]
    | OrganizationSubscriptionWhereInput;
}

export interface OrganizationUpdateDataInput {
  orgName?: String;
  address?: String;
  country?: String;
  orgType?: String;
}

export interface ProfileUpdatecommunitiesIdsInput {
  set?: ID_Input[] | ID_Input;
}

export interface OrganizationUpdateOneInput {
  create?: OrganizationCreateInput;
  update?: OrganizationUpdateDataInput;
  upsert?: OrganizationUpsertNestedInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: OrganizationWhereUniqueInput;
}

export interface LikesUpsertWithWhereUniqueNestedInput {
  where: LikesWhereUniqueInput;
  update: LikesUpdateDataInput;
  create: LikesCreateInput;
}

export interface ProfileUpdateInput {
  account_id?: ID_Input;
  userName?: String;
  firstName?: String;
  lastName?: String;
  dateOfBirth?: String;
  storiesPublished?: Int;
  storiesReviewed?: Int;
  flaggedStories?: Int;
  occupation?: String;
  employer?: OrganizationUpdateOneInput;
  storiesLiked?: LikesUpdateManyInput;
  communitiesIds?: ProfileUpdatecommunitiesIdsInput;
}

export interface LikesWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  guid?: String;
  guid_not?: String;
  guid_in?: String[] | String;
  guid_not_in?: String[] | String;
  guid_lt?: String;
  guid_lte?: String;
  guid_gt?: String;
  guid_gte?: String;
  guid_contains?: String;
  guid_not_contains?: String;
  guid_starts_with?: String;
  guid_not_starts_with?: String;
  guid_ends_with?: String;
  guid_not_ends_with?: String;
  AND?: LikesWhereInput[] | LikesWhereInput;
  OR?: LikesWhereInput[] | LikesWhereInput;
  NOT?: LikesWhereInput[] | LikesWhereInput;
}

export interface ProfileCreatecommunitiesIdsInput {
  set?: ID_Input[] | ID_Input;
}

export interface LikesUpdateWithWhereUniqueNestedInput {
  where: LikesWhereUniqueInput;
  data: LikesUpdateDataInput;
}

export interface ProfileSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ProfileWhereInput;
  AND?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput;
  OR?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput;
  NOT?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput;
}

export type OrganizationWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ProfileCreateInput {
  account_id?: ID_Input;
  userName?: String;
  firstName?: String;
  lastName?: String;
  dateOfBirth?: String;
  storiesPublished?: Int;
  storiesReviewed?: Int;
  flaggedStories?: Int;
  occupation?: String;
  employer?: OrganizationCreateOneInput;
  storiesLiked?: LikesCreateManyInput;
  communitiesIds?: ProfileCreatecommunitiesIdsInput;
}

export interface OrganizationCreateOneInput {
  create?: OrganizationCreateInput;
  connect?: OrganizationWhereUniqueInput;
}

export interface LikesCreateManyInput {
  create?: LikesCreateInput[] | LikesCreateInput;
  connect?: LikesWhereUniqueInput[] | LikesWhereUniqueInput;
}

export interface LikesCreateInput {
  guid?: String;
}

export interface OrganizationWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  orgName?: String;
  orgName_not?: String;
  orgName_in?: String[] | String;
  orgName_not_in?: String[] | String;
  orgName_lt?: String;
  orgName_lte?: String;
  orgName_gt?: String;
  orgName_gte?: String;
  orgName_contains?: String;
  orgName_not_contains?: String;
  orgName_starts_with?: String;
  orgName_not_starts_with?: String;
  orgName_ends_with?: String;
  orgName_not_ends_with?: String;
  address?: String;
  address_not?: String;
  address_in?: String[] | String;
  address_not_in?: String[] | String;
  address_lt?: String;
  address_lte?: String;
  address_gt?: String;
  address_gte?: String;
  address_contains?: String;
  address_not_contains?: String;
  address_starts_with?: String;
  address_not_starts_with?: String;
  address_ends_with?: String;
  address_not_ends_with?: String;
  country?: String;
  country_not?: String;
  country_in?: String[] | String;
  country_not_in?: String[] | String;
  country_lt?: String;
  country_lte?: String;
  country_gt?: String;
  country_gte?: String;
  country_contains?: String;
  country_not_contains?: String;
  country_starts_with?: String;
  country_not_starts_with?: String;
  country_ends_with?: String;
  country_not_ends_with?: String;
  orgType?: String;
  orgType_not?: String;
  orgType_in?: String[] | String;
  orgType_not_in?: String[] | String;
  orgType_lt?: String;
  orgType_lte?: String;
  orgType_gt?: String;
  orgType_gte?: String;
  orgType_contains?: String;
  orgType_not_contains?: String;
  orgType_starts_with?: String;
  orgType_not_starts_with?: String;
  orgType_ends_with?: String;
  orgType_not_ends_with?: String;
  AND?: OrganizationWhereInput[] | OrganizationWhereInput;
  OR?: OrganizationWhereInput[] | OrganizationWhereInput;
  NOT?: OrganizationWhereInput[] | OrganizationWhereInput;
}

export interface LikesSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: LikesWhereInput;
  AND?: LikesSubscriptionWhereInput[] | LikesSubscriptionWhereInput;
  OR?: LikesSubscriptionWhereInput[] | LikesSubscriptionWhereInput;
  NOT?: LikesSubscriptionWhereInput[] | LikesSubscriptionWhereInput;
}

export interface LikesUpdateManyInput {
  create?: LikesCreateInput[] | LikesCreateInput;
  update?:
    | LikesUpdateWithWhereUniqueNestedInput[]
    | LikesUpdateWithWhereUniqueNestedInput;
  upsert?:
    | LikesUpsertWithWhereUniqueNestedInput[]
    | LikesUpsertWithWhereUniqueNestedInput;
  delete?: LikesWhereUniqueInput[] | LikesWhereUniqueInput;
  connect?: LikesWhereUniqueInput[] | LikesWhereUniqueInput;
  disconnect?: LikesWhereUniqueInput[] | LikesWhereUniqueInput;
}

export interface LikesUpdateDataInput {
  guid?: String;
}

export interface NodeNode {
  id: ID_Output;
}

export interface ProfilePreviousValuesNode {
  id: ID_Output;
  account_id?: ID_Output;
  userName?: String;
  firstName?: String;
  lastName?: String;
  dateOfBirth?: String;
  storiesPublished?: Int;
  storiesReviewed?: Int;
  flaggedStories?: Int;
  occupation?: String;
  communitiesIds: ID_Output[];
}

export interface ProfilePreviousValues
  extends Promise<ProfilePreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  account_id: () => Promise<ID_Output>;
  userName: () => Promise<String>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  dateOfBirth: () => Promise<String>;
  storiesPublished: () => Promise<Int>;
  storiesReviewed: () => Promise<Int>;
  flaggedStories: () => Promise<Int>;
  occupation: () => Promise<String>;
  communitiesIds: () => Promise<ID_Output[]>;
}

export interface ProfilePreviousValuesSubscription
  extends Promise<AsyncIterator<ProfilePreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  account_id: () => Promise<AsyncIterator<ID_Output>>;
  userName: () => Promise<AsyncIterator<String>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  dateOfBirth: () => Promise<AsyncIterator<String>>;
  storiesPublished: () => Promise<AsyncIterator<Int>>;
  storiesReviewed: () => Promise<AsyncIterator<Int>>;
  flaggedStories: () => Promise<AsyncIterator<Int>>;
  occupation: () => Promise<AsyncIterator<String>>;
  communitiesIds: () => Promise<AsyncIterator<ID_Output[]>>;
}

export interface OrganizationNode {
  id: ID_Output;
  orgName: String;
  address: String;
  country: String;
  orgType: String;
}

export interface Organization extends Promise<OrganizationNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  orgName: () => Promise<String>;
  address: () => Promise<String>;
  country: () => Promise<String>;
  orgType: () => Promise<String>;
}

export interface OrganizationSubscription
  extends Promise<AsyncIterator<OrganizationNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  orgName: () => Promise<AsyncIterator<String>>;
  address: () => Promise<AsyncIterator<String>>;
  country: () => Promise<AsyncIterator<String>>;
  orgType: () => Promise<AsyncIterator<String>>;
}

export interface LikesConnectionNode {}

export interface LikesConnection
  extends Promise<LikesConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<LikesEdgeNode>>() => T;
  aggregate: <T = AggregateLikes>() => T;
}

export interface LikesConnectionSubscription
  extends Promise<AsyncIterator<LikesConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<LikesEdgeSubscription>>>() => T;
  aggregate: <T = AggregateLikesSubscription>() => T;
}

export interface AggregateLikesNode {
  count: Int;
}

export interface AggregateLikes
  extends Promise<AggregateLikesNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateLikesSubscription
  extends Promise<AsyncIterator<AggregateLikesNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface LikesEdgeNode {
  cursor: String;
}

export interface LikesEdge extends Promise<LikesEdgeNode>, Fragmentable {
  node: <T = Likes>() => T;
  cursor: () => Promise<String>;
}

export interface LikesEdgeSubscription
  extends Promise<AsyncIterator<LikesEdgeNode>>,
    Fragmentable {
  node: <T = LikesSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateProfileNode {
  count: Int;
}

export interface AggregateProfile
  extends Promise<AggregateProfileNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProfileSubscription
  extends Promise<AsyncIterator<AggregateProfileNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface OrganizationSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface OrganizationSubscriptionPayload
  extends Promise<OrganizationSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Organization>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = OrganizationPreviousValues>() => T;
}

export interface OrganizationSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<OrganizationSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = OrganizationSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = OrganizationPreviousValuesSubscription>() => T;
}

export interface ProfileEdgeNode {
  cursor: String;
}

export interface ProfileEdge extends Promise<ProfileEdgeNode>, Fragmentable {
  node: <T = Profile>() => T;
  cursor: () => Promise<String>;
}

export interface ProfileEdgeSubscription
  extends Promise<AsyncIterator<ProfileEdgeNode>>,
    Fragmentable {
  node: <T = ProfileSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ProfileConnectionNode {}

export interface ProfileConnection
  extends Promise<ProfileConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<ProfileEdgeNode>>() => T;
  aggregate: <T = AggregateProfile>() => T;
}

export interface ProfileConnectionSubscription
  extends Promise<AsyncIterator<ProfileConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProfileEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProfileSubscription>() => T;
}

export interface AggregateOrganizationNode {
  count: Int;
}

export interface AggregateOrganization
  extends Promise<AggregateOrganizationNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateOrganizationSubscription
  extends Promise<AsyncIterator<AggregateOrganizationNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface OrganizationPreviousValuesNode {
  id: ID_Output;
  orgName: String;
  address: String;
  country: String;
  orgType: String;
}

export interface OrganizationPreviousValues
  extends Promise<OrganizationPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  orgName: () => Promise<String>;
  address: () => Promise<String>;
  country: () => Promise<String>;
  orgType: () => Promise<String>;
}

export interface OrganizationPreviousValuesSubscription
  extends Promise<AsyncIterator<OrganizationPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  orgName: () => Promise<AsyncIterator<String>>;
  address: () => Promise<AsyncIterator<String>>;
  country: () => Promise<AsyncIterator<String>>;
  orgType: () => Promise<AsyncIterator<String>>;
}

export interface LikesPreviousValuesNode {
  id: ID_Output;
  guid?: String;
}

export interface LikesPreviousValues
  extends Promise<LikesPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  guid: () => Promise<String>;
}

export interface LikesPreviousValuesSubscription
  extends Promise<AsyncIterator<LikesPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  guid: () => Promise<AsyncIterator<String>>;
}

export interface LikesSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface LikesSubscriptionPayload
  extends Promise<LikesSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Likes>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = LikesPreviousValues>() => T;
}

export interface LikesSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<LikesSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = LikesSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = LikesPreviousValuesSubscription>() => T;
}

export interface LikesNode {
  id: ID_Output;
  guid?: String;
}

export interface Likes extends Promise<LikesNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  guid: () => Promise<String>;
}

export interface LikesSubscription
  extends Promise<AsyncIterator<LikesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  guid: () => Promise<AsyncIterator<String>>;
}

export interface OrganizationEdgeNode {
  cursor: String;
}

export interface OrganizationEdge
  extends Promise<OrganizationEdgeNode>,
    Fragmentable {
  node: <T = Organization>() => T;
  cursor: () => Promise<String>;
}

export interface OrganizationEdgeSubscription
  extends Promise<AsyncIterator<OrganizationEdgeNode>>,
    Fragmentable {
  node: <T = OrganizationSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ProfileNode {
  id: ID_Output;
  account_id?: ID_Output;
  userName?: String;
  firstName?: String;
  lastName?: String;
  dateOfBirth?: String;
  storiesPublished?: Int;
  storiesReviewed?: Int;
  flaggedStories?: Int;
  occupation?: String;
  communitiesIds: ID_Output[];
}

export interface Profile extends Promise<ProfileNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  account_id: () => Promise<ID_Output>;
  userName: () => Promise<String>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  dateOfBirth: () => Promise<String>;
  storiesPublished: () => Promise<Int>;
  storiesReviewed: () => Promise<Int>;
  flaggedStories: () => Promise<Int>;
  occupation: () => Promise<String>;
  employer: <T = Organization>() => T;
  storiesLiked: <T = FragmentableArray<LikesNode>>(
    args?: {
      where?: LikesWhereInput;
      orderBy?: LikesOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  communitiesIds: () => Promise<ID_Output[]>;
}

export interface ProfileSubscription
  extends Promise<AsyncIterator<ProfileNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  account_id: () => Promise<AsyncIterator<ID_Output>>;
  userName: () => Promise<AsyncIterator<String>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  dateOfBirth: () => Promise<AsyncIterator<String>>;
  storiesPublished: () => Promise<AsyncIterator<Int>>;
  storiesReviewed: () => Promise<AsyncIterator<Int>>;
  flaggedStories: () => Promise<AsyncIterator<Int>>;
  occupation: () => Promise<AsyncIterator<String>>;
  employer: <T = OrganizationSubscription>() => T;
  storiesLiked: <T = Promise<AsyncIterator<LikesSubscription>>>(
    args?: {
      where?: LikesWhereInput;
      orderBy?: LikesOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  communitiesIds: () => Promise<AsyncIterator<ID_Output[]>>;
}

export interface ProfileSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface ProfileSubscriptionPayload
  extends Promise<ProfileSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Profile>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProfilePreviousValues>() => T;
}

export interface ProfileSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProfileSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProfileSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProfilePreviousValuesSubscription>() => T;
}

export interface OrganizationConnectionNode {}

export interface OrganizationConnection
  extends Promise<OrganizationConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<OrganizationEdgeNode>>() => T;
  aggregate: <T = AggregateOrganization>() => T;
}

export interface OrganizationConnectionSubscription
  extends Promise<AsyncIterator<OrganizationConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<OrganizationEdgeSubscription>>>() => T;
  aggregate: <T = AggregateOrganizationSubscription>() => T;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Type Defs
 */

export const prisma: Prisma;
