"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _app = _interopRequireDefault(require("./components/app.js"));

var _allBreedsContainer = _interopRequireDefault(require("./containers/all-breeds-container.js"));

var _breedsContainer = _interopRequireDefault(require("./containers/breeds-container.js"));

var _reactRedux = require("react-redux");

var _reducer = require("./reducers/reducer.js");

var _allImgContainer = _interopRequireDefault(require("./containers/all-img-container.js"));

var _allImagesWrapper = _interopRequireDefault(require("./components/all-images-wrapper.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render(_react.default.createElement(_reactRedux.Provider, {
  store: _reducer.store
}, _react.default.createElement(_app.default, null), _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement("div", null, _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/",
  component: _allBreedsContainer.default
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/all/:breed",
  component: _allBreedsContainer.default
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/all/:breed",
  component: _allImgContainer.default
}), _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/list",
  component: _breedsContainer.default
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/list/:breed",
  component: _allImgContainer.default
})))), document.getElementById('root'));