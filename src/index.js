import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers} from 'redux'

const emptyFeedback = {
    feeling: '',
    support: '',
    understanding: '',
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

const storeInstance = createStore(
    combineReducers({
        setFeedback,
    }),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
