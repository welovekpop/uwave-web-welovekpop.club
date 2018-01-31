'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

require('isomorphic-fetch');

var _server = require('react-dom/server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Mock an asset like Webpack's file-loader.
function mockAsset(modulePath) {
  var path = require.resolve(modulePath);
  require.cache[path] = {
    exports: path
  };
}

mockAsset('../assets/audio/mention.mp3');
mockAsset('../assets/img/soundcloud.png');
mockAsset('../assets/img/soundcloud-inline.png');
mockAsset('../assets/img/youtube.png');

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(config, sessionKey) {
    var _ref2, Uwave, uw;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.resolve().then(() => require('./Uwave'));

          case 2:
            _ref2 = _context.sent;
            Uwave = _ref2.default;
            uw = new Uwave(config, sessionKey);

            // Configure the Media sources to be used by this üWave client instance.

            _context.t0 = uw;
            _context.next = 8;
            return Promise.resolve().then(() => require('./sources/youtube'));

          case 8:
            _context.t1 = _context.sent;

            _context.t0.source.call(_context.t0, 'youtube', _context.t1);

            _context.t2 = uw;
            _context.next = 13;
            return Promise.resolve().then(() => require('./sources/soundcloud'));

          case 13:
            _context.t3 = _context.sent;

            _context.t2.source.call(_context.t2, 'soundcloud', _context.t3);

            _context.next = 17;
            return uw.build();

          case 17:
            return _context.abrupt('return', (0, _server.renderToString)(uw.getComponent()));

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function serverRender(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return serverRender;
}();
//# sourceMappingURL=server.js.map
//# sourceMappingURL=server.js.map
