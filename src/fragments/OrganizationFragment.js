const organizationFragment = `
  fragment organizationFragment on Organization {
     id
     orgName
     address
     country
     orgType
  }
`

module.exports = { organizationFragment };
