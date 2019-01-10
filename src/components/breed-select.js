import React from 'react';
import '../css/styles.css';
import SubBreed from './sub-breed.js';

export default function BreedSelect ( props ) {
  if( props.breeds[props.breed].length === 0 ){
    return (
      <option value={props.breed}>{props.breed}</option>
    );
  } else {
    const list = props.breeds[props.breed].map( ( breed ) =>
      <SubBreed key={breed} subBreed={breed} breed={props.breed}/>
    );
    return (
      <optgroup label={props.breed}>
        {list}
      </optgroup>
    );
  }
}
