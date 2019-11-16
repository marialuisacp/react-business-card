import React, { Component } from 'react';
import { CarouselProvider, Dot, ButtonNext, ButtonBack, Slide, Slider } from 'pure-react-carousel';
import Header from '../../components/header/Header';

import './List.scss';
import '../../styles/styles.scss';
import '../../styles/lib/react-carousel.es.css';

class List extends Component {
  render() {
    return (
      <div className='screen' id='list-screen'>
        <Header />
        <div className='content list'>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={150}
            totalSlides={3}
            visibleSlides={1}
            touchEnabled={true}
            dragEnabled={true}
            infinite='true'
          >
            <Slider>
              <Slide className='slide' index={0}>
                <div className='slide-item-page s1'>
                  <div className='alphabet'>
                    <div className='list-letters'>
                      <Dot className='letter' slide={0}>
                        <span></span>
                      </Dot>
                      <Dot className='letter' slide={0}>
                        <span>D</span>
                      </Dot>
                      <ButtonNext className='letter'>
                        <span>E</span>
                      </ButtonNext>
                    </div>
                  </div>
                  <p>
                    Teste 1
                  </p>
                </div>
              </Slide>
              <Slide index={1}>
                <div className='slide-item-page s2'>
                  <div className='alphabet'>
                    <div className='list-letters'>
                      <ButtonBack className='letter'>
                        <span>D</span>
                      </ButtonBack>
                      <Dot className='letter' slide={1}>
                        <span>E</span>
                      </Dot>
                      <ButtonNext className='letter'>
                        <span>G</span>
                      </ButtonNext>
                    </div>
                  </div>
                  <p>
                    Teste 2
                  </p>
                </div>
              </Slide>
              <Slide index={2}>
                <div className='slide-item-page s3'>
                  <div className='alphabet'>
                    <div className='list-letters'>
                      <ButtonBack className='letter'>
                        <span>G</span>
                      </ButtonBack>
                      <Dot className='letter' slide={1}>
                        <span>J</span>
                      </Dot>
                      <ButtonNext className='letter'>
                        <span>L</span>
                      </ButtonNext>
                    </div>
                  </div>
                  <p>
                    Teste 3
                  </p>
                </div>
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    );
  }
}

export default List;