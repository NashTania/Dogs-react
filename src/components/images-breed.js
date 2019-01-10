import React from 'react';
import ImagesList from './images-list.js';
import PropTypes from 'prop-types';

export default class AllImgesBreed extends React.Component {
  constructor ( props ) {
    super ( props );
    this.breed = props.match.params.breed;

    if ( !props.breedImages || props.breedImages[this.breed] === undefined  ) {
      this.state = {
        images: []
      };
    } else {
      this.state = {
        images: props.breedImages[this.breed]
      };
    }
  }

  async loadImages() {
    if ( !this.props.breedImages || this.props.breedImages[this.breed] === undefined ) {
      this.props.setBreedImages( this.breed ) .then( () => {
        this.setState ({
          images: this.props.breedImages[this.breed]
        });
      });
    } else {
      this.setState({
        images: this.props.breedImages[this.breed]
      });
    }
  }

  componentWillMount() {
    this.loadImages();
  }

  componentDidUpdate( props ) {
    if ( props.match.params.breed !== this.props.match.params.breed ) {
      this.loadImages();
    }
  }

  render() {
    if ( this.state.images.length !== 0 ) {
      return (
        <div>
          <p className='page-header'>
            {this.props.match.params.breed}
          </p>
          <ImagesList images={this.state.images}/>
        </div>
      );
    } else {
      return (
        <p>
          Loading
        </p>
      );
    }
  }
}

AllImgesBreed.propTypes = {
  'match': PropTypes.object,
  'breedImages': PropTypes.object,
  'setBreedImages': PropTypes.func,
  'breed': PropTypes.string,
  'params': PropTypes.object
};
