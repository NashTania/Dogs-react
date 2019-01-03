import React  from 'react';
import { Link } from "react-router-dom";
import '../css/styles.css';
import AllImgesBreed from './all-images-breed.js';

export default class AllImagesWrapper extends React.Component {


 render() {
  const breed = this.props.match.params.breed;
  return (
    <div>
      <div className='navigation-block'>
        <Link to='/list/all' className='navigation-link'>Back</Link>
      </div>
      <AllImgesBreed breed={this.props.match.params.breed}/>
    </div>
  )
 }
}
