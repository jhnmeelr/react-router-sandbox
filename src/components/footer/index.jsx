import React from 'react';
import { withRouter } from 'react-router-dom';

import './styles.scss';

import history from '../../history';

class Footer extends React.Component {
  render () {
    const currentPage = window.location.pathname;

    if ([ '/authentication', '/registration' ].includes(currentPage)) {
      return null;
    }

    return (
      <div className="footer">
        <button onClick={() => history.push('/contacts')}>
          <i className="far fa-address-book"></i>
        </button>
        <button onClick={() => history.push('/chats')}>
          <i className="far fa-comments"></i>
        </button>
        <button onClick={() => history.push('/settings')}>
          <i className="fas fa-cog"></i>
        </button>
      </div>
    )
  }
}

export default withRouter(Footer);
