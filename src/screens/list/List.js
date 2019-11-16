import React, { Component } from 'react';
import { CarouselProvider, Dot, ButtonNext, ButtonBack, Slide, Slider } from 'pure-react-carousel';
import Header from '../../components/header/Header';

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
    const { data } = this.state;
    const dataPeopleByLetter = {
      current: data[1],
      prev: data[0],
      next: data[2]
    }
    return (
      <div className='screen' id='list-screen'>
        <Header />
        <Alphabet />
        <SwipeList data={dataPeopleByLetter} />
      </div >
    );
  }
}

export default List;