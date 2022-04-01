import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpensesForm extends Component {
  constructor() {
    super();

    this.state = {
      amount: '',
      coin: '',
      payment: '',
      tag: '',
      description: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { amount, description, coin, payment, tag } = this.state;
    const { currencies } = this.props;
    const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const expensesCat = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <label htmlFor="currency-value">
          Valor
          <input
            data-testid="value-input"
            id="currency-value"
            type="number"
            name="amount"
            value={ amount }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="coin">
          Moeda
          <select
            data-testid="currency-input"
            id="coin"
            name="coin"
            value={ coin }
            onChange={ this.handleChange }
          >
            {currencies.map((money, index) => (
              <option
                key={ index }
                value={ money }
              >
                {money}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="method">
          Método de Pagamento
          <select
            data-testid="method-input"
            id="method"
            name="payment"
            value={ payment }
            onChange={ this.handleChange }
          >
            {payments.map((pay, index) => (
              <option
                key={ index }
                value={ pay }
              >
                {pay}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="tag">
          Categoria
          <select
            data-testid="tag-input"
            id="tag"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            {expensesCat.map((expenseType, index) => (
              <option
                key={ index }
                value={ expenseType }
              >
                {expenseType}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="description">
          Descrição
          <input
            data-testid="description-input"
            id="description"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>

      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default connect(mapStateToProps)(ExpensesForm);
