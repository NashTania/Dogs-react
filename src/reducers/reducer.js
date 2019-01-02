import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { SET_DOGS_LIST, SET_RANDOM_IMG, SET_BREED_IMAGES } from '../constants/constants.js';

const initalState = {
  breedsList: null,
  breedImages: null,
  randomImg: null
};

export const store = createStore( reducerDogs, applyMiddleware( thunk ) );

export function reducerDogs( state = initalState, action ) {
  switch ( action.type ) {
  case SET_DOGS_LIST:
    return {
      breedsList: action.obj,
      breedImages: state.breedImages,
      randomImg: state.randomImg
    };

  case SET_RANDOM_IMG:
    return {
      breedsList: state.breedsList,
      breedImages: state.breedImages,
      randomImg: {
        ...state.randomImg, [action.key]:action.value
      }
    };

  case SET_BREED_IMAGES:
    return {
      breedsList: state.breedsList,
      breedImages: {
        ...state.breedImages, [action.breed]:action.arr
      },
      randomImg: state.randomImg
    };


  default:
    return state;
  }
}
