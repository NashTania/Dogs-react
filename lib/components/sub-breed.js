"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SubBreed;

var _react = _interopRequireDefault(require("react"));

require("../css/styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SubBreed(props) {
  return _react.default.createElement("option", {
    value: props.breed + '-' + props.subBreed
  }, props.subBreed);
}