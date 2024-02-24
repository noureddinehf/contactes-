import { createStore, applyMiddleware, compose } from 'redux'; 
import {thunk} from 'redux-thunk';
import rootReducer from '../reducers/index';

// Remove the second set of parentheses and pass thunk as an argument to applyMiddleware
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
