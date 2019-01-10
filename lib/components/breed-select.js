"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BreedSelect;

var _react = _interopRequireDefault(require("react"));

require("../css/styles.css");

var _subBreed = _interopRequireDefault(require("./sub-breed.js"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BreedSelect(props) {
  if (props.breeds[props.breed].length === 0) {
    return _react.default.createElement("option", {
      value: props.breed
    }, props.breed);
  } else {
    var list = props.breeds[props.breed].map(function (breed) {
      return _react.default.createElement(_subBreed.default, {
        key: breed,
        subBreed: breed,
        breed: props.breed
      });
    });
    return _react.default.createElement("optgroup", {
      label: props.breed
    }, list);
  }
}