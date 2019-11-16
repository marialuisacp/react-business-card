import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { copyObject } from '../../utils';

import './Alphabet.scss';
import '../../styles/styles.scss';

class Alphabet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [

        { order: 0, id: 1, text: "" },
        { order: 1, id: 2, text: "D" },
        { order: 2, id: 3, text: "E" },
        { order: 3, id: 4, text: "G" },
        { order: 4, id: 5, text: "J" },
        { order: 5, id: 6, text: "L" },
        { order: -1, id: 1, text: "P" },
      ],
      slideCount: 3,
      sliding: false,
      direction: 0,
      currentLetter: 2,
      initPlaying: false
    };
  }

  updateCurrentStep = (current, value) =>
    Math.abs((current + value) % 3);

  handleChangeStep = (id) => {
    const { currentLetter } = this.state;
    // console.log(this.state.currentLetter);
    if (id < currentLetter) {
      this.handlePrev()
    } else if (id > 2) {
      this.handleNext()
    }
  };

  handleNext = () => {
    console.log(this.state.currentLetter);
    let slidesCopy = {};
    if (!this.state.initPlaying) {
      slidesCopy = copyObject(this.state.slides);
      slidesCopy = slidesCopy.filter((slide) => slide.text !== '')
    }

    this.setState((prevState) => {
      return {
        sliding: true,
        direction: 1,
        currentLetter: this.updateCurrentStep(prevState.currentLetter, 1),
        initPlaying: true,
        slides: Object.keys(slidesCopy).length ? slidesCopy : prevState.slides
      }
    },
      () => {
        setTimeout(() => {
          this.setState((prevState) => {
            let oldSlides = [...prevState.slides];
            let hiddenSlide = oldSlides.shift();
            let newHiddenSlide = {
              ...hiddenSlide,
              order: oldSlides[oldSlides.length - 1].order + 1
            };
            oldSlides.push(newHiddenSlide);
            const slides = oldSlides.map(s => {
              return { ...s, order: s.order - 1 };
            });
            return { slides, sliding: false };
          });
        }, 500);
      });
  };

  handlePrev = () => {
    console.log(this.state.currentLetter);
    this.setState((prevState) => {
      return {
        sliding: true,
        direction: -1,
        currentLetter: this.updateCurrentStep(prevState.currentLetter, -1)
      }
    }, () => {
      setTimeout(() => {
        this.setState((prevState) => {
          let slides = [...prevState.slides];
          let lastSlide = slides.pop();
          lastSlide = { ...lastSlide, order: -1 };
          slides = slides.map(s => {
            return { ...s, order: s.order + 1 };
          });
          slides.unshift(lastSlide);
          return { slides, sliding: false };
        });
      }, 500);
    });
  };

  render() {
    const { slides, currentLetter, initPlaying, sliding, direction } = this.state;
    const { letterCenter: letter } = this.props;

    const slideActionStyle = sliding
      ? direction > 0
      && {
        transform: "translateX(-130px)",
        transition: "transform 500ms ease-in"
      }
      ||
      {
        transform: "translateX(130px)",
        transition: "transform 500ms ease-in"
      }
      : {};

    return (
      <div id="alphabet" className='content'>
        <div className='list-letters'>
          <div
            className="item-carousel"
            style={slideActionStyle}
          >
            {slides && slides.length && slides.map(({ order, id, text }, idx) => {
              return <div key={order} className="item">{text}</div>;
            })}
          </div>
          {initPlaying && <div className="left-btn btn" onClick={this.handlePrev}>
          </div> || ''}
          <div className="right-btn btn" onClick={this.handleNext}>
          </div>
        </div>
      </div>
    );
  }
};

Alphabet.propTypes = {
  letterCenter: PropTypes.string
};

export default Alphabet;