import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button'
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <div className='header__content'>
        <AuthConsumer>
          {({ isAuthorized, logOut, user }) => 
            isAuthorized ? (
              <div className='header-menu'>
                <p className='header-menu__email header-email t-header-emai'>{user.email}</p>
                <Button onClick={logOut} className='header-menu__button t-logout'>Выйти</Button>
              </div>
            ) : null
          }
        </AuthConsumer>
      </div>
    );
  }
}

export default Header;
