import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import * as path from 'path';
import * as defaultFs from 'fs';
import trumpet from 'trumpet';
import router from 'router';
import serveStatic from 'serve-static';

function injectConfig(config) {
  var transform = trumpet();
  transform.select('#u-wave-config').createWriteStream().end(JSON.stringify(config));
  return transform;
}

export default function uwaveWebClient(uw) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _options$basePath = options.basePath,
      basePath = _options$basePath === undefined ? path.join(__dirname, '../public') : _options$basePath,
      _options$fs = options.fs,
      fs = _options$fs === undefined ? defaultFs : _options$fs,
      clientOptions = _objectWithoutProperties(options, ['basePath', 'fs']);

  var clientRouter = router();

  var mobile = function mobile(req, res) {
    fs.createReadStream(path.join(basePath, 'm.html'), 'utf8').pipe(injectConfig(clientOptions)).pipe(res);
  };

  return clientRouter.get('/', function (req, res) {
    fs.createReadStream(path.join(basePath, 'index.html'), 'utf8').pipe(injectConfig(clientOptions)).pipe(res);
  }).get('/m', mobile).get('/m.html', mobile).use(serveStatic(basePath));
}
//# sourceMappingURL=middleware.js.map
