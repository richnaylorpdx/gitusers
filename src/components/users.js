import { gitusersRef } from '../config/firebase'

export const FETCH_USERS = 'FETCH_USERS'
export const USER_ERROR = 'USER_ERROR'

const initialState = {
    fetchUsers: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                fetchUsers: action.user,
                success: true,
                latestUser: action.latestUser
            }
        case USER_ERROR:
            return {
                ...state,
                success: false
            }
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
        .then(json => {
            gitusersRef.push().set(json)
        })
        .then(() => gitusersRef.once("value", users => {
            let userResults = []
            users.forEach(user => {
                userResults.push(user.val())
            })
            dispatch({
                type: FETCH_USERS,
                user: userResults,
                latestUser: val,
            })
        }))
        .catch(err =>
            dispatch({
                type: FETCH_USERS,
                latestUser: val,
            })
        )
} 

export const getUsers = () => async dispatch => {
    gitusersRef.once("value", users => {
        let userResults = []
        users.forEach(user => {
            userResults.push(user.val())
        })
        dispatch({
            type: FETCH_USERS,
            user: userResults,
            latestUser: null,
        })
    })
}