import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardPerson from '../cardPerson/CardPerson';

import './ListPeople.scss';
import '../../styles/styles.scss';

class ListPeople extends Component {

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
          && data.map((person, k) => (<CardPerson key={k} person={person} />))) || ''}
        {(outlineCards && outlineCards.length
          && outlineCards.map((person, k) => (<CardPerson key={k} person={person} />))) || ''}
      </div >
    );
  }
}

ListPeople.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default ListPeople;