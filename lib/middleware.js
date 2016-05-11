'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uwaveWebClient;

var _cheerio = require('cheerio');

var _path = require('path');

var path = _interopRequireWildcard(_path);

var _fs = require('fs');

var _router = require('router');

var _router2 = _interopRequireDefault(_router);

var _serveStatic = require('serve-static');

var _serveStatic2 = _interopRequireDefault(_serveStatic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function injectConfig(html, config) {
  var $ = (0, _cheerio.load)(html);
  $('#u-wave-config').text(JSON.stringify(config));
  return $.html();
}

function uwaveWebClient(uw) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var _options$basePath = options.basePath;
  var basePath = _options$basePath === undefined ? __dirname : _options$basePath;

  var clientOptions = _objectWithoutProperties(options, ['basePath']);

  return (0, _router2.default)().get('/', function (req, res, next) {
    (0, _fs.readFile)(path.join(basePath, 'index.html'), 'utf8', function (err, content) {
      if (err) {
        next();
        return;
      }
      res.end(injectConfig(content, clientOptions));
    });
  }).use((0, _serveStatic2.default)(basePath));
}