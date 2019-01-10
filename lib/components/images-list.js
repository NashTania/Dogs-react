"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ImagesList;

var _react = _interopRequireDefault(require("react"));

require("../css/styles.css");

var _imageBreed = _interopRequireDefault(require("./image-breed.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ImagesList(props) {
  var list = props.images.map(function (img) {
    return _react.default.createElement(_imageBreed.default, {
      key: img.split('_')[1],
      image: img
    });
  });
  return _react.default.createElement("div", {
    className: "flex-wrapper"
  }, list);
}