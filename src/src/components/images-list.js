import React from 'react';
import '../css/styles.css';
import ImageBreed from "./image-breed.js"

export default function ImagesList(props) {
  const list = props.images.map((img) =>
    <ImageBreed key={img.split('_')[1]} image={img}/>
  )

  return (
    <div className='flex-wrapper'>
      {list}
    </div>
  )
}
