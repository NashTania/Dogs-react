"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _filterBreeds = _interopRequireDefault(require("./filter-breeds.js"));

require("../css/styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AllBreeds =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AllBreeds, _React$Component);

  function AllBreeds(props) {
    var _this;

    _classCallCheck(this, AllBreeds);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AllBreeds).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filterFunc", function (event) {
      _this.props.history.push("/all/".concat(event.target.value));
    });

    _this.state = {
      breeds: {}
    };
    return _this;
  }

  _createClass(AllBreeds, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.breedsList === null) {
        this.props.setDogsList().then(function () {
          _this2.setState({
            breeds: _this2.props.breedsList
          });
        });
      } else {
        this.setState({
          breeds: this.props.breedsList
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "navigation-block"
      }, _react.default.createElement(_reactRouterDom.Link, {
        to: "/list",
        className: "navigation-link"
      }, "All breeds")), _react.default.createElement(_filterBreeds.default, {
        breeds: this.state.breeds,
        filterFunc: this.filterFunc
      }));
    }
  }]);

  return AllBreeds;
}(_react.default.Component);

exports.default = AllBreeds;