import React, { Component } from 'react';
import Header from '../../components/header/Header';

import { updateLetter } from '../../actions';
import { getNextLetter, getDataByLetter } from '../../utils';

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

  getDataList = () => {
    const { direction, currentLetter } = this.props;
    const { dataPeopleByLetter } = this.state;

    const dataPrev = getDataByLetter(getNextLetter(currentLetter, -1));
    const dataNext = getDataByLetter(getNextLetter(currentLetter, 1));
    const dataCurrent = getDataByLetter(currentLetter);

    const dataLetter = (direction === 1)
      ? {
        current: dataPrev,
        prev: dataPrev,
        next: dataCurrent
      } : {
        current: dataPeopleByLetter.prev,
        prev: dataPeopleByLetter.prev,
        next: dataPeopleByLetter.current
      };

    this.setState({ dataPeopleByLetter: dataLetter, action: direction === 1 ? 'next' : 'prev' });
  };

  componentDidUpdate(prevProps) {
    const { currentLetter } = this.props;
    if (prevProps.currentLetter != currentLetter) {
      this.getDataList()
    }
  };

  render() {
    const { currentLetter } = this.props;
    const { dataPeopleByLetter, action } = this.state;
    console.log(action);
    return (
      <div className='screen' id='list-screen'>
        <Header />
        <Alphabet letterCenter={currentLetter} />
        <SwipeList action={action} data={dataPeopleByLetter} />
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