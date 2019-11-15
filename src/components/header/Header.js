import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/styles.scss';
import './Header.scss';

class Header extends Component {
  render() {
    const { t } = this.props;

    return (
      <div id='header'>
        <div className='content'>
          <img alt='Logo do projeto' src='images/logo.png' className='logo' />
        </div>
        <div className="lines">
          <div className='column column-border column-left'></div>
          <div className='column column-center'></div>
          <div className='column column-border'></div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  t: PropTypes.func.isRequired,
  classes: PropTypes.object
};

export default Header;