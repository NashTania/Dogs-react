"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../css/styles.css");

var _reactRouterDom = require("react-router-dom");

var _reactRouter = require("react-router");

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

var Breed =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Breed, _React$Component);

  function Breed(props) {
    var _this;

    _classCallCheck(this, Breed);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Breed).call(this, props));
    _this.state = {
      img: null
    };
    _this.url = 'https://dog.ceo/api/breed/' + _this.props.breed + '/images/random';
    return _this;
  }

  _createClass(Breed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var breed = this.props.breed;

      if (this.props.randomImg === null) {
        fetch(this.url).then(function (res) {
          return res.json();
        }).then(function (data) {
          _this2.setState({
            img: data.message
          });

          _this2.props.setRandomImg(_this2.props.breed, data.message);
        });
      } else {
        this.setState({
          img: this.props.randomImg[breed]
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var breed = this.props.breed;
      return _react.default.createElement("div", {
        className: "breed-block"
      }, _react.default.createElement("div", {
        className: "breed-block-img-wrapper"
      }, _react.default.createElement(_reactRouterDom.Link, {
        to: "/list/".concat(breed)
      }, _react.default.createElement("img", {
        className: "breed-block-img",
        src: this.state.img
      }))), _react.default.createElement("p", {
        className: "breed-block-p"
      }, this.props.breed.toUpperCase()));
    }
  }]);

  return Breed;
}(_react.default.Component);

exports.default = Breed;