const URL = 'https://economia.awesomeapi.com.br/json/all';

const getData = async () => {
  const response = await fetch(URL);
  const currencies = await response.json();
  delete currencies.USDT;
  const filteredCurrencies = Object.keys(currencies);
  return filteredCurrencies;
};

export default getData;

//   const response = await fetch(URL);
//   const currencies = await response.json();
//   const filteredCurrencies = Object.keys(currencies)
//     .filter((tether) => tether !== 'USDT');
//   return filteredCurrencies;
// };

// https://love2dev.com/blog/javascript-remove-from-array/
