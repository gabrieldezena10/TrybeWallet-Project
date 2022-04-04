import styled from 'styled-components';

const ExpensesTableStyle = styled.table`
max-width: 1500px;
margin-right:auto;
margin-left:auto;

min-height:20vh;

body {
  padding: 22px;
  font-family:'Source Sans Pro', sans-serif;
  margin:0;
}

.table-header {
  background-color: #95A5A6;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

th {
  padding: 25px
}

td {
  padding 10px 0px;
}

.table-row {
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
  text-align: center;
}

button {
  margin 0 3px;
}
`;

export default ExpensesTableStyle;
