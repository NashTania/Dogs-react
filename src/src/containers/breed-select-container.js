import React from 'react';
import { store } from '../reducers/reducer.js';
import { connect } from 'react-redux';
import { setBreedImages } from '../actions/actions.js';
import BreedSelect from '../components/breed-select.js';

const mapStateToProps = (store) => {
  return {
    breedImages: store.breedImages
  }
}

const boundGetImages = (dispatch) => {
  return {
    setBreedImages: (breed) => {
      return dispatch(setBreedImages(breed))
    }
  }
}

export default connect(
 mapStateToProps,
 boundGetImages
)(BreedSelect)
