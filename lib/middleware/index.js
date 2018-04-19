"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uwaveWebClient;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _hstream = _interopRequireDefault(require("hstream"));

var _router = _interopRequireDefault(require("router"));

var _connectGzipStatic = _interopRequireDefault(require("connect-gzip-static"));

var _httpGzipMaybe = _interopRequireDefault(require("http-gzip-maybe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function uwaveWebClient(uw, options = {}) {
  const {
    basePath = _path.default.join(__dirname, '../../public'),
    fs = _fs.default,
    // Should only be used by the dev server.
    title = 'üWave',
    ...clientOptions
  } = options;
  const clientRouter = (0, _router.default)();
  return clientRouter.get('/', (req, res) => {
    res.setHeader('content-type', 'text/html');
    const transform = (0, _hstream.default)({
      title,
      '#u-wave-config': JSON.stringify(clientOptions)
    });
    fs.createReadStream(_path.default.join(basePath, 'index.html'), 'utf8').pipe(transform).pipe((0, _httpGzipMaybe.default)(req, res)).pipe(res);
  }).get('/reset/:key', (req, res) => {
    res.setHeader('content-type', 'text/html');
    const transform = (0, _hstream.default)({
      title,
      '#u-wave-config': JSON.stringify({
        apiUrl: clientOptions.apiUrl
      }),
      '#reset-data': req.params.key
    });
    fs.createReadStream(_path.default.join(basePath, 'password-reset.html'), 'utf8').pipe(transform).pipe((0, _httpGzipMaybe.default)(req, res)).pipe(res);
  }).get('/u-wave-web-config.json', (req, res) => {
    res.json(clientOptions);
  }).use((0, _connectGzipStatic.default)(basePath));
} //# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
