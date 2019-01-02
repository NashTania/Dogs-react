import React from 'react';
import '../css/styles.css';
import ImagesList from './images-list.js';
import PropTypes from 'prop-types';

export default class AllImgesBreed extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      images: []
    };
  }

  loadImages() {
    const breed = this.props.match.params.breed;
    if( this.props.breedImages === null || this.props.breedImages[breed] === undefined ) {
      this.props.setBreedImages( breed ).then( () => {
        this.setState({
          images: this.props.breedImages[breed]
        });
      });
    } else {
      this.setState({
        images: this.props.breedImages[breed]
      });
    }
  }

  componentDidMount() {
    this.loadImages();
  }

  componentDidUpdate( props ) {
    if ( props.match.params.breed !== this.props.match.params.breed ) {
      this.loadImages();
    }
  }

  render() {
    return(
      <div>
        <p className='page-header'>
          {this.props.match.params.breed}
        </p>
        <ImagesList images={this.state.images} />
      </div>
    );
  }
}

AllImgesBreed.propTypes = {
  'match': PropTypes.object,
  'breedImages': PropTypes.object,
  'setBreedImages': PropTypes.func,
  'breed': PropTypes.string,
  'params': PropTypes.object
};
