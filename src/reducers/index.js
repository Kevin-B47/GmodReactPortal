import { combineReducers } from 'redux';
import userData from './userDataReducer';
import page from './pageReducer';

export default combineReducers({
	userData: userData,
	page: page
});
