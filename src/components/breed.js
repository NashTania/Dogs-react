import React from 'react';
import '../css/styles.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Breed extends React.Component {
  constructor( props ){
    super( props );
    this.state = {
      img: null
    };
    this.url = 'https://dog.ceo/api/breed/'+this.props.breed+'/images/random';
  }
  async componentDidMount() {
    const breed = this.props.breed;
    if( this.props.randomImg === null || this.props.randomImg[breed] === undefined ) {
      const response = await fetch( this.url )
      const data = await response.json();
      await  this.setState({
          img: data.message
        });
      await this.props.setRandomImg( this.props.breed, data.message );
    } else {
      this.setState({
        img: this.props.randomImg[breed]
      });
    }
  }
  render() {
    const breed = this.props.breed;
    return (
      <div className='breed-block'>
        <div className='breed-block-img-wrapper'>
          <Link to={`/list/${breed}`}>
            <img className='breed-block-img' src={this.state.img} ></img>
          </Link>
        </div>
        <p className='breed-block-p'>
          {this.props.breed.toUpperCase()}
        </p>
      </div>
    );
  }
}

Breed.propTypes = {
	  'breed': PropTypes.string,
	  'randomImg': PropTypes.object,
	  'setRandomImg': PropTypes.func
};
