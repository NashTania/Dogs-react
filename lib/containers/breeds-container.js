"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reducer = require("../reducers/reducer.js");

var _reactRedux = require("react-redux");

var _actions = require("../actions/actions.js");

var _breeds = _interopRequireDefault(require("../components/breeds.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    breedsList: store.breedsList
  };
};

var boundGetDogs = function boundGetDogs(dispatch) {
  return {
    setDogsList: function setDogsList() {
      return dispatch((0, _actions.setDogsList)());
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, boundGetDogs)(_breeds.default);

exports.default = _default;