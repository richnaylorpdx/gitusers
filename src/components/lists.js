import { databaseRef, gitlistsRef } from '../config/lists_firebase'
import uuid from 'uuid'

export const FETCH_LISTS = 'FETCH_LISTS'

const initialState = {
    fetchLists: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LISTS:
            return {
                ...state,
                lists: action.lists,
            }
        default:
            return state
    }
}

export const addList = (val) => async dispatch => {
    return gitlistsRef.push().set({
        name: val,
        key: uuid.v4(),
        items: [
            {
                id: uuid.v4(),
                uiName: 'item 1',
                value: 'item 1'
            },
            {
                id: uuid.v4(),
                uiName: 'item 2',
                value: 'item 2'
            }
        ]
    })
        .then(() => gitlistsRef.once("value", lists => {
            let listResults = []
            lists.forEach(list => {
                listResults.push(list.val())
            })
            dispatch({
                type: FETCH_LISTS,
                lists: listResults
            })
        }))
}

export const writeListData = (userId, name, email, ) => {
    databaseRef('users/' + userId).set({
        username: name,
        email: email,
    });
}

export const getListItems = () => async dispatch => {
    gitlistsRef.once('value', lists => {
        let listResults = []
        lists.forEach((list) => {
console.log('list results in loop: ', list)        
            listResults.push(list.val())
        })
console.log('list results: ', listResults)        
        dispatch({
            type: FETCH_LISTS,
            lists: listResults
        })
    })
}