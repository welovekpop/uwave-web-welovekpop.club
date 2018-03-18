'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapProps = require('recompose/mapProps');

var _mapProps2 = _interopRequireDefault(_mapProps);

var _componentFromProp = require('recompose/componentFromProp');

var _componentFromProp2 = _interopRequireDefault(_componentFromProp);

var _Main = require('../Main');

var _Main2 = _interopRequireDefault(_Main);

var _UsersList = require('../../containers/UsersList');

var _UsersList2 = _interopRequireDefault(_UsersList);

var _BansList = require('../../containers/BansList');

var _BansList2 = _interopRequireDefault(_BansList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pages = {
  main: _Main2.default,
  users: _UsersList2.default,
  bans: _BansList2.default
};

var enhance = (0, _mapProps2.default)(function (props) {
  return {
    component: pages[props.page]
  };
});

var CurrentPage = enhance((0, _componentFromProp2.default)('component'));

exports.default = CurrentPage;
//# sourceMappingURL=CurrentPage.js.map
//# sourceMappingURL=CurrentPage.js.map
