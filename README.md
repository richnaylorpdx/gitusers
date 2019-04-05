# GitUsers

## Installation

```bash
git clone https://github.com/richnaylorpdx/gitusers.git
cd for_side
npm install
```

## Get started

```bash
npm run start
```

This boilerplate is built using [create-react-app](https://github.com/facebook/create-react-app) so you will want to read the User Guide for more goodies.
# gitusers

## NOTES:
```bash
since the app is tiny, im using a single file for actions, reducers, constants
        ~/src/components/users.js
for the 'public repos' & 'public_gists' section, made the assumption that this should just be the count

            *** this is obviously a point where Id seek calrification from UX, product owner, or the person that defines the 'acceptance criteria'

Assuming that all required fields in UX will be present in a '200' return because git requires them for registration and returns appropriate vals for each. 

TODO: border for 'git-user-table-header'

TODO: Turn user results into component

Im unsure what the border inside and around the first item in the results list. Id need to find out what this is or is supposed to do. Leaving this out of initial work

Font for error/success needs to be updated

Error checking is ambiguous, could use more clarification and def more work