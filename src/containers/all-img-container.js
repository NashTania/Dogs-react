import { connect } from 'react-redux';
import { setBreedImages } from '../actions/actions.js';
import AllImgesBreed from '../components/all-images-breed.js';

const mapStateToProps = ( store ) => {
  return {
    breedImages: store.breedImages
  };
};

const boundGetImages = ( dispatch ) => {
  return {
    setBreedImages: ( breed ) => {
      return dispatch( setBreedImages( breed ) );
    }
  };
};

export default connect(
  mapStateToProps,
  boundGetImages
)( AllImgesBreed );
