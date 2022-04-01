import getData from '../services/currencyAPI';

export const SAVE_LOGIN = 'SAVE_LOGIN';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const GET_CURRENCY = 'GET_CURRENCY';
export const SET_EXPENSES = 'SET_EXPENSES';

export const saveLoginAction = (payload) => ({ type: SAVE_LOGIN, payload });
export const requestCurrencyAPI = () => ({ type: REQUEST_CURRENCY });
export const getCurrency = (payload) => ({ type: GET_CURRENCY, payload });

export const fetchCurrencyKeys = () => async (dispatch) => {
  dispatch(requestCurrencyAPI());
  const currenciesData = await getData();
  dispatch(getCurrency(currenciesData));
};

export const setExpensesAction = (expenses) => ({ type: SET_EXPENSES, expenses });
