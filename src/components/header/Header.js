import React, { Component } from 'react';
import '../../styles/styles.scss';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div id='header'>
        <div className='content'>
          <img alt='Logo do projeto' src='../../src/assets/images/logo.png' className='logo' />
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

export default Header;