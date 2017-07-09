'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = injectMediaSources;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getComponentName(Component) {
  return Component.name || Component.displayName || 'Component';
}

function injectMediaSources() {
  return function (Component) {
    var _class, _temp2;

    return _temp2 = _class = function (_React$Component) {
      (0, _inherits3.default)(_class, _React$Component);

      function _class() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.getMediaSource = function (name) {
          return _this.context.mediaSources[name];
        }, _this.getAllMediaSources = function () {
          return _this.context.mediaSources;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }

      _class.prototype.render = function render() {
        return _react2.default.createElement(Component, (0, _extends3.default)({
          getMediaSource: this.getMediaSource,
          getAllMediaSources: this.getAllMediaSources
        }, this.props));
      };

      return _class;
    }(_react2.default.Component), _class.displayName = 'InjectMediaSources(' + getComponentName(Component) + ')', _class.contextTypes = {
      mediaSources: _propTypes2.default.object
    }, _temp2;
  };
}
//# sourceMappingURL=injectMediaSources.js.map
//# sourceMappingURL=injectMediaSources.js.map
