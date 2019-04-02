<p align="center"><a href="https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f"><img src="https://i.imgur.com/PATsTx2.png" title="View tutorial" alt="React, React Router, Redux and Redux Thunk" width="900"></a></p>

* Tutorial: [Getting started with create-react-app, Redux, React Router & Redux Thunk](https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f)
* [Demo](https://create-react-app-redux.now.sh) 🙌

## Installation

```bash
git clone https://github.com/notrab/create-react-app-redux.git
cd create-react-app-redux
yarn
```

## Get started

```bash
yarn start
```

This boilerplate is built using [create-react-app](https://github.com/facebook/create-react-app) so you will want to read the User Guide for more goodies.
# gitusers

NOTES:
    - since the app is tiny, im using a single file for actions, reducers, constants
        ~/src/modules/users.js
    - for the 'public repos' & 'public_gists' section, made the assumption that this should just be the count
            *** this is obviously a point where Id seek calrification from UX, product owner, or the person that defines the 'acceptance criteria'
    - Assuming that all required fields in UX will be present in a '200' return because git requires them for registration and returns appropriate vals for each. 