import React, { Component } from 'react';
import { copyObject, getNextLetter } from '../../utils';
import { updateLetter } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './Alphabet.scss';
import '../../styles/styles.scss';

class Alphabet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        { order: -1, id: 1, text: "" },
        { order: 0, id: 2, text: "D" },
        { order: 1, id: 3, text: "E" },
        { order: 2, id: 4, text: "G" },
        { order: 3, id: 5, text: "J" },
        { order: 4, id: 6, text: "L" }
      ],
      slideCount: 3,
      sliding: false,
      direction: 0,
      visibleCenterLetter: 'D',
      initPlaying: false
    };
  }

  handleNext = () => {
    let slidesCopy = {};
    if (!this.state.initPlaying) {
      slidesCopy = copyObject(this.state.slides);
      slidesCopy[0].text = 'P';
    }
    this.setState((prevState) => {
      return {
        sliding: true,
        direction: 1,
        visibleCenterLetter: getNextLetter(prevState.visibleCenterLetter, 1),
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
    this.setState((prevState) => {
      return {
        sliding: true,
        direction: -1,
        visibleCenterLetter: getNextLetter(prevState.visibleCenterLetter, -1),
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

  componentDidUpdate(prevProps) {
    const { letterCenter: letter, direction: lastDirection } = this.props;
    if (prevProps.letterCenter !== letter) {
      console.log('trocou');
      if (lastDirection === 1) {
        this.handleNext();
      } else if (lastDirection === -1) {
        this.handlePrev();
      }
    }
  };

  render() {
    const { slides, initPlaying, sliding, direction } = this.state;
    const { letterCenter: letter, updateLetter } = this.props;

    const slideActionStyle = sliding
      ? (direction > 0
        && {
          transform: "translateX(-130px)",
          transition: "transform 500ms ease-in"
        })
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
              return <div key={idx} className="item">{text}</div>;
            })}
          </div>
          {(initPlaying && <div className="left-btn btn" onClick={() => updateLetter(getNextLetter(letter, -1), -1)}>
          </div>) || ''}
          <div className="right-btn btn" onClick={() => updateLetter(getNextLetter(letter, 1), 1)}>
          </div>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateLetter }, dispatch);

const mapStateToProps = store => ({
  letterCenter: store.letterState.currentLetter,
  direction: store.letterState.direction,
});

export default connect(mapStateToProps, mapDispatchToProps)(Alphabet);