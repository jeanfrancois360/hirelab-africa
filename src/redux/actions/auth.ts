import axios from '../../axios';
import { types } from './types';
import { setErrors, clearErrors } from './errors';
import { openLoader, closeLoader } from './loader';

let baseUrl = '';
generateBaseUrl();
function generateBaseUrl() {
  baseUrl = window.location.origin;
}

export const clearMessage = () => {
  return {
    type: types.CLEAR_MESSAGE,
  };
};

// Action for creating a user account
export const SignUp =
  (payload: { payload: any }) =>
  async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch(clearErrors());
    dispatch(openLoader());
    clearMessage();
    try {
      const response = await axios.post('api/register', payload);
      dispatch({
        type: types.REGISTER_SUCCESS,
        payload: response.data,
      });
      dispatch(closeLoader());
    } catch (error) {
      dispatch(
        setErrors({
          error: error,
          error_msg: error,
        })
      );
      dispatch(closeLoader());
    }
  };

// Action for logging in a user
export const SignIn =
  (payload: any) =>
  async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch(clearErrors());
    dispatch(openLoader());
    clearMessage();
    try {
      const response = await axios.post('/api/login', payload);
      // Setting up temporary axios authorization token
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: response.data,
      });
      dispatch(closeLoader());
    } catch (error) {
      dispatch(
        setErrors({
          error: [],
          error_msg: error,
        })
      );
      dispatch(closeLoader());
    }
  };

// Action for resetting user account password
export const ResetPwd =
  (payload: any) =>
  async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch(clearErrors());
    dispatch(openLoader());
    clearMessage();
    try {
      const response = await axios.post('api/reset', payload);
      dispatch({
        type: types.RESET_PWD_SUCCESS,
        payload: response.data,
      });
      dispatch(closeLoader());
    } catch (error) {
      dispatch(
        setErrors({
          error: error,
          error_msg: error,
        })
      );
      dispatch(closeLoader());
    }
  };

// Action for updating user account password
export const UpdatePwd =
  (payload: any) =>
  async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch(clearErrors());
    dispatch(openLoader());
    clearMessage();
    try {
      const response = await axios.post('api/update/password', payload);
      dispatch({
        type: types.UPDATE_PWD_SUCCESS,
        payload: response.data,
      });
      dispatch(closeLoader());
    } catch (error) {
      dispatch(
        setErrors({
          error: error,
          error_msg: error,
        })
      );
      dispatch(closeLoader());
    }
  };

// Action for verifying user account
export const VerifyAcc =
  (payload: any) =>
  async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch(clearErrors());
    dispatch(openLoader());
    clearMessage();
    try {
      const response = await axios.get(`api/user/verify/${payload}`);
      setTimeout(() => {
        dispatch({
          type: types.VERIFY_ACCOUNT_SUCCESS,
          payload: response.data,
        });
      }, 3000);
      dispatch(closeLoader());
    } catch (error) {
      dispatch(
        setErrors({
          error: error,
          error_msg: error,
        })
      );
      dispatch(closeLoader());
    }
  };

// Action for signing out a user
export const Logout =
  (payload: string) => async (dispatch: (arg0: { type: string }) => void) => {
    try {
      const response = await axios.post('api/logout', payload, {
        headers: {
          Authorization: 'Bearer ' + payload,
        },
      });
      if (response.status === 200) {
        localStorage.clear();
        window.location.replace(baseUrl + '/app/auth');
      }
      dispatch({
        type: types.LOGOUT_SUCCESS,
      });
    } catch (error) {
      if (error === 'Unauthenticated.') {
        localStorage.clear();
        window.location.replace(baseUrl + '/app/auth');
      }
    }
  };
