import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/styles.scss';
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <div className='screen' id='detail-screen'>
        <div className='content'>
          <div className='btn-back'></div>
          <div className='info'>
            <div className='avatar'>
              <img alt='Foto do profissional' src='/images/people/d01.jpg' />
            </div>
            <p className='title'>
              Eduardo Viana
            </p>
            <p>
              UX Designer
            </p>
          </div>

          <div className='card-company'>
            <div className='info-superior'>
              <div className='logo'>
                <img alt='logo da empresa' src='/images/logo.png' />
              </div>
              <div className='phones'>
                <p> 31 | 9.9147-8701 </p>
                <p> 31 | 9.9147-2020 </p>
              </div>
            </div>
            <div className='info-inferior'>
              <p> eduardo.viana@mundiale.com.br</p>
              <div className='line'></div>
            </div>
          </div>

          <div className='card-qrcode'>
            <img alt='qrcode' src='/images/qrcode.png' />
          </div>
        </div>
      </div>
    );
  }
}

Detail.propTypes = {
  t: PropTypes.func.isRequired,
  classes: PropTypes.object
};

export default Detail;