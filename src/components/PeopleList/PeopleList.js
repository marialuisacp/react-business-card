import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardPerson from '../PersonCard/PersonCard';
import { withRouter } from "react-router-dom";

import './PeopleList.scss';
import '../../assets/styles/styles.scss';

class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.goToDetails = this.goToDetails.bind(this);
  }

  goToDetails = (data) => {
    this.props.history.push({
      pathname: '/detail',
      state: { data: data }
    });
  }

  render() {
    const { data } = this.props;
    const outlineCards = [];

    const outlineCardsLength = 5 - (data.length);
    for (let i = 0; i < outlineCardsLength; i++) {
      outlineCards.push({});
    };
    return (
      <div className='list-professionals' id='list-people-component'>
        {(data && data.length
          && data.map((person, k) => (<div onClick={() => this.goToDetails(person)} key={k}><CardPerson person={person} /></div>))) || ''}
        {(outlineCards && outlineCards.length
          && outlineCards.map((person, k) => (<CardPerson key={k} person={person} />))) || ''}
      </div >
    );
  }
}

PeopleList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default withRouter(PeopleList);