const URL = 'https://economia.awesomeapi.com.br/json/all';

const getData = async () => {
  const response = await fetch(URL);
  const currencies = await response.json();
  const filteredCurrencies = Object.keys(currencies)
    .filter((tether) => tether !== 'USDT');
  return filteredCurrencies;
};

export default getData;
