'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uwaveWebClient;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _path = require('path');

var path = _interopRequireWildcard(_path);

var _fs = require('fs');

var defaultFs = _interopRequireWildcard(_fs);

var _trumpet = require('trumpet');

var _trumpet2 = _interopRequireDefault(_trumpet);

var _router = require('router');

var _router2 = _interopRequireDefault(_router);

var _connectGzipStatic = require('connect-gzip-static');

var _connectGzipStatic2 = _interopRequireDefault(_connectGzipStatic);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function injectConfig(transform, config) {
  transform.select('#u-wave-config').createWriteStream().end(JSON.stringify(config));
}

function injectTitle(transform, title) {
  transform.select('title').createWriteStream().end(title);
}

function injectResetKey(transform, key) {
  transform.select('#reset-data').createWriteStream().end(key);
}

function uwaveWebClient(uw) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _options$basePath = options.basePath,
      basePath = _options$basePath === undefined ? path.join(__dirname, '../public') : _options$basePath,
      _options$fs = options.fs,
      fs = _options$fs === undefined ? defaultFs : _options$fs,
      _options$title = options.title,
      title = _options$title === undefined ? 'üWave' : _options$title,
      clientOptions = (0, _objectWithoutProperties3.default)(options, ['basePath', 'fs', 'title']);

  var clientRouter = (0, _router2.default)();

  var mobile = function mobile(req, res) {
    var transform = (0, _trumpet2.default)();
    injectTitle(transform, title);
    injectConfig(transform, clientOptions);

    fs.createReadStream(path.join(basePath, 'm.html'), 'utf8').pipe(transform).pipe(res);
  };

  return clientRouter.get('/', function (req, res) {
    var transform = (0, _trumpet2.default)();
    injectTitle(transform, title);
    injectConfig(transform, clientOptions);

    fs.createReadStream(path.join(basePath, 'index.html'), 'utf8').pipe(transform).pipe(res);
  }).get('/reset/:key', function (req, res) {
    var transform = (0, _trumpet2.default)();
    injectTitle(transform, title);
    injectConfig(transform, { apiUrl: clientOptions.apiUrl });
    injectResetKey(transform, req.params.key);

    fs.createReadStream(path.join(basePath, 'password-reset.html'), 'utf8').pipe(transform).pipe(res);
  }).get('/m', mobile).get('/m.html', mobile).get('/u-wave-web-config.json', function (req, res) {
    res.json(clientOptions);
  }).use((0, _connectGzipStatic2.default)(basePath));
}
//# sourceMappingURL=middleware.js.map
//# sourceMappingURL=middleware.js.map
