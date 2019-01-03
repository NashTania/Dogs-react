import React from 'react';
import '../css/styles.css';

export default function ImageBreed (props) {
  return (
    <div className='breed-img-wrapper'>
      <img className='breed-img' src={props.image}></img>
    </div>
  )
}
