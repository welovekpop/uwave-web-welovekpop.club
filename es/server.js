import _regeneratorRuntime from 'babel-runtime/regenerator';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
import 'isomorphic-fetch';
import { renderToString } from 'react-dom/server';

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

export default (function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(config, sessionKey) {
    var _ref2, Uwave, uw;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return import('./Uwave');

          case 2:
            _ref2 = _context.sent;
            Uwave = _ref2.default;
            uw = new Uwave(config, sessionKey);

            // Configure the Media sources to be used by this üWave client instance.

            _context.t0 = uw;
            _context.next = 8;
            return import('./sources/youtube');

          case 8:
            _context.t1 = _context.sent;

            _context.t0.source.call(_context.t0, 'youtube', _context.t1);

            _context.t2 = uw;
            _context.next = 13;
            return import('./sources/soundcloud');

          case 13:
            _context.t3 = _context.sent;

            _context.t2.source.call(_context.t2, 'soundcloud', _context.t3);

            _context.next = 17;
            return uw.build();

          case 17:
            return _context.abrupt('return', renderToString(uw.getComponent()));

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
})();
//# sourceMappingURL=server.js.map
