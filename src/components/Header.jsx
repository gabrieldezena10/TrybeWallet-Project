import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  sumExpenses = () => {
    const { expenses } = this.props;
    const calculator = expenses.reduce((acc, expense) => (
      acc + expense.value * expense.exchangeRates[expense.currency].ask
    ), 0);
    return calculator.toFixed(2);
  }

  render() {
    const { emailInput } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          { `Email: ${emailInput}` }
        </span>
        <span data-testid="total-field">
          {this.sumExpenses()}
        </span>
        <span data-testid="header-currency-field">
          BRL
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  emailInput: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
};

const mapStateToProps = (state) => ({
  emailInput: state.user.email,
  expenses: state.wallet.expenses,
  data: state.wallet.data,

});

export default connect(mapStateToProps)(Header);
