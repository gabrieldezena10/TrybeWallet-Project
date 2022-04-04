import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpenses } from '../actions';
import ExpensesTableStyle from './ExpensesTableStyle';

class ExpensesTable extends Component {
 deleteExpense = (keyId) => {
   const { expenses, removeExpenseLine } = this.props;
   const item = expenses.filter((expense) => (expense.id !== keyId));
   removeExpenseLine(item);
 }

 render() {
   const { expenses } = this.props;
   return (
     <ExpensesTableStyle>
       <thead className="table-header">
         <tr>
           <th>Descrição</th>
           <th>Valor</th>
           <th>Moeda</th>
           <th>Câmbio utilizado</th>
           <th>Moeda de conversão</th>
           <th>Valor convertido</th>
           <th>Método de pagamento</th>
           <th>Tag</th>
           <th>Editar/Excluir</th>
         </tr>
       </thead>
       <tbody>
         {expenses.map((expense) => (
           <tr key={ expense.id } className="table-row">
             <td>{expense.description}</td>
             <td>{parseFloat(expense.value).toFixed(2)}</td>
             <td>{expense.exchangeRates[expense.currency].name}</td>
             <td>
               {parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)}
             </td>
             <td>Real</td>
             <td>
               {parseFloat(expense.value * expense.exchangeRates[expense.currency].ask)
                 .toFixed(2)}
             </td>
             <td>{expense.method}</td>
             <td>{expense.tag}</td>
             <td>
               <button
                 data-testid="delete-btn"
                 type="button"
                 onClick={ () => this.deleteExpense(expense.id) }
               >
                 Excluir
               </button>
             </td>

           </tr>
         ))}
       </tbody>
     </ExpensesTableStyle>
   );
 }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  removeExpenseLine: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpenseLine: (payload) => { dispatch(removeExpenses(payload)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);

/*

*/
