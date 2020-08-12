// reducer is a function, that will detect the dispatched action
// and will receive data from the dispatched action
// based on the received data, the reducer will update
// the store

import { ADD_PRODUCT } from './../actions/action';
// combineReducers: used to create a single immutable object for all reducer
// in current application
import { combineReducers } from 'redux';

// reducer that will accept the data from ADD_DATA Action
// and update the state in store
// state: the initial state in the store
// action: the action taht is dispatched from View or resultant action
// the reducer will read data from this action 

export function addProuctReducer(state, action) {
    // print the initial state
    console.log(`addProuctReducer intial state ${JSON.stringify(state)}`);
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                product: action.product // update the current state with the product
            }
        default:
            return state; // return the state as it is
    }
}

// new reducer that will return list of products from the state based on action
export function listproductsReducer(state = [], action) {
    switch (action.type) {
        case ADD_PRODUCT:
            // ...state means the same state object will be updated
            // everytime when the new Product is added
            return [...state, addProuctReducer(undefined, action)];
        default:
            return state; // return the state as it is
    }
}

const productreducer = combineReducers({ listproductsReducer });
export default productreducer;