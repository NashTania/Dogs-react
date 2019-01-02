import React from 'react';
import '../css/styles.css';
import Breed from '../containers/breed-container.js';
import PropTypes from 'prop-types';

export default function BreedsList( props ) {
  const breeds = Object.keys( props.breeds );
  const list = breeds.map( breed =>
    <Breed key={breed} breed={breed}/>
  );
  return (
    <div>
      <p className='page-header'>
      ALL BREEDS
      </p>
      <div className='flex-wrapper'>
        {list}
      </div>
    </div>
  );
}

BreedsList.propTypes = {
  'breeds': PropTypes.object,
};
