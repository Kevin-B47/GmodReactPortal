import { USER_AUTH_FETCH_SUCESS, USER_AUTH_LOGOUT } from '../types/userTypes';
const initialState = {
	steamInfo: {}
};

function mergeStateWithPayload(state, parsedPayload) {
	return Object.assign(state, parsedPayload);
}

export default function(state = initialState, action) {
	let newState = { ...state };
	const { payload } = action;

	switch (action.type) {
		case USER_AUTH_FETCH_SUCESS:
			return mergeStateWithPayload(newState, { steamInfo: payload });
		case USER_AUTH_LOGOUT:
			return mergeStateWithPayload(newState, { steamInfo: {} });
		default:
			return state;
	}
}
