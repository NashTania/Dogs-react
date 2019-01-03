import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { SET_DOGS_LIST, SET_RANDOM_IMG, SET_BREED_IMAGES } from '../constants/constants.js';
import { store } from '../reducers/reducer.js'

export function setDogsList() {
  return (dispatch) => {
    return fetch('https://dog.ceo/api/breeds/list/all').then(res => res.json()).then(
      data => {
        dispatch({
          type: SET_DOGS_LIST,
          obj: data.message
        })
      }
    )
  }
}

export function setRandomImg (key, value) {
  return {
    type: SET_RANDOM_IMG,
    key: key,
    value: value
  }
}

export function setBreedImages (breed) {
  return (dispatch) => {
    return fetch('https://dog.ceo/api/breed/'+breed+'/images').then(res => res.json()).then(
      data => {
        dispatch({
          type: SET_BREED_IMAGES,
          breed: breed,
          arr: data.message
        })
      }
    )
  }
}
