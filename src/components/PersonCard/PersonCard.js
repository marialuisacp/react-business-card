import React from 'react';
import PropTypes from 'prop-types';

import './PersonCard.scss';
import '../../assets/styles/styles.scss';

const PersonCard = ({ person }) => {
  return (
    <div className='card-person card-info'>
      <div className='circle'></div>
      {person && person.name ?
        <div className='card'>
          <div className='avatar' style={{ backgroundImage: 'url(' + person.image + ')' }}></div>
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

PersonCard.propTypes = {
  person: PropTypes.object
};

export default PersonCard;