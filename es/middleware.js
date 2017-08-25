import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import * as path from 'path';
import * as defaultFs from 'fs';
import trumpet from 'trumpet';
import router from 'router';
import serveStatic from 'serve-static';

function injectConfig(transform, config) {
  transform.select('#u-wave-config').createWriteStream().end(JSON.stringify(config));
}

function injectTitle(transform, title) {
  transform.select('title').createWriteStream().end(title);
}

function injectResetKey(transform, key) {
  transform.select('#reset-data').createWriteStream().end(key);
}

export default function uwaveWebClient(uw) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _options$basePath = options.basePath,
      basePath = _options$basePath === undefined ? path.join(__dirname, '../public') : _options$basePath,
      _options$fs = options.fs,
      fs = _options$fs === undefined ? defaultFs : _options$fs,
      _options$title = options.title,
      title = _options$title === undefined ? 'üWave' : _options$title,
      clientOptions = _objectWithoutProperties(options, ['basePath', 'fs', 'title']);

  var clientRouter = router();

  var mobile = function mobile(req, res) {
    var transform = trumpet();
    injectTitle(transform, title);
    injectConfig(transform, clientOptions);

    fs.createReadStream(path.join(basePath, 'm.html'), 'utf8').pipe(transform).pipe(res);
  };

  return clientRouter.get('/', function (req, res) {
    var transform = trumpet();
    injectTitle(transform, title);
    injectConfig(transform, clientOptions);

    fs.createReadStream(path.join(basePath, 'index.html'), 'utf8').pipe(transform).pipe(res);
  }).get('/reset/:key', function (req, res) {
    var transform = trumpet();
    injectTitle(transform, title);
    injectConfig(transform, { apiUrl: clientOptions.apiUrl });
    injectResetKey(transform, req.params.key);

    fs.createReadStream(path.join(basePath, 'password-reset.html'), 'utf8').pipe(transform).pipe(res);
  }).get('/m', mobile).get('/m.html', mobile).use(serveStatic(basePath));
}
//# sourceMappingURL=middleware.js.map
