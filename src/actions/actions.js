import { SET_DOGS_LIST, SET_RANDOM_IMG, SET_BREED_IMAGES } from '../constants/constants.js';

export function setDogsList() {
  return async ( dispatch ) => {
    try {
      const response = await fetch( 'https://dog.ceo/api/breeds/list/all' );
      const data = await response.json();
      dispatch({
        type: SET_DOGS_LIST,
        obj: data.message
      });
    } catch( err ) {
      throw Error( err );
    }
  };
}

export function setRandomImg ( key, value ) {
  return {
    type: SET_RANDOM_IMG,
    key: key,
    value: value
  };
}

export function setBreedImages ( breed ) {
  return async ( dispatch ) => {
    try {
      const response = await fetch( 'https://dog.ceo/api/breed/'+breed+'/images' );
      const data = await response.json();
      dispatch({
        type: SET_BREED_IMAGES,
        breed: breed,
        arr: data.message
      });
    } catch( err ) {
      throw Error( err );
    }
  };
}
