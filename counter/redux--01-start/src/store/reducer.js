// THIS FILE IS IF WE HAVE ONLY ONE REDUCER 

import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    // if (action.type === 'INCREMENT'){
    //     return {
    //     counter: state.counter + 1
    //     }
    // }
    // if (action.type === 'DECREMENT'){
    //     return {
    //     counter: state.counter - 1
    //     }
    // }
    // if (action.type === 'ADD'){
    //     return {
    //     counter: state.counter + action.val
    //     }
    // }
    // if (action.type === 'SUBTRACT'){
    //     return {
    //     counter: state.counter - action.val
    //     }
    // }

    // rewrote the conditional statements from above code using switch and case !
    switch ( action.type ){

        case actionTypes.INCREMENT:
            // a way to clone the old state  in a imutable way
            // const newState = Object.assign({}, state);
            // newState.counter = state.counter + 1;
            // return newState;
            return {
                ...state,
                counter: state.counter -1
            }

        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
                }

        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
                }

        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
                }
        
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // concat function returns a new array which is the old array + the argment you pass into concat
                // if you use .push() you are touching the original result property in the original state
                results: state.results.concat({id: new Date(), val: state.counter})
            }
        
        case actionTypes.DELETE_RESULT:
            // approach1 avoid mutating the original array by making copy
            // const id = 2;
            // const newArray = [...state.results]
            // newArray.splice(id,1)
            // return {
            //     ...state,
            //     results: newArray
            // }

            // approach1 avoid mutating the original array by using filter() - filter returns new array
            const updatedArray = state.results.filter(result=>  result.id != action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }

    return state;
}

export default reducer;