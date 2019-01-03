import React from 'react';
import '../css/styles.css';

export default function SubBreed (props) {
  return (
   <option value={props.breed+ '-' +props.subBreed} >{props.subBreed}</option>
  )
}
