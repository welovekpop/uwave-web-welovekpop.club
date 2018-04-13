"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = injectMediaSources;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getComponentName(Component) {
  return Component.name || Component.displayName || 'Component';
}

function injectMediaSources() {
  return function (Component) {
    var _class, _temp2;

    return _temp2 = _class =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inheritsLoose2.default)(_class, _React$Component);

      function _class() {
        var _temp, _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.getMediaSource = function (name) {
          return _this.context.mediaSources[name];
        }, _this.getAllMediaSources = function () {
          return _this.context.mediaSources;
        }, _temp) || (0, _assertThisInitialized2.default)(_this);
      }

      var _proto = _class.prototype;

      _proto.render = function render() {
        return _react.default.createElement(Component, (0, _extends2.default)({
          getMediaSource: this.getMediaSource,
          getAllMediaSources: this.getAllMediaSources
        }, this.props));
      };

      return _class;
    }(_react.default.Component), _class.displayName = "InjectMediaSources(" + getComponentName(Component) + ")", _class.contextTypes = {
      mediaSources: _propTypes.default.object
    }, _temp2;
  };
} //# sourceMappingURL=injectMediaSources.js.map
//# sourceMappingURL=injectMediaSources.js.map
