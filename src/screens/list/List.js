import React, { Component } from 'react';
import Header from '../../components/header/Header';

import { updateLetter } from '../../actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './List.scss';
import '../../styles/styles.scss';
import '../../styles/lib/react-carousel.es.css';
import Alphabet from '../../components/alphabet/Alphabet';
import SwipeList from '../../components/swipeList/SwipeList';
import { dataPeople } from '../../utils';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: ['', 'D', 'E', 'G', 'J', 'L', 'P'],
      data: dataPeople
    }
  }

  render() {
    const { currentLetter } = this.props;
    const { data } = this.state;
    const dataPeopleByLetter = {
      current: data[1],
      prev: data[0],
      next: data[2]
    }
    return (
      <div className='screen' id='list-screen'>
        <Header />
        <Alphabet letterCenter={currentLetter} />
        <SwipeList data={dataPeopleByLetter} />
      </div >
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateLetter }, dispatch);

const mapStateToProps = store => ({
  currentLetter: store.letterState.currentLetter
});

export default connect(mapStateToProps, mapDispatchToProps)(List);