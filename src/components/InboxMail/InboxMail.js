import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

class InboxMail extends PureComponent {
  render() {
    const {
      match: {
        params: { id }
      },
      data
    } = this.props;

    const mail = data.inbox.find(mail => {
      return mail.id === id
    });

    return <Mail {...mail} purpose='from'/>;
  }
}

export default withData(InboxMail);
