import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import PropTypes from 'prop-types';
import { updateLetter } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PeopleList from '../PeopleList/PeopleList';

import './SwipeList.scss';
import '../../assets/styles/styles.scss';

class SwipeList extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    this.reactSwipe.next();
  }

  prev() {
    this.reactSwipe.prev();
  }

  componentDidUpdate(prevProps) {
    const { action, letterCenter } = this.props;

    if (letterCenter !== prevProps.letterCenter) {
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
            swipeOptions={{
              continuous: true,
              speed: 700,
              disableScroll: true
            }}
            ref={el => (this.reactSwipe = el)}
          >
            {data && data.length &&
              data.map((list, k) => (
                <div key={k}>
                  <PeopleList data={list.people} />
                </div>
              ))}
          </ReactSwipe>
        </div>
      </div >
    );
  }
}

SwipeList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  action: PropTypes.string,
  letterCenter: PropTypes.string
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateLetter }, dispatch);

export default connect(mapDispatchToProps)(SwipeList);