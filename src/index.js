// import all the necessary bits from node modules
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers} from 'redux'

// start with an empty feedback object
const emptyFeedback = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
}
// set single feedback reducer, which sets the key/value pairs or clears the object back to empty
const setFeedback = (state = emptyFeedback, action) => {
    if ( action.type === 'SET_FEEDBACK') {
        return {...state, ...action.payload}
    } else if ( action.type === 'CLEAR_FEEDBACK') {
        return emptyFeedback
    }
    return state
}

// reducer to set array of feedback objects from the db. 
const getFeedback = (state = [], action) => {
    if ( action.type === 'CLEAR_FEEDBACK_LIST' ) {
        return [];
    }
    else if ( action.type === 'SET_FEEDBACK_LIST') {
        return [...state, action.payload]
    } 
    return state
}

// reducer to set whether user is "logged in" or not
const testLogin = (state = false, action ) => {
    if ( action.type === 'LOGIN') {
        return action.payload
    }
    return state
}

//reducer to hold input from log in form - i know this isn't right for real
// authentication, but i'm not storing real usernames and passwords here. 
const loginCredentials = (state = { username: '', password: ''}, action ) => {
    if ( action.type === 'CREDENTIALS') {
        return action.payload
    } else if ( action.type === 'CLEAR_CREDENTIALS') {
        return { username: '', password: ''};
    }
    return state
}

// create the redux store and combine all reducers
const storeInstance = createStore(
    combineReducers({
        setFeedback,
        getFeedback,
        testLogin,
        loginCredentials,
    }),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
