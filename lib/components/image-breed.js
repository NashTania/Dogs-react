"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ImageBreed;

var _react = _interopRequireDefault(require("react"));

require("../css/styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ImageBreed(props) {
  return _react.default.createElement("div", {
    className: "breed-img-wrapper"
  }, _react.default.createElement("img", {
    className: "breed-img",
    src: props.image
  }));
}