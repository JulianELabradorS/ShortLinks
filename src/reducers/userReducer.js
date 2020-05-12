import { LOGIN, SING_UP, SHORTEN, DELETE_SHORTEN } from './types/userTypes';

const INITIAL_STATE = { user: '', shortLinks: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SING_UP:
      return {
        ...state,
        user: action.payload,
      };

    case LOGIN:
      break;
    case SHORTEN:
      return {
        ...state,
        shortLinks: [action.payload, ...state.shortLinks],
      };
    case DELETE_SHORTEN:
      return {
        ...state,
        shortLinks: [...action.payload],
      };

    default:
      return state;
  }
};
