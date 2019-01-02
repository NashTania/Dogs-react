import React  from 'react';
import '../css/styles.css';
import BreedSelect from '../containers/breed-select-container.js';
import PropTypes from 'prop-types';

export default function FilterBreeds ( props ) {
  const breeds = Object.keys( props.breeds );
  const list = breeds.map( breed =>
    <BreedSelect key={breed} breed={breed} breeds={props.breeds}/>
  );
  return (
    <div className='select-breed-wrapper'>
      <select name="select-breed" id="select-breed" onChange={props.filterFunc}>
        <option value="">Selected breed</option>
        {list}
      </select>
    </div>
  );
}

FilterBreeds.propTypes = {
  'breeds': PropTypes.object,
  'filterFunc': PropTypes.func
};
