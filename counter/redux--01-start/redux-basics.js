// LITTLE REDUX TEST: This page is stand alone to understand redux (its not connected to react app)

// 1 import redux
const redux = require('redux');
const createStore = redux.createStore;

// 2 initialize a state 
const initialState = {
    counter: 0
}

// 3 reducer 
const rootReducer = (state = initialState, action) =>{
    if(action.type == 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        };
    };
    if(action.type == 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

// 4 store
const store = createStore(rootReducer);
// when I run node redux-basics.js I can see the state!
console.log(store.getState());


// 5 subscription (this is triggered whenever the action is dispatched)
store.subscribe(()=>{
    console.log('[Subscroption]', store.getState());
});

// 6 dispatching action (need to specify the type! and dispatch is a function)
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

