import React from 'react';
import { withRouter } from 'react-router-dom';

import './styles.scss';

class Footer extends React.Component {
  render () {
    const currentPage = window.location.pathname;

    if ([ '/authentication', '/registration' ].includes(currentPage)) {
      return null;
    }

    return (
      <div className="footer">
        <button onClick={() => window.location.replace('/contacts')}>
          <i className="far fa-address-book"></i>
        </button>
        <button onClick={() => window.location.replace('/chats')}>
          <i className="far fa-comments"></i>
        </button>
        <button onClick={() => window.location.replace('/settings')}>
          <i className="fas fa-cog"></i>
        </button>
      </div>
    )
  }
}

export default withRouter(Footer);
