import { SWAP_PAGE, CREATE_SNACK, REMOVE_SNACK } from '../types/pageTypes';

const dispatchPayload = (dispatch, type, payload) => {
	return dispatch({
		type: type,
		payload: payload
	});
};

export const swapPage = (id) => (dispatch) => {
	dispatchPayload(dispatch, SWAP_PAGE, id);
};

export const removeSnackMsg = () => (dispatch) => {
	dispatchPayload(dispatch, REMOVE_SNACK, undefined);
};

export const addSnackMsg = (msg) => (dispatch) => {
	dispatchPayload(dispatch, CREATE_SNACK, msg);

	setTimeout(() => removeSnackMsg()(dispatch), 5000);
};
