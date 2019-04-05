import { gitusersRef } from '../config/firebase'

export const UPDATE_GIT_USERS = 'UPDATE_GIT_USERS'
export const FETCH_USERS = 'FETCH_USERS'
export const NO_USER_FOUND = 'NO_USER_FOUND'

const initialState = {
    gitUsers: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
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

export const addUser = (val) => async dispatch => {
    const url = `https://api.github.com/users/${val}`
    return fetch(url)
        .then(response => 
            response.json()
        )
        .then(gitusersRef.push().set(val))
        .then(json => {
            console.log(JSON.stringify(json))
            dispatch({
                type: UPDATE_GIT_USERS,
                user: json
            })
        })
        .catch(err =>
            console.log('error')
        )
} 

export const fetchUsers = () => async dispatch => {
    gitusersRef.on("value", snapshot => {
      dispatch({
        type: FETCH_USERS,
        payload: snapshot.val()
      })
    })
  };
