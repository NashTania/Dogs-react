"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reducer = require("../reducers/reducer.js");

var _reactRedux = require("react-redux");

var _actions = require("../actions/actions.js");

var _breed = _interopRequireDefault(require("../components/breed.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    randomImg: store.randomImg
  };
};

var boundGetDods = function boundGetDods(dispatch) {
  return {
    setRandomImg: function setRandomImg(key, value) {
      return dispatch((0, _actions.setRandomImg)(key, value));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, boundGetDods)(_breed.default);

exports.default = _default;