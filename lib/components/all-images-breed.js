"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

require("../css/styles.css");

var _imagesList = _interopRequireDefault(require("./images-list.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AllImgesBreed =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AllImgesBreed, _React$Component);

  function AllImgesBreed(props) {
    var _this;

    _classCallCheck(this, AllImgesBreed);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AllImgesBreed).call(this, props));
    _this.state = {
      images: []
    };
    return _this;
  }

  _createClass(AllImgesBreed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var breed = this.props.match.params.breed;

      if (this.props.breedImages === null || this.props.breedImages[breed] === undefined) {
        this.props.setBreedImages(breed).then(function () {
          _this2.setState({
            images: _this2.props.breedImages[breed]
          });
        });
      } else {
        this.setState({
          images: this.props.breedImages[breed]
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      var breed = this.props.match.params.breed;
      console.log(this.props.match.params.breed);
      console.log(this.props.match);

      if (prevProps.match.params.breed !== this.props.match.params.breed) {
        if (this.props.breedImages === null || this.props.breedImages[breed] === undefined) {
          this.props.setBreedImages(breed).then(function () {
            _this3.setState({
              images: _this3.props.breedImages[breed]
            });
          });
        } else {
          this.setState({
            images: this.props.breedImages[breed]
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement("p", {
        className: "page-header"
      }, this.props.match.params.breed), _react.default.createElement(_imagesList.default, {
        images: this.state.images
      }));
    }
  }]);

  return AllImgesBreed;
}(_react.default.Component);

exports.default = AllImgesBreed;