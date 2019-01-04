import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');
const user = {
  email: 'stu@dent.com',
  password: '123'
};

class AuthProvider extends PureComponent {
  state = {
    isAuthorized: false,
    authorizeError: ''
  }

  authorize = (email, password) => {
    if (email === user.email && password === user.password) {
      this.setState({
        isAuthorized: !this.state.isAuthorized
      })
    } else {
      this.setState({
        authorizeError: 'Email или пароль введён не верно'
      })
    }
  };

  logOut = () => {
    this.setState({
      isAuthorized: false,
      authorizeError: ''
    })
  }

  render() {
    const { children } = this.props;
    return (
      <Provider 
        value={{
          isAuthorized: this.state.isAuthorized,
          authorizeError: this.state.authorizeError,
          authorize: this.authorize,
          logOut: this.logOut,
          user
        }}
      >
        {children}
      </Provider>
    );
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
