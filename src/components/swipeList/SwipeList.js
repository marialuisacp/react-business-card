import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import PropTypes from 'prop-types';

import ListPeople from '../listPeople/ListPeople';

import './SwipeList.scss';
import '../../styles/styles.scss';

class SwipeList extends Component {
  constructor(props) {
    super(props);
  }
  next() {
    this.reactSwipe.next();
  }

  prev() {
    this.reactSwipe.prev();
  }

  componentDidUpdate(prevProps) {
    const { action, data } = this.props;
    if (data !== prevProps.data) {
      if (action === 'next') {
        this.next();
      } else if (action === 'prev') {
        this.prev();
      }
    }
  }
  render() {
    const { data } = this.props;

    return (
      <div className='component' id='swipe-list-component'>
        <div>
          <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: true, speed: 550 }}
            ref={el => (this.reactSwipe = el)}
          >
            <div>
              <ListPeople data={data.prev.people} />
            </div>
            <div>
              <ListPeople data={data.current.people} />
            </div>
            <div>
              <ListPeople data={data.next.people} />
            </div>
          </ReactSwipe>
          {/* <button onClick={() => reactSwipeEl.next()}>Next</button>
          <button onClick={() => reactSwipeEl.prev()}>Previous</button> */}
        </div>
      </div >
    );
  }
}

SwipeList.propTypes = {
  data: PropTypes.object,
  action: PropTypes.string
};

export default SwipeList;