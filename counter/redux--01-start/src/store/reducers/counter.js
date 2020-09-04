import * as actionTypes from '../actions';

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {

    // rewrote the conditional statements from above code using switch and case !
    switch ( action.type ){

        case actionTypes.INCREMENT:
            // a way to clone the old state  in a imutable way
            // const newState = Object.assign({}, state);
            // newState.counter = state.counter + 1;
            // return newState;
            return {
                ...state,
                counter: state.counter + 1
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
        
    }

    return state;
}

export default reducer;