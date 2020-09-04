import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import createStore from redux <- npm install first 
// also import combineReducers to comobine reducers
import { createStore, combineReducers } from 'redux';
// import reducer
// import reducer from './store/reducer';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
// import Prodiver from react-redux <- npm install first
import { Provider } from 'react-redux';


const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})


//this takes a reduxer as an input
// const store = createStore(reducer); 
const store = createStore(rootReducer); 

// this is where we mount our app component to the DOM :)
// We need to wrap  the app with Provider 
// Provider is a helper component that allows the store to be injected into our components !
// Provider takes a property called store and we pass in  our store instance initialized by createStore()
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
