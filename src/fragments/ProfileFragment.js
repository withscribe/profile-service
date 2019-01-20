const profileFragment = `
  fragment profileFragment on Profile {
    id
    account_id
    userName
    firstName
    lastName
    dateOfBirth
    storiesPublished
    storiesReviewed
    flaggedStories
    occupation
    employer {
     id
     orgName
     address
     country
     orgType
    }
    storiesLiked {
      id
      guid
    }
    communitiesIds
  }
`

module.exports = { profileFragment };
