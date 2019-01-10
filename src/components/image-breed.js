import React from 'react';
import PropTypes from 'prop-types';

export default function ImageBreed ( props ) {
  return (
    <div className='breed-img-wrapper'>
      <img className='breed-img' src={props.image}></img>
    </div>
  );
}

ImageBreed.propTypes = {
	  'image': PropTypes.string
};
