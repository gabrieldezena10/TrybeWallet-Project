import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderStyle from './HeaderStyle';

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
      <HeaderStyle>
        <span data-testid="email-field">
          { `Email: ${emailInput}` }
        </span>
        <span data-testid="total-field">
          {this.sumExpenses()}
        </span>
        <span data-testid="header-currency-field">
          BRL
        </span>
      </HeaderStyle>
    );
  }
}

Header.propTypes = {
  emailInput: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

const mapStateToProps = (state) => ({
  emailInput: state.user.email,
  expenses: state.wallet.expenses,
  data: state.wallet.data,

});

export default connect(mapStateToProps)(Header);
