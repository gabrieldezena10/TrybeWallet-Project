import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setExpensesAction, fetchCurrencyKeys } from '../actions/index';

class ExpensesForm extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  submitExpenses = async () => {
    const { dispatchFormValues, fetchCurrencyData, data } = this.props;
    let { id } = this.state;
    this.setState({
      exchangeRates: data,
    });
    await fetchCurrencyData();
    dispatchFormValues(this.state);

    this.setState({
      id: id += 1,
      value: '',
    });
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
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
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="coin">
          Moeda
          <select
            data-testid="currency-input"
            id="coin"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {currencies
              .map((money, index) => (
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
            name="method"
            value={ method }
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

        <button
          type="button"
          onClick={ () => this.submitExpenses() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  data: state.wallet.data,

});

const mapDispatchToProps = (dispatch) => ({
  dispatchFormValues: (payload) => dispatch(setExpensesAction(payload)),
  fetchCurrencyData: () => dispatch(fetchCurrencyKeys()),
});

ExpensesForm.propTypes = {
  dispatchFormValues: PropTypes.func.isRequired,
  fetchCurrencyData: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  data: PropTypes.objectOf(
    PropTypes.object.isRequired,
  ),
};

ExpensesForm.defaultProps = {
  data: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
