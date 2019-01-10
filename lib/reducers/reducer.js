"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducerDogs = reducerDogs;
exports.store = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _constants = require("../constants/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initalState = {
  breedsList: null,
  breedImages: null,
  randomImg: null
};
var store = (0, _redux.createStore)(reducerDogs, (0, _redux.applyMiddleware)(_reduxThunk.default));
exports.store = store;

function reducerDogs() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.SET_DOGS_LIST:
      return {
        breedsList: action.obj,
        breedImages: state.breedImages,
        randomImg: state.randomImg
      };

    case _constants.SET_RANDOM_IMG:
      return {
        breedsList: state.breedsList,
        breedImages: state.breedImages,
        randomImg: _objectSpread({}, state.randomImg, _defineProperty({}, action.key, action.value))
      };

    case _constants.SET_BREED_IMAGES:
      return {
        breedsList: state.breedsList,
        breedImages: _objectSpread({}, state.breedImages, _defineProperty({}, action.breed, action.arr)),
        randomImg: state.randomImg
      };

    default:
      return state;
  }
}