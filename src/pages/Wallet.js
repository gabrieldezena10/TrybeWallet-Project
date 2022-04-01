import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable';
import { fetchCurrencyKeys } from '../actions';

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
      <ExpensesTable />
    </>

  );
}
}

Wallet.propTypes = {
  fetchCurrency: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencyKeys()),

});

export default connect(null, mapDispatchToProps)(Wallet);
