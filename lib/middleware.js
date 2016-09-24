'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uwaveWebClient;

var _cheerio = require('cheerio');

var _path = require('path');

var path = _interopRequireWildcard(_path);

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

var _router = require('router');

var _router2 = _interopRequireDefault(_router);

var _serveStatic = require('serve-static');

var _serveStatic2 = _interopRequireDefault(_serveStatic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function injectConfig(html, config) {
  var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var pluginsScript = _ref.pluginsScript;
  var pluginsStyle = _ref.pluginsStyle;

  var $ = (0, _cheerio.load)(html);
  $('#u-wave-config').text(JSON.stringify(config));
  if (pluginsScript) {
    $('#u-wave-plugins').attr('src', pluginsScript);
  } else {
    $('#u-wave-plugins').remove();
  }
  if (pluginsStyle) {
    $('#u-wave-plugins-style').attr('href', pluginsStyle);
  } else {
    $('#u-wave-plugins-style').remove();
  }
  return $.html();
}

function uwaveWebClient(uw) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var _options$basePath = options.basePath;
  var basePath = _options$basePath === undefined ? __dirname : _options$basePath;
  var _options$pluginsScrip = options.pluginsScript;
  var pluginsScript = _options$pluginsScrip === undefined ? null : _options$pluginsScrip;
  var _options$pluginsScrip2 = options.pluginsScriptFile;
  var pluginsScriptFile = _options$pluginsScrip2 === undefined ? null : _options$pluginsScrip2;
  var _options$pluginsStyle = options.pluginsStyle;
  var pluginsStyle = _options$pluginsStyle === undefined ? null : _options$pluginsStyle;
  var _options$pluginsStyle2 = options.pluginsStyleFile;
  var pluginsStyleFile = _options$pluginsStyle2 === undefined ? null : _options$pluginsStyle2;

  var clientOptions = _objectWithoutProperties(options, ['basePath', 'pluginsScript', 'pluginsScriptFile', 'pluginsStyle', 'pluginsStyleFile']);

  var pluginsScriptName = 'custom.js';
  var pluginsStyleName = 'custom.css';
  var clientRouter = (0, _router2.default)();

  if (pluginsScriptFile) {
    clientRouter.get('/' + pluginsScriptName, function (req, res) {
      res.writeHeader(200, { 'content-type': 'application/javascript' });
      fs.createReadStream(pluginsScriptFile).pipe(res);
    });
  } else if (pluginsScript) {
    clientRouter.get('/' + pluginsScriptName, function (req, res) {
      res.writeHeader(200, { 'content-type': 'application/javascript' });
      res.end(pluginsScript);
    });
  }

  if (pluginsStyleFile) {
    clientRouter.get('/' + pluginsStyleName, function (req, res) {
      res.writeHeader(200, { 'content-type': 'text/css' });
      fs.createReadStream(pluginsStyleFile).pipe(res);
    });
  } else if (pluginsStyle) {
    clientRouter.get('/' + pluginsStyleName, function (req, res) {
      res.writeHeader(200, { 'content-type': 'text/css' });
      res.end(pluginsStyle);
    });
  }

  return clientRouter.get('/', function (req, res, next) {
    fs.readFile(path.join(basePath, 'index.html'), 'utf8', function (err, content) {
      if (err) {
        next();
        return;
      }
      res.end(injectConfig(content, clientOptions, {
        pluginsScript: pluginsScriptFile || pluginsScript ? pluginsScriptName : null,
        pluginsStyle: pluginsStyleFile || pluginsStyle ? pluginsStyleName : null
      }));
    });
  }).use((0, _serveStatic2.default)(basePath));
}