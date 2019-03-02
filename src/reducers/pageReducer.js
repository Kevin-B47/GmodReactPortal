import { SWAP_PAGE, CREATE_SNACK, REMOVE_SNACK } from '../types/pageTypes';
const initialState = {
	page: 'home',
	snackMsg: undefined
};

function mergeStateWithPayload(state, parsedPayload) {
	return Object.assign(state, parsedPayload);
}

export default function(state = initialState, action) {
	let newState = { ...state };

	const { payload } = action;

	switch (action.type) {
		case SWAP_PAGE:
			return mergeStateWithPayload(newState, { page: payload });
		case CREATE_SNACK:
			return mergeStateWithPayload(newState, { snackMsg: payload });
		case REMOVE_SNACK:
			return mergeStateWithPayload(newState, { snackMsg: undefined });
		default:
			return state;
	}
}
