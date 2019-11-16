import React, { Component } from 'react';
import { CarouselProvider, Dot, ButtonNext, ButtonBack, Slide, Slider } from 'pure-react-carousel';
import Header from '../../components/header/Header';

import './List.scss';
import '../../styles/styles.scss';
import '../../styles/lib/react-carousel.es.css';
import Alphabet from '../../components/alphabet/Alphabet';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: ['', 'D', 'E', 'G', 'J', 'L', 'P']
    }
    this.test = this.test.bind(this);
    this.onDrag = this.test.bind(this);
  }

  test = () => {
    console.log('vai para o proximo');
  };

  onDrag = (e) => {
    console.log(e);
  }

  render() {
    const { letters } = this.state;
    return (
      <div className='screen' id='list-screen'>
        <Header />
        <Alphabet />
        {/* <div className='content list'>
          <CarouselProvider
            naturalSlideWidth={130}
            naturalSlideHeight={150}
            totalSlides={7}
            visibleSlides={3}
            touchEnabled={true}
            dragEnabled={true}
            infinite='true'
          >
            <Slider onDrag={(event) => this.onDrag(event)}>
        {
          letters && letters.length
          && letters.map((item, key) => (
            <Slide className='slide' key={key} index={key}>
              <Dot className='letter' slide={(key + 1)}>
                <span>{item}</span>
                <span>{key}</span>
              </Dot>
            </Slide>
          ))
        }
            </Slider>
          </CarouselProvider >
        </div > */}
      </div >
    );
  }
}

export default List;