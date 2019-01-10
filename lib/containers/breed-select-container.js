"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reducer = require("../reducers/reducer.js");

var _reactRedux = require("react-redux");

var _actions = require("../actions/actions.js");

var _breedSelect = _interopRequireDefault(require("../components/breed-select.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    breedImages: store.breedImages
  };
};

var boundGetImages = function boundGetImages(dispatch) {
  return {
    setBreedImages: function setBreedImages(breed) {
      return dispatch((0, _actions.setBreedImages)(breed));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, boundGetImages)(_breedSelect.default);

exports.default = _default;