'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Motd = require('../../containers/Motd');

var _Motd2 = _interopRequireDefault(_Motd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, 'Note that the admin interface is not yet done and most things do not work. You can, however, configure the message of the day! :P'), (0, _jsx3.default)(_Motd2.default, {}));

var Main = function Main() {
  return _ref;
};

Main.propTypes = process.env.NODE_ENV !== "production" ? {} : {};

exports.default = Main;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
