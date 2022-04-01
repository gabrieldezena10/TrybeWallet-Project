// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_CURRENCY, GET_CURRENCY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCY:
    return {
      ...state,
      loading: true,
    };
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };
  default:
    return state;
  }
};

export default wallet;
