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

var _serveStatic = require('serve-static');

var _serveStatic2 = _interopRequireDefault(_serveStatic);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function injectConfig(config) {
  var transform = (0, _trumpet2.default)();
  transform.select('#u-wave-config').createWriteStream().end(JSON.stringify(config));
  return transform;
}

function uwaveWebClient(uw) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _options$basePath = options.basePath,
      basePath = _options$basePath === undefined ? path.join(__dirname, '../public') : _options$basePath,
      _options$fs = options.fs,
      fs = _options$fs === undefined ? defaultFs : _options$fs,
      clientOptions = (0, _objectWithoutProperties3.default)(options, ['basePath', 'fs']);

  var clientRouter = (0, _router2.default)();

  var mobile = function mobile(req, res) {
    fs.createReadStream(path.join(basePath, 'm.html'), 'utf8').pipe(injectConfig(clientOptions)).pipe(res);
  };

  return clientRouter.get('/', function (req, res) {
    fs.createReadStream(path.join(basePath, 'index.html'), 'utf8').pipe(injectConfig(clientOptions)).pipe(res);
  }).get('/m', mobile).get('/m.html', mobile).use((0, _serveStatic2.default)(basePath));
}