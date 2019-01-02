import React from 'react';
import '../css/styles.css';
import PropTypes from 'prop-types';

export default function SubBreed ( props ) {
  return (
    <option value={props.breed+ '-' +props.subBreed} >{props.subBreed}</option>
  );
}

SubBreed.propTypes = {
  'breed': PropTypes.string,
  'subBreed': PropTypes.string
};
