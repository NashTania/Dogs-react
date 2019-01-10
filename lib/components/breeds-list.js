"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BreedsList;

var _react = _interopRequireDefault(require("react"));

require("../css/styles.css");

var _breedContainer = _interopRequireDefault(require("../containers/breed-container.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BreedsList(props) {
  var breeds = Object.keys(props.breeds);
  var list = breeds.map(function (breed) {
    return _react.default.createElement(_breedContainer.default, {
      key: breed,
      breed: breed
    });
  });
  return _react.default.createElement("div", null, _react.default.createElement("p", {
    className: "page-header"
  }, "ALL BREEDS"), _react.default.createElement("div", {
    className: "flex-wrapper"
  }, list));
}