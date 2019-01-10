"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDogsList = setDogsList;
exports.setRandomImg = setRandomImg;
exports.setBreedImages = setBreedImages;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _constants = require("../constants/constants.js");

var _reducer = require("../reducers/reducer.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setDogsList() {
  return function (dispatch) {
    return fetch('https://dog.ceo/api/breeds/list/all').then(function (res) {
      return res.json();
    }).then(function (data) {
      dispatch({
        type: _constants.SET_DOGS_LIST,
        obj: data.message
      });
    });
  };
}

function setRandomImg(key, value) {
  return {
    type: _constants.SET_RANDOM_IMG,
    key: key,
    value: value
  };
}

function setBreedImages(breed) {
  return function (dispatch) {
    return fetch('https://dog.ceo/api/breed/' + breed + '/images').then(function (res) {
      return res.json();
    }).then(function (data) {
      dispatch({
        type: _constants.SET_BREED_IMAGES,
        breed: breed,
        arr: data.message
      });
    });
  };
}