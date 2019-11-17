import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import '../../styles/styles.scss';
import './Detail.scss';

class Detail extends Component {
  goToBack = () => {
    this.props.history.push('/');
  }

  render() {
    const person = (this.props.location.state && this.props.location.state.data)
      ? this.props.location.state.data
      : {
        name: '',
        email: '',
        office: '',
        imaeg: ''
      };

    if (person && !person.name) {
      this.goToBack();
    }

    return (
      <div className='screen' id='detail-screen'>
        <div className='content'>
          <div className='btn-back' onClick={this.goToBack}></div>
          <div className='info'>
            <div className='avatar'>
              <img alt='Foto do profissional' src={person.image} />
            </div>
            <p className='title'>
              {person.name}
            </p>
            <p>
              {person.office}
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
              <p> {person.email} </p>
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

export default withRouter(Detail);