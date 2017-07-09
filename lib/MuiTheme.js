'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('material-ui/styles/colors');

var Colors = _interopRequireWildcard(_colors);

var _colorManipulator = require('material-ui/utils/colorManipulator');

var ColorManipulator = _interopRequireWildcard(_colorManipulator);

var _spacing = require('material-ui/styles/spacing');

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  userAgent: typeof navigator === 'undefined' ? 'all' : navigator.userAgent,
  spacing: _spacing2.default,
  fontFamily: 'Open Sans, sans-serif',
  rankColors: {
    admin: '#ff3b74',
    manager: '#05daa5',
    moderator: '#00b3dc',
    special: '#fc911d',
    default: ''
  },
  palette: {
    primary1Color: '#9d2053',
    primary2Color: '#b20062',
    primary3Color: Colors.lightWhite,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.white,
    alternateTextColor: '#777777',
    canvasColor: '#303030',
    borderColor: ColorManipulator.fade(Colors.fullWhite, 0.3),
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),

    notifications: {
      errorBackgroundColor: '#9d202f',
      errorTextColor: Colors.white
    }
  }
};
//# sourceMappingURL=MuiTheme.js.map
//# sourceMappingURL=MuiTheme.js.map
