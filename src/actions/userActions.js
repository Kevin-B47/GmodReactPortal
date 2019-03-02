import { fetchUserData, logout } from '../static/userReq';
import { USER_AUTH_FETCH_SUCESS, USER_AUTH_LOGOUT } from '../types/userTypes';

const dispatchPayload = (dispatch, type, payload) => {
	return dispatch({
		type: type,
		payload: payload
	});
};

export const onUserFetch = () => (dispatch) => {
	fetchUserData()
		.then((res) => dispatchPayload(dispatch, USER_AUTH_FETCH_SUCESS, res.data))
		.catch((err) => console.log(err));
};

export const onUserLogout = () => async (dispatch) => {
	const res = await logout().catch((err) => console.log(err));

	if (res.status === 200) {
		dispatchPayload(dispatch, USER_AUTH_LOGOUT, undefined);
	}
};
