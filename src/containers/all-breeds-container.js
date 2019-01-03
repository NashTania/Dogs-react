import React from 'react';
import { store } from '../reducers/reducer.js';
import { connect } from 'react-redux';
import { setDogsList } from '../actions/actions.js';
import AllBreeds from '../components/all-breeds.js';

const mapStateToProps = (store) => {
  return {
    breedsList: store.breedsList
  }
}

const boundGetDogs = (dispatch) => {
  return {
    setDogsList: () => {
      return dispatch(setDogsList())
    }
  }
}

export default connect(
 mapStateToProps,
 boundGetDogs
)(AllBreeds)
