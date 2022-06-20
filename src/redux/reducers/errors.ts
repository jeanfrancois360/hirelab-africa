import { types } from '../actions/types';

const initialState = {
  error: '',
  error_msg: '',
};

const errors = (
  state = initialState,
  action: { type: any; payload: { error: any; error_msg: any } }
) => {
  switch (action.type) {
    case types.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
        error_msg: action.payload.error_msg,
      };
    case types.CLEAR_ERROR:
      return {
        ...state,
        error: '',
        error_msg: '',
      };
    default:
      return state;
  }
};

export default errors;
