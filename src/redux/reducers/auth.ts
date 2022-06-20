import { types } from '../actions/types';

const initialState = {
  user: [],
  token: null,
  message: '',
  isAuthenticated: false,
};
const auth = (
  state = initialState,
  action: { type: any; payload: { user: any; token: any } }
) => {
  switch (action.type) {
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        message: 'registered',
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        message: "You're logged in successfully!",
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        token: null,
        message: '',
      };
    case types.RESET_PWD_SUCCESS:
      return {
        ...state,
        message: 'email sent',
      };
    case types.UPDATE_PWD_SUCCESS:
      return {
        ...state,
        message: 'updated',
      };
    case types.VERIFY_ACCOUNT_SUCCESS:
      return {
        ...state,
        message: 'account verified',
      };

    case types.CLEAR_MESSAGE:
      return {
        ...state,
        message: '',
      };

    default:
      return state;
  }
};

export default auth;
