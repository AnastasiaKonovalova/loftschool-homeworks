import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';
// import { AuthProvider, AuthConsumer } from '../../contexts/Auth';

class Layout extends PureComponent {
  render() {
    const {header, footer, children} = this.props;
    return (
      <Fragment>
        {this.renderHeader(header)}
        <main className='main main--with-header main--with-footer'>
          <SectionTitle className='main__title'>Main</SectionTitle>
          {children}
        </main>
        {this.renderFooter(footer)}
      </Fragment>
    )
  }

  renderHeader = (HeaderChild) => {
    return (
      <header className='header'>
        <SectionTitle className='header__title'>Header</SectionTitle>
        <HeaderChild/>
      </header>
    )
  }

  renderFooter(FooterChild) {
    return (
      <footer className='footer'>
        <SectionTitle className='header__title'>Footer</SectionTitle>
        <FooterChild/>
      </footer>
    )
  }
}

export default Layout;
