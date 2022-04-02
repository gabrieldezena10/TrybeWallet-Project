import getData from '../services/currencyAPI';

export const SAVE_LOGIN = 'SAVE_LOGIN';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const GET_CURRENCY = 'GET_CURRENCY';
export const SET_EXPENSES = 'SET_EXPENSES';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';

export const saveLoginAction = (payload) => ({ type: SAVE_LOGIN, payload });
export const requestCurrencyAPI = () => ({ type: REQUEST_CURRENCY });
export const getCurrency = (keys, data) => ({ type: GET_CURRENCY, keys, data });

export const fetchCurrencyKeys = () => async (dispatch) => {
  dispatch(requestCurrencyAPI());
  const currenciesData = await getData();
  const keyCurrencies = Object.keys(currenciesData);
  dispatch(getCurrency(keyCurrencies, currenciesData));
};

export const setExpensesAction = (payload) => ({ type: SET_EXPENSES, payload });

export const removeExpenses = (payload) => ({ type: REMOVE_EXPENSES, payload });
