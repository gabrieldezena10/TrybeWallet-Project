import styled from 'styled-components';

const ExpensesFormStyle = styled.form`
display: flex;
align-items: flex-start;
justify-content: space-around;
margin-top: 10px;
border: 1px solid whitesmoke;
padding: 15px;
border-radius: 4px;

#currency-value, #coin, #method, #tag, #description {
  margin: 8px
}

button {
  margin: 10px
}
`;

export default ExpensesFormStyle;
