'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uwaveWebClient;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _hstream = require('hstream');

var _hstream2 = _interopRequireDefault(_hstream);

var _router = require('router');

var _router2 = _interopRequireDefault(_router);

var _connectGzipStatic = require('connect-gzip-static');

var _connectGzipStatic2 = _interopRequireDefault(_connectGzipStatic);

var _httpGzipMaybe = require('http-gzip-maybe');

var _httpGzipMaybe2 = _interopRequireDefault(_httpGzipMaybe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function uwaveWebClient(uw, options = {}) {
  const {
    basePath = _path2.default.join(__dirname, '../../public'),
    fs = _fs2.default, // Should only be used by the dev server.
    title = 'üWave',
    ...clientOptions
  } = options;

  const clientRouter = (0, _router2.default)();

  return clientRouter.get('/', (req, res) => {
    res.setHeader('content-type', 'text/html');

    const transform = (0, _hstream2.default)({
      title,
      '#u-wave-config': JSON.stringify(clientOptions)
    });

    fs.createReadStream(_path2.default.join(basePath, 'index.html'), 'utf8').pipe(transform).pipe((0, _httpGzipMaybe2.default)(req, res)).pipe(res);
  }).get('/reset/:key', (req, res) => {
    res.setHeader('content-type', 'text/html');

    const transform = (0, _hstream2.default)({
      title,
      '#u-wave-config': JSON.stringify({ apiUrl: clientOptions.apiUrl }),
      '#reset-data': req.params.key
    });

    fs.createReadStream(_path2.default.join(basePath, 'password-reset.html'), 'utf8').pipe(transform).pipe((0, _httpGzipMaybe2.default)(req, res)).pipe(res);
  }).get('/u-wave-web-config.json', (req, res) => {
    res.json(clientOptions);
  }).use((0, _connectGzipStatic2.default)(basePath));
}
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
