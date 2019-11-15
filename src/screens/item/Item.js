import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/styles.scss';
import './Item.scss';

class Item extends Component {
  render() {
    const { t } = this.props;

    return (
      <div id='Item'>
        Testee
      </div>
    );
  }
}

Item.propTypes = {
  t: PropTypes.func.isRequired,
  classes: PropTypes.object
};

export default Item;