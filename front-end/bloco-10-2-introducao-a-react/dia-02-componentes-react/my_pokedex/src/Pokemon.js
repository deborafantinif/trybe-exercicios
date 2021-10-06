import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, image, averageWeight: { value, measurementUnit } } = this.props.pokemon;
    return <div className='cart'>
      <div className='cart-text'>
        <p>{name}</p>
        <p>{type}</p>
        <p>Average weight: {value} {measurementUnit}</p>
      </div>
        <img src={image} alt={name}></img>
    </div>
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }),
};

export default Pokemon;