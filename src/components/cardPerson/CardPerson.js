import React from 'react';
import PropTypes from 'prop-types';

import './CardPerson.scss';
import '../../styles/styles.scss';

const CardPerson = ({ person }) => {
  return (
    <div className='card-person card-info'>
      <div className='circle'></div>
      {person && person.name ?
        <div className='card'>
          <div className='avatar' style={{ 'background-image': 'url(' + person.image + ')' }}></div>
          <div className='info'>
            <p className='title'>{person.name}</p>
            <p>{person.office}</p>
          </div>
          <div className='add'>
            <p>+</p>
          </div>
        </div>
        : <div className='card outline'></div>}
    </div >
  );
}

CardPerson.propTypes = {
  person: PropTypes.arrayOf(PropTypes.object)
};

export default CardPerson;