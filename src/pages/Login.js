import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveLoginAction } from '../actions/index';
import LoginStyle from './LoginStyle';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  // Função genérica para pegar as informações do input e salvar no estado
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // Função agregada ao botão submit
  submitLogin = () => {
    const { email } = this.state;
    const { history, dispatchEmailValue } = this.props;
    dispatchEmailValue(email);
    history.push('/carteira');
  }

  handleDisabled = () => {
    const { email, password } = this.state;
    const REGEX_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // email validation
    const minLengthPassword = 6;
    const checkLength = password.length;
    // false || false;  false
    const checkDisabled = !REGEX_EMAIL.test(email) || checkLength < minLengthPassword;
    return checkDisabled;
  }

  render() {
    const { email, password } = this.state;

    return (
      <LoginStyle>
        <div>Login</div>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          value={ email }
          placeholder="Digite o seu email"
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          value={ password }
          placeholder="Digite a sua senha"
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          disabled={ this.handleDisabled() }
          onClick={ () => this.submitLogin() }
        >
          Entrar
        </button>
      </LoginStyle>
    );
  }
}

Login.propTypes = {
  dispatchEmailValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchEmailValue: (payload) => dispatch(saveLoginAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
