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

  render() {
    let reactSwipeEl;
    const { data } = this.props;
    return (
      <div className='component' id='swipe-list-component'>
        <div>
          <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: true }}
            ref={el => (reactSwipeEl = el)}
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
          <button onClick={() => reactSwipeEl.next()}>Next</button>
          <button onClick={() => reactSwipeEl.prev()}>Previous</button>
        </div>
      </div >
    );
  }
}

SwipeList.propTypes = {
  data: PropTypes.object
};

export default SwipeList;