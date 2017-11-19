'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

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

var _Overlay = require('../components/Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _About = require('../components/About');

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutContainer = function (_React$Component) {
  (0, _inherits3.default)(AboutContainer, _React$Component);

  function AboutContainer() {
    (0, _classCallCheck3.default)(this, AboutContainer);

    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  AboutContainer.prototype.getAboutPageComponent = function getAboutPageComponent() {
    var uw = this.context.uwave;
    if (uw) {
      return uw.getAboutPageComponent();
    }
    return function () {
      return null;
    };
  };

  AboutContainer.prototype.render = function render() {
    return (0, _jsx3.default)(_Overlay2.default, {
      direction: 'top'
    }, void 0, _react2.default.createElement(_About2.default, (0, _extends3.default)({}, this.props, {
      render: this.getAboutPageComponent()
    })));
  };

  return AboutContainer;
}(_react2.default.Component);

AboutContainer.contextTypes = {
  uwave: _propTypes2.default.object
};
exports.default = AboutContainer;
//# sourceMappingURL=About.js.map
//# sourceMappingURL=About.js.map
