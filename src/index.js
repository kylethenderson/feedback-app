import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers} from 'redux'

const emptyFeedback = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
}
const setFeedback = (state = emptyFeedback, action) => {
    if ( action.type === 'SET_FEEDBACK') {
        console.log(`inside set feedback`, action.payload);
        return {...state, ...action.payload}
    } else if ( action.type === 'CLEAR_FEEDBACK') {
        return emptyFeedback
    }
    return state
}

const getFeedback = (state = [], action) => {
    if ( action.type === 'GET_FEEDBACK') {
        console.log(`inside get feedback`, action.payload);
        return action.payload
    } 
    return state
}

const storeInstance = createStore(
    combineReducers({
        setFeedback,
        getFeedback,
    }),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
