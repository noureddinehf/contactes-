import contactes from'./contacte.reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
   contact:contactes
   
});

export default rootReducer;
