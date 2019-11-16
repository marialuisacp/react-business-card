import React, { Component } from 'react';

import './Alphabet.scss';
import '../../styles/styles.scss';

class Alphabet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        { order: -1, text: "D" },
        { order: 0, text: "E" },
        { order: 1, text: "G" },
        { order: 2, text: "J" },
        { order: 3, text: "L" },
        { order: 4, text: "P" }
      ],
      slideCount: 3,
      sliding: false,
      direction: 0
    };
  }

  handleNext = () => {
    this.setState((prevState) => {
      console.log(prevState);
      return {
        sliding: true, direction: 1
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
    // always have a previous slide beforehand
    this.setState({ sliding: true, direction: -1 }, () => {
      setTimeout(() => {
        this.setState((prevState) => {
          let slides = [...prevState.slides];

          // pop off last slide to attach another one
          let lastSlide = slides.pop();
          // set its order to -1
          lastSlide = { ...lastSlide, order: -1 };
          // sync order of slides
          slides = slides.map(s => {
            return { ...s, order: s.order + 1 };
          });
          // add popped slide back on
          slides.unshift(lastSlide);

          return { slides, sliding: false };
        });
      }, 500);
    });
  };

  render() {
    const { slides, slideCount, sliding, direction } = this.state;
    const slideActionStyle = sliding
      ? direction > 0
      && {
        transform: "translateX(-260px)",
        transition: "transform 500ms ease-in"
      }
      ||
      {
        transform: "translateX(0px)",
        transition: "transform 500ms ease-in"
      }
      : {};

    return (
      <div>
        <div className="left-btn" onClick={this.handlePrev}>
          <i className="fa fa-arrow-left fa-3x"></i>
        </div>
        <div
          className="item-carousel"
          style={slideActionStyle}
        >
          {slides.map(({ order, text }, idx) => {
            return <div key={order} className="item">{text}</div>;
          })}
        </div>
        <div className="right-btn" onClick={this.handleNext}>
          <i className="fa fa-arrow-right fa-3x"></i>
        </div>
      </div>
    );
  }
};

export default Alphabet;