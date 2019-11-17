import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { updateLetter } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './List.scss';
import '../../assets/styles/styles.scss';

import Alphabet from '../../components/Alphabet/Alphabet';
import SwipeList from '../../components/SwipeList/SwipeList';
import { dataPeople } from '../../utils';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: ['D', 'E', 'G', 'J', 'L', 'P'],
      data: dataPeople,
      dataPeopleByLetter: {
        current: dataPeople[1],
        prev: dataPeople[0],
        next: dataPeople[2]
      },
      action: ''
    }
  }

  render() {
    const { currentLetter, direction } = this.props;
    const { data } = this.state;

    return (
      <div className='screen' id='list-screen'>
        <div className='content'>
          <Header />
          <Alphabet letterCenter={currentLetter} />
          <SwipeList
            action={(direction === 1) ? 'next' : 'prev'}
            data={data}
            letterCenter={currentLetter} />
        </div>
      </div >
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateLetter }, dispatch);

const mapStateToProps = store => ({
  currentLetter: store.letterState.currentLetter,
  direction: store.letterState.direction
});

export default connect(mapStateToProps, mapDispatchToProps)(List);