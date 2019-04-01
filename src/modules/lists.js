import { gitusersRef } from '../config/firebase'

export const UPDATE_CURRENT_VALUE = 'UPDATE_CURRENT_VALUE'
export const UPDATE_WORKING_LIST = 'UPDATE_WORKING_LIST'
export const UPDATE_GIT_USERS = 'UPDATE_GIT_USERS'
export const FETCH_USERS = 'FETCH_USERS'

const initialState = {
    gitUsers: [],
    currentItem: null,
    workingList: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_VALUE:
            return {
                ...state,
                currentItem: action.currentValue
            }
        // case UPDATE_GIT_USERS:
        //     return {
        //         ...state,
        //         user: action.user
        //     }
        case UPDATE_GIT_USERS:
            return {
                ...state,
                gitUsers: [...state.gitUsers, action.user]
            }
        case FETCH_USERS:
            return action.payload
        default:
            return state
    }
}

export const getUserData = (val) => dispatch => {
    const zipCodeapiUrl = `https://api.github.com/users/${val}`
    return fetch(zipCodeapiUrl)
        .then(response => response.json())
        .then(json => {
            console.log(JSON.stringify(json))
            dispatch({
                type: UPDATE_GIT_USERS,
                user: json
            })
        })
}

export const addUser = newUser => async dispatch => {
    console.log('add user action: ', newUser)
    gitusersRef.push().set(newUser)
}

export const addUser2 = (val) => async dispatch => {
    const zipCodeapiUrl = `https://api.github.com/users/${val}`
    return fetch(zipCodeapiUrl)
        .then(response => response.json())
        .then(gitusersRef.push().set(val))
        .then(json => {
            console.log(JSON.stringify(json))
            dispatch({
                type: UPDATE_GIT_USERS,
                user: json
            })
        })
} 

export const fetchUsers = () => async dispatch => {
    gitusersRef.on("value", snapshot => {
      dispatch({
        type: FETCH_USERS,
        payload: snapshot.val()
      })
    })
  };

export function getGitUser (val) {
    console.log('gituser value: ', val)
    const gitUrl = 'https://api.github.com/users/rich'
    let fetchResult
    return fetch(gitUrl)
        .then((response) => {
            return response.json()
        })
        .then((myJson) => {
            console.log(JSON.stringify(myJson))
            fetchResult = myJson
        })
    return dispatch => {
        dispatch({
            type: UPDATE_GIT_USERS,
            user: fetchResult
        })
    }
}


// export function addUserObject(val) {
//     console.log('got this far addUserObject')
//     return dispatch => {
//         console.log('got to dispatch')
//         dispatch({
//             type: UPDATE_GIT_USERS,
//             currentValue: val   
//         })
//     }    
// }

export function updateCurrentValue(val) {
    console.log('updateCurrentValue: ', val)
    return dispatch => {
        dispatch({
            type: UPDATE_CURRENT_VALUE,
            currentValue: val
        })
    }
}

export function updateWorkingList(val) {
    console.log('update working list: ', val)
    return dispatch => {
        dispatch({
            type: UPDATE_CURRENT_VALUE,
            currentValue: val
        })
    }
}