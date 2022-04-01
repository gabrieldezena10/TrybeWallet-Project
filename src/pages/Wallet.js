import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { fetchCurrencyData } from '../actions';
import ExpensesForm from '../components/ExpensesForm';

class Wallet extends React.Component {
componentDidMount = () => {
  const { fetchCurrency } = this.props;
  fetchCurrency();
}

render() {
  return (
    <>
      <Header />
      <ExpensesForm />
    </>

  );
}
}

Wallet.propTypes = {
  fetchCurrency: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencyData()),
});

export default connect(null, mapDispatchToProps)(Wallet);
