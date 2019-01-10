"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FilterBreeds;

var _react = _interopRequireDefault(require("react"));

require("../css/styles.css");

var _breedSelectContainer = _interopRequireDefault(require("../containers/breed-select-container.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FilterBreeds(props) {
  var breeds = Object.keys(props.breeds);
  var list = breeds.map(function (breed) {
    return _react.default.createElement(_breedSelectContainer.default, {
      key: breed,
      breed: breed,
      breeds: props.breeds
    });
  });
  return _react.default.createElement("div", {
    className: "select-breed-wrapper"
  }, _react.default.createElement("select", {
    name: "select-breed",
    id: "select-breed",
    onChange: props.filterFunc
  }, _react.default.createElement("option", {
    value: ""
  }, "Selected breed"), list));
}