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

## NOTES:
```bash
Workflow:
        - app renders at 'http://localhost:3000'
        - Once app renders, user will be presented with a screen that has a searchbard, and a table list of results.
        - when the user types into the searchbar, they can intiate a search of the github api for the user they type into the bar by pressing 'enter' or clicking the 'button' next to the input bar. 
        - results for the search will be displayed in the table below the search bar
Explanation of application:
        - HomeContainer is used as the point where 'Connect' is called and all actions and state props are organized and prepared to pass into component. I prefer to do things this way, its more verbose and easier to follow.
        - Within the 'Home' component, there are several props passed in. 
                getUsers makes a call to the backend to get results
                addUsers queries the github repo for a user and then adds the result to the backend
                userInfo is the result set pushed into the Redux store by the getUsers action
                success & latestUser are used in the success/error message that is displayed after each github search

Further explanation of actions/reducers
        - since the app is tiny, im using a single file for actions, reducers, constants
        - within the ~src/components/users.js file are both the actions & reducers used to support this app. 
        - addUser takes a val passed in from UI, then performs a 'fetch' to get results. A promise chain is built to take the results, turn the results into valid json, add the results to the backend, and dispatch the 'FETCH_USERS' reducer to get the updated results into the Redux store.
        - getUsers is called by the app on initial load, and then each time a user is added. getUsers queries the backend, the trips the 'FETCH_USERS' reducer to update the store. 
        - 'FETCH_USERS' & 'USER_ERROR' are the 2 reducers built to support the app. 'FETCH_USERS' is called by both 'addUser' and 'getUsers', it simply pushes user results from the backend into 'fetchUsers' key in state. 'USER_ERROR' is just used to give a value for the success/error widget in the UI.

Project Requirements
        Using React and Firebase, implement a Github "user saver" app. The app should meet thefollowing criteria:
        1. There is a search bar at the top of the page in which users can enter Github usernames

        2. Upon pressing enter in the textbox, the application retrieves this URL
        https://api.github.com/users/<username>;

        3. If there is a result, the application displays a success message to the user and saves data. If there is an error, the application displays an error message.

        4. Below the search box there are rows of data corresponding to users in the database.
        Each row contains this information:
                ● Username w/ link to Github profile
                ● name
                ● public_repos
                ● public_gists
                ● followers
                ● following
                ● created_at in MM/DD/YYYY format
        Wireframes here: http://i.imgur.com/QUVddT3.png
        The app does not need to worry about authentication or user-specific lists of any kind.

NOTES on app:
        At present there are 2 version. 
                - master branch is initial version, results are displayed in a table,
                a map job is run to display results
                - addAntTable branch simply incorporates the ant design library, and uses the very simple and clean implementation of its 'Table' component to list results
        Future work......build custom table component. Get pagination buttons looking a little better for ant branch.

        ~/src/components/users.js
for the 'public repos' & 'public_gists' section, made the assumption that this should just be the count

            *** this is obviously a point where Id seek calrification from UX, product owner, or the person that defines the 'acceptance criteria'

Assuming that all required fields in UX will be present in a '200' return because git requires them for registration and returns appropriate vals for each. 

TODO: border for 'git-user-table-header'

TODO: Turn user results into component

Im unsure what the border inside and around the first item in the results list. Id need to find out what this is or is supposed to do. Leaving this out of initial work

Font for error/success needs to be updated

Error checking is ambiguous, could use more clarification and def more work