import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');
const user = {
  email: 'stu@dent.com',
  password: '123'
};

class AuthProvider extends PureComponent {
  state = {
    isAuthorized: false,
    authorizeError: '',
    email: user.email,
    password: user.password
  }

  authorize = (email, password) => {
    if (email === this.state.email && password === this.state.password) {
      this.setState({
        isAuthorized: true,
        authorizeError: ''
      })
    } else {
      this.setState({
        authorizeError: 'Email или пароль введён не верно'
      })
    }
  };

  logout = () => {
    this.setState({
      isAuthorized: false,
      authorizeError: ''
    })
  }

  getProviderValue = () => {
    return {
      isAuthorized: this.state.isAuthorized,
      authorizeError: this.state.authorizeError,
      authorize: this.authorize,
      logout: this.logout,
      email: this.state.email,
      password: this.state.password
    }
  }

  render() {
    const { children } = this.props;
    return (
      <Provider value={this.getProviderValue}>
        {children}
      </Provider>
    );
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
