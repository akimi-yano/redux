import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    // rewrote the conditional statements from above code using switch and case !
    switch ( action.type ){

        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // concat function returns a new array which is the old array + the argment you pass into concat
                // if you use .push() you are touching the original result property in the original state
                // $push
                // if I have multiple  reducers that are combined into one, get the data about count from payload 
                results: state.results.concat({id: new Date().getMilliseconds(), val: action.result})
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
            // $splice
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