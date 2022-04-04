import styled from 'styled-components';

const LoginStyle = styled.section`
border-color: rgb(13,120,22);
border-radius: 8px;
align-items: center;
display: flex;
flex-direction: column;
margin: 10% auto;
padding: 4%;
width: 30%;
background-color:#222222;

input {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: #c9c9c9;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}

div {
  font-family: 'Poppins', sans-serif; 
  font-size: 1.5rem;
  margin-bottom: 80px;
  color: white;
}

button {
    color:#fff;
    background-color:#e74c3c;
    outline: none;
      border: 0;
      color: #fff;
    padding:10px 20px;
    text-transform:uppercase;
    margin-top:50px;
    border-radius:2px;
    cursor:pointer;
    position:relative;
}
`;

export default LoginStyle;
