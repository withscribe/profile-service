// Author: Austin Howlett
// Description: Fragments ensure that, if requested, all of these fields will be returned

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
