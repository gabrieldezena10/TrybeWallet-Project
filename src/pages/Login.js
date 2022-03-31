import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveLoginAction } from '../actions/index';

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

  submitLogin = () => {
    const { email } = this.state;
    const { history, dispatchEmailPasswordValues } = this.props;
    dispatchEmailPasswordValues(email);
    history.push('/carteira');
  }

  handleDisabled = () => {
    const { email, password } = this.state;
    const REGEX_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // email validation
    const minLengthPassword = 6;
    const checkLength = password.length;

    return !REGEX_EMAIL.test(email) || checkLength < minLengthPassword;
  }

  render() {
    const { email, password } = this.state;

    return (
      <section>
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
      </section>
    );
  }
}

Login.propTypes = {
  dispatchEmailPasswordValues: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.string,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchEmailPasswordValues: (payload) => dispatch(saveLoginAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
