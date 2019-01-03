import React from 'react';
import '../css/styles.css';
import Breed from "../containers/breed-container.js"

export default function BreedsList(props) {
  const breeds = Object.keys(props.breeds)
  const list = breeds.map(breed =>
    <Breed key={breed} breed={breed}/>
    )
  return (
    <div>
    <p className='page-header'>
      ALL BREEDS
    </p>
      <div className='flex-wrapper'>
        {list}
      </div>
    </div>
  )

}
